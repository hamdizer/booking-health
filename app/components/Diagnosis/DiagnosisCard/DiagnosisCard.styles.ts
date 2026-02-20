import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardContainer = styled(Box)<{ bgColor: string }>(
  ({ bgColor }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "16px",
    padding: "8px",
    borderRadius: "12px",
    backgroundColor: bgColor,
  }),
);

export const TextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const HealthPropertyTypography = styled(Typography)({
  fontSize: "16px",
  color: "#072635",
  fontFamily: "manrope",
});

export const ValueTypography = styled(Typography)({
  fontWeight: 800,
  fontSize: "30px",
  color: "#072635",
  fontFamily: "manrope",
});

export const LevelTypography = styled(Typography)({
  fontSize: "14px",
  color: "#072635",
  fontFamily: "manrope",
});
