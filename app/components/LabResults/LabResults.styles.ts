import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  borderRadius: "16px",
  padding: "2rem",
  justifyContent: "space-between",
  marginTop: "2rem",
});

export const Title = styled(Typography)({
  fontWeight: 800,
  color: "#072635",
  fontSize: "24px",
  marginBottom: "16px",
});

export const LabResultRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px",
  marginBlock: "8px",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#F6F7F8",
  },
});

export const LabResultText = styled(Typography)({
  marginLeft: "8px",
  color: "#072635",
  fontSize: "13px",
});
