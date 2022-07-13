import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { Button, Image, useMediaQuery } from "@chakra-ui/react";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

  const handleDownload = () => {
    var a = document.createElement("a");
    a.href = "CV - Diogo Catarino.pdf";
    a.setAttribute("download","CV - Diogo Catarino.pdf");
    a.click();
  };

  return (
    <Stack>
      <Flex
        direction={isNotSmallScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallScreen ? "32" : "0"}
        alignSelf="flex-end"
      >
        <Box mt={isNotSmallScreen ? 0 : 16} align="flex-start">
          <Flex flexDirection="row" align="center">
            <Text fontSize="5xl" fontWeight="semiBold">
              Hi, I am
            </Text>

            <Image
              ml="20px"
              w="200px"
              h="200px"
              fit="fill"
              borderRadius="full"
              src="profilepic.png"
              border="2px solid #fff"
            />
          </Flex>

          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
            bgClip="text"
          >
            Diogo Catarino
          </Text>
          <Text textAlign="justify" color={isDark ? "gray.200" : "gray.500"}>
            I'm currently attending the 3rd year of the Computer Science
            Engineering Bachelor's Degree in Iscte- Instituto Universitário de
            Lisboa. During this time, I have had contact with multiple
            technologies that can be checked in my education section. Some of
            them as part of my school projects and others as side projects. At
            this point in my career, I want the opportunity to deal with
            different challenges in order to grow. On my side you can count with
            someone who is motivated, keen to learn and to take on new
            challenges. At the moment, I'm looking for a summer internship in
            the following areas: Data Science, Cyber Security, Data Mining and
            Artificial Intelligence.
          </Text>
          <Button
            onClick={handleDownload}
            href="profilepic.png"
            download
            mt={8}
            colorScheme="blue"
          >
            Download CV
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Header;
