import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TableContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const HeaderRow = styled(Box)({
  display: "flex",
  backgroundColor: "#F6F7F8",
  borderRadius: "24px",
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
  gap: "16px",
});

export const HeaderCell = styled(Box)({
  flex: 1,
});

export const HeaderText = styled(Typography)({
  fontWeight: "bold",
  color: "#072635",
  fontSize: "14px",
  fontFamily: "manrope",
  textAlign: "left",
});

export const BodyContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: "32px",
});

export const BodyRow = styled(Box)({
  display: "flex",
  gap: "16px",
  paddingBlock: "0.5rem",
  paddingInline: "1rem",
});

export const BodyCell = styled(Box)({
  flex: 1,
});

export const BodyText = styled(Typography)({
  textAlign: "left",
  color: "#072635",
  fontSize: "14px",
  fontFamily: "manrope",
});
