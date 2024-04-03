import { useState, useEffect } from "react";
import axios from 'axios';
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
// Components
import { toast } from 'react-toastify';
import { tokens } from "../../../theme";
import Header from "../analytics/Header";
import ChallengeForm from "./ChallengeForm";

const ChallengesTipsPage  = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [events, setEvents] = useState([]);
  const [isChallengeModalOpen, setChallengeModalOpen] = useState(false);
  const [newChallengeTitle, setNewChallengeTitle] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // Alert Display for success 
  const handleSuccessAlert = (message) => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 5000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // Alert Display for success 
  const handleFailureAlert = (message) => {
    toast.error(message, {
      position: 'top-center',
      autoClose: 5000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDateClick = (selected) => {
    setChallengeModalOpen(true);
    setSelectedDate(selected);
  };

  const handleSave = (challengeData, selectedDate) => {
    if (selectedDate.view && selectedDate.view.calendar) {
      console.log("New challenge data", challengeData);
  
      if (challengeData.title) {
        // Make a POST request to the backend API endpoint using Axios
        axios.post("http://localhost:5000/api/challenges", challengeData)
          .then((response) => {
            console.log("Challenge data", challengeData);
            // Add the new event to the events array
            const newEvent = {
              id: response.data._id,
              title: challengeData.title,
              start: challengeData.startDate,
              end: challengeData.endDate,
            };
            setEvents([...events, newEvent]); // Merge with existing events
            handleSuccessAlert("Successfully added challenge");
          })
          .catch((error) => {
            console.error("Error adding challenge:", error);
            handleFailureAlert("Failed to add challenge");
          });
      } else {
        console.error("Challenge title is required");
        handleFailureAlert("Challenge title is required");
      }
    } else {
      console.error("Cannot access calendar API");
      handleFailureAlert("Cannot access calendar API");
    }
  };

  // Fetch all challenges from the database
  useEffect(() => {
    axios.get("http://localhost:5000/api/getChallenges")
      .then((response) => {
        // Extract required data (title, start date, end date) from the fetched challenges
        const fetchedEvents = response.data.map(challenge => ({
          id: challenge._id,
          title: challenge.title,
          start: challenge.startDate,
          end: challenge.endDate
        }));
        setEvents(fetchedEvents);
      })
      .catch((error) => {
        console.error("Error fetching challenges:", error);
        handleFailureAlert("Failed to fetch challenges");
      });
  }, []);
  // Delete  a single event when its "delete" button is clicked
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      // Remove event from the DOM
      selected.event.remove();
  
      // Make a DELETE request to remove the event from the database
      axios.delete(`http://localhost:5000/api/challenges/${selected.event.id}`)
        .then((response) => {
          console.log("Event deleted successfully");
          handleSuccessAlert("Event deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting event:", error);
          handleFailureAlert("Failed to delete event");
        });
    }
  };

  return (
    <Box m="20px">
      <Header title="Challenges Calendar" subtitle="Full Challenges Management Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
          // Apply fixed height and overflow styling
          style={{ maxHeight: '75vh', overflowY: 'auto' }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {events.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={events} // Render events from state
          />
        </Box>
        <ChallengeForm 
        open={isChallengeModalOpen}
        onClose={() => setChallengeModalOpen(false)}
        handleSave={handleSave}
        onTitleChange={(title) => setNewChallengeTitle(title)}
        selectedDate={selectedDate}
        />
      </Box>
    </Box>
  );
};

export default ChallengesTipsPage;
