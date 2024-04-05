import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
// Icons
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EcoIcon from "@mui/icons-material/EnergySavingsLeaf";
import RecyclingIcon from '@mui/icons-material/Recycling';
// Components
import Header from "../analytics/Header";
import LineChart from "../analytics/LineChart";
import BarChart from "../analytics/BarChart";
import StatBox from "../analytics/StatBox";
import ProgressCircle from "../analytics/ProgressCircle";
import Leaderboard from "./Leaderboard";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box mb={{ xs: '20px', md: '0' }}>
          <Button
            sx={{
              "& .css-18wo9z3-MuiButtonBase-root-MuiButton-root:hover":{
                backgroundColor:'#4e56ff !important',
              },
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 3' },
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="1000"
            subtitle="Total Users"
            icon={
              <PeopleAltIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 3' },
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="750"
            subtitle="Active Users"
            icon={
              <CheckCircleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 3' },
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="500"
            subtitle="Challenges Completed"
            icon={
              <EcoIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 3' },
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="200 tons"
            subtitle="Carbon Footprint Reduction"
            icon={
              <RecyclingIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>


        {/* ROW 2 */}
        <Box
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 12', md: 'span 8' }, 
            gridRow: { xs: 'span 3', sm: 'span 3', md: 'span 3' }, 
            backgroundColor: colors.primary[400],
            overflowX: "auto",
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Carbon Footprint Breakdown
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                20 Metric Tonnes
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box 
          height={{ xs: 'auto', sm: '300px' }}
          width={{xs:"600px", sm:'auto'}}
          m="-20px 0 0 0"
          sx={{overflowX: 'auto'}}>
            <LineChart sx={{overflowX: 'auto'}} isDashboard={true} />
          </Box>
        </Box>
        <Leaderboard/>

        {/* ROW 3 */}
        <Box
          sx={{
              gridColumn:{ xs: 'span 12', sm: 'span 12', md: 'span 6' },
              gridRow:"span 2",
              backgroundColor:colors.primary[400],
              p:"30px",
          }}
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              Ksh. 458,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn:{ xs: 'span 12', sm: 'span 12', md: 'span 6' },
            gridRow:"span 2",
            backgroundColor:colors.primary[400],
            p:"30px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
