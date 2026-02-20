import Button from "../../common/Button/Button";
import { Box } from "@mui/material";
import { Link } from "../../types/types";

interface MenuProps {
  links: Link[];
}

const Menu = (props: MenuProps) => {
  return (
    <Box display={"flex"} gap={2}>
      {props.links.map((link) => (
        <Button name={link.name} icon={link.icon} />
      ))}
    </Box>
  );
};

export default Menu;
