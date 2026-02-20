import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  borderRadius: "16px",
  justifyContent: "space-between",
  paddingTop: "1rem",
  cursor: "pointer",
});

export const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: 0,
  borderRadius: "16px",

  padding: 0,
  alignItems: "center",
});

export const HeaderTitle = styled(Typography)({
  paddingLeft: "1rem",
  fontWeight: 800,
  color: "#072635",
  fontSize: "24px",
});

export const SearchIconWrapper = styled(Box)({
  paddingRight: "1rem",
});

export const ListContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxHeight: "170.5vh",
  overflowY: "scroll",
  marginTop: "2rem",
});
