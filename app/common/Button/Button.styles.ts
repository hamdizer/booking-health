import { Button as ButtonMUI, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonWrapper = styled(Box)({});

export const StyledButton = styled(ButtonMUI)({
  backgroundColor: "transparent",
  borderRadius: "41px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#01F0D0",
    borderRadius: "41px",
  },
  display: "flex",
  alignItems: "center",
  padding: "6px 12px",
});

export const ButtonText = styled(Typography)({
  textTransform: "none",
  color: "#072635",
  marginLeft: "8px",
  fontWeight: "bold",
});
