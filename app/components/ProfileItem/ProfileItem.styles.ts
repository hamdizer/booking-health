import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMessage",
})<{ isMessage: boolean }>(({ isMessage }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: isMessage ? "8px" : "auto",
  cursor: isMessage ? "pointer" : "default",
  "&:hover": isMessage ? { backgroundColor: "#D8FCF7" } : {},
}));

export const LeftBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const TextContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMessage",
})<{ isMessage: boolean }>(({ isMessage }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginLeft: "8px",
  gap: isMessage ? "2px" : "8px",
}));

export const PropertyText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isMessage",
})<{ isMessage: boolean }>(({ isMessage }) => ({
  fontWeight: isMessage ? "bold" : "auto",
  fontSize: "14px",
}));

export const ValueText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isMessage",
})<{ isMessage: boolean }>(({ isMessage }) => ({
  fontWeight: isMessage ? "auto" : "bold",
  fontSize: "14px",
}));

export const RightBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "8px",
});
