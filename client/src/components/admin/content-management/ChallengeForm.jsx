import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  IconButton,
  Divider,
  Grid,
  useTheme,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { tokens } from "../../../theme";

const ChallengeForm = ({ open, onClose, handleSave, selectedDate }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [challengeData, setChallengeData] = useState({
    title: "",
    description: "",
    points: "",
    category: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChallengeData({ ...challengeData, [name]: value });
  };

  const handleSaveClick = () => {
    handleSave(challengeData, selectedDate);
    console.log("Selected in the form", selectedDate);
    // Reset the form fields
    setChallengeData({
        title: "",
        description: "",
        points: "",
        category: "",
        startDate: "",
        endDate: "",
      });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle backgroundColor={colors.primary[400]}>
        <Typography variant="h4">Add New Challenge</Typography>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: colors.primary[400] }}>
        <Box backgroundColor={colors.primary[400]} color={colors.primary[100]}>
          <TextField
            label="Title"
            name="title"
            value={challengeData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.primary[200], // Change outline color
                },
                "& .MuiInputLabel-root": {
                  color: colors.primary[100], // Change label color
                },
                "& .MuiOutlinedInput-input": {
                  color: colors.primary[100], // Change input text color
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.greenAccent[500], // Change outline color when focused
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: colors.greenAccent[500], // Change label color when focused
                },
              }}
          />
          <TextField
            label="Description"
            name="description"
            value={challengeData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.primary[200], // Change outline color
                },
                "& .MuiInputLabel-root": {
                  color: colors.primary[100], // Change label color
                },
                "& .MuiOutlinedInput-input": {
                  color: colors.primary[100], // Change input text color
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: colors.greenAccent[500], // Change outline color when focused
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: colors.greenAccent[500], // Change label color when focused
                },
              }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Points"
                name="points"
                type="number"
                value={challengeData.points}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.primary[200], // Change outline color
                    },
                    "& .MuiInputLabel-root": {
                      color: colors.primary[100], // Change label color
                    },
                    "& .MuiOutlinedInput-input": {
                      color: colors.primary[100], // Change input text color
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.greenAccent[500], // Change outline color when focused
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: colors.greenAccent[500], // Change label color when focused
                    },
                  }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Category"
                name="category"
                value={challengeData.category}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.primary[200], // Change outline color
                    },
                    "& .MuiInputLabel-root": {
                      color: colors.primary[100], // Change label color
                    },
                    "& .MuiOutlinedInput-input": {
                      color: colors.primary[100], // Change input text color
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.greenAccent[500], // Change outline color when focused
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: colors.greenAccent[500], // Change label color when focused
                    },
                  }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Start Date"
                name="startDate"
                type="date"
                value={challengeData.startDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.primary[200], // Change outline color
                    },
                    "& .MuiInputLabel-root": {
                      color: colors.primary[100], // Change label color
                    },
                    "& .MuiOutlinedInput-input": {
                      color: colors.primary[100], // Change input text color
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.greenAccent[500], // Change outline color when focused
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: colors.greenAccent[500], // Change label color when focused
                    },
                  }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="End Date"
                name="endDate"
                type="date"
                value={challengeData.endDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.primary[200], // Change outline color
                    },
                    "& .MuiInputLabel-root": {
                      color: colors.primary[100], // Change label color
                    },
                    "& .MuiOutlinedInput-input": {
                      color: colors.primary[100], // Change input text color
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.greenAccent[500], // Change outline color when focused
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: colors.greenAccent[500], // Change label color when focused
                    },
                  }}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: colors.primary[400] }}>
        <Button
          variant="outlined"
          onClick={onClose}
          startIcon={<CancelIcon />}
          sx={{
            borderColor: colors.redAccent[500], 
            color: colors.redAccent[500],
            "&:hover": {
              backgroundColor: colors.redAccent[500], // Change border color on hover
              color: colors.primary[100], // Change text color on hover
            }
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSaveClick}
          startIcon={<SaveIcon />}
          sx={{
            backgroundColor: colors.greenAccent[800], 
            color: colors.primary[100],
            "&:hover": {
              backgroundColor: colors.greenAccent[700], // Change background color on hover
              color: colors.primary[100], // Change text color on hover
            }
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChallengeForm;
