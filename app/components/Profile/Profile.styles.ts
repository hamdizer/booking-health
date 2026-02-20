import { Box, Typography, Avatar, Card, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  borderRadius: "16px",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  alignItems: "center",
  marginTop: "1rem",
});

export const ProfileAvatar = styled(Avatar)({
  width: "40vh",
  height: "40vh",
  borderRadius: "50%",
});

export const ProfileName = styled(Typography)({
  textAlign: "center",
  fontWeight: 800,
  fontSize: "24px",
  color: "#072635",
  marginTop: "2rem",
});

export const ProfileItemsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "3rem",
  gap: "12px",
});

export const ProfileButton = styled(Button)({
  backgroundColor: "#01F0D0",
  borderRadius: "41px",
  marginTop: "2rem",
  display: "flex",
  alignItems: "center",
  width: "100%",
  textTransform: "none",
  color: "#072635",
});
