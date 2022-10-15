import {
  Button, Link
} from '@chakra-ui/react';
import React from "react";
import { SiDiscord, SiLinkedin, SiTwitter } from "react-icons/si";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavbarContainer";
import NextLink from "next/link";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Button leftIcon={<SiTwitter />} color='black' variant='outline' colorScheme='whiteAlpha' size='sm'>
        <NextLink href="https://twitter.com/swissDAOspace" passHref isExternal>
          <Link target="_blank" rel="noopener noreferrer">Follow</Link>
        </NextLink>
      </Button>
      <Button leftIcon={<SiLinkedin />} color='black' variant='outline' colorScheme='whiteAlpha' size='sm'>
        <NextLink href="https://www.linkedin.com/company/swissdaospace" passHref isExternal>
          <Link target="_blank" rel="noopener noreferrer">Follow</Link>
        </NextLink>
      </Button>
      <Button leftIcon={<SiDiscord />} color='black' variant='outline' colorScheme='whiteAlpha' size='sm'>
        <NextLink href="https://discord.gg/yX8dZEvvXB" passHref isExternal>
          <Link target="_blank" rel="noopener noreferrer">Join</Link>
        </NextLink>
      </Button>
    </NavBarContainer>
  );
};

export default NavBar;