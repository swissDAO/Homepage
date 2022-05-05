import React from "react";
import Logo from "./Logo";
import NavBarContainer from "./NavbarContainer";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo/>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;