import React from "react"
import { Box } from "@chakra-ui/react"
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";

const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
  };

export default MenuToggle;