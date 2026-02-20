import { Box, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  borderRadius: "16px",
  padding: "2rem",
  paddingTop: "1rem",
});

export const Title = styled(Typography)({
  fontWeight: 800,
  color: "#072635",
  fontSize: "24px",
  marginBottom: "16px",
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  flexWrap: "wrap",
  marginTop: "2rem",
}));

export const DiagnosisGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
