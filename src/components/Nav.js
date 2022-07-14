import React from "react";
import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex w="100%">
      <Heading ml="8" size="medium" fontWeight="semiBold" color="cyan.400">
        Catzlandia
      </Heading>

      <Spacer></Spacer>
      <IconButton
        ml={2}
        icon={<FaGithub />}
        isRound={true}
        onClick={() => window.open("https://github.com/Catarin0")}
      ></IconButton>
      <IconButton
        ml={2}
        icon={<FaLinkedin />}
        isRound={true}
        onClick={() =>
          window.open("https://www.linkedin.com/in/diogo-catarino/")
        }
      ></IconButton>
      <IconButton
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound={true}
        onClick={toggleColorMode}
      ></IconButton>
      <Menu>
        <MenuButton
          as={IconButton}
          ml={2}
          borderRadius="30"
          borderWidth="1px"
          icon={<FaBars />}
        ></MenuButton>
        <MenuList>
          <MenuItem>Tic-Tac-Toe</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Nav;
