import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import LeftBar from "../components/homepage/LeftBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Middle from "../components/homepage/Middle";
function Homepage(props) {
  

  return (
    <Box>
      <Box position="sticky" top="0">
        <Header />
      </Box>
      <Flex minH="100vh">
        <Box
          bg="blue.500"
          color="black"
          p={4}
          w="20%"
          position="fixed"
          left={0}
          display={"flex"}
          justifyContent={"center"}
        >
          <LeftBar />
        </Box>
        <Container maxW="container.lg" p={4} ml="20%">
          <Flex>
            {/* Middle Content */}
            <Middle/>
            {/* Right Content */}
            <Box bg="purple.500" color="red" p={4} w="30%" overflowY="auto">
              <Text>Right Content</Text>
            </Box>
          </Flex>
        </Container>
      </Flex>
      <Footer />
    </Box>
  );
}

export default Homepage;
