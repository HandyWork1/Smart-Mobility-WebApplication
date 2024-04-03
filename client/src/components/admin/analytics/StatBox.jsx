import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const StatBox = ({ title, subtitle, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          {icon}
        </Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ color: colors.greenAccent[500], mt: 1 }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default StatBox;
