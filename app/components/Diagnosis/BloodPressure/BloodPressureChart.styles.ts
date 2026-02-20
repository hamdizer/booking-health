import { Box, Typography, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#F4F0FE",
  borderRadius: "16px",
  padding: "20px",
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const ChartWrapper = styled(Box)(({ theme }) => ({
  height: "250px",
  maxWidth: "500px",

  width: "500px",
  [theme.breakpoints.only("xl")]: {
    width: "70%",
  },
  [theme.breakpoints.only("lg")]: {
    width: "60%",
  },
  [theme.breakpoints.only("md")]: {
    width: "60%",
  },
  [theme.breakpoints.only("sm")]: {
    width: "60%",
  },
  [theme.breakpoints.only("xs")]: {
    width: "90%",
  },
}));
export const SideBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minWidth: "200px",
});

export const CardBox = styled(Box)(({ theme }) => ({
  padding: "16px",
  borderBottom: "1px solid grey",
  "&:last-of-type": {
    borderBottom: "none",
  },
}));

export const StatusBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "4px",
});

export const LegendCircle = styled(Box)<{ color: string }>(({ color }) => ({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: color,
}));

export const TitleTypography = styled(Typography)({
  fontWeight: "bold",
  fontSize: "18px",
  color: "#072635",
});

export const CardLabelTypography = styled(Typography)({
  fontSize: "14px",
  fontWeight: "bold",
  color: "#072635",
  fontFamily: "manrope",
});

export const CardValueTypography = styled(Typography)({
  fontSize: "22px",
  fontWeight: "bold",
  color: "#072635",
  marginBottom: "4px",
});

export const CardStatusTypography = styled(Typography)({
  fontSize: "14px",
  color: "#072635",
});

export const StyledSelect = styled(Select)({
  fontSize: "14px",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
