import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import LeftBar from "../components/homepage/LeftBar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Interesting from "../components/homepage/Interesting";
import Jobs from "../components/RightPart/Jobs";
import NetworkQuestions from "../components/RightPart/NetworkQuestions";

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
          h="100vh"
          position="fixed"
          left={0}
          display={"flex"}
          justifyContent={"center"}
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        >
          <LeftBar />
        </Box>
        <Container maxW="container.lg" p={4} ml="20%">
          <Flex>
            <Interesting />
            <Box p={4} w="40%" overflowY="auto" backgroundColor="#f0edee">
              <Box display={"flex"} justifyContent={"center"}>
                <Jobs/>
              </Box>
              <NetworkQuestions/>
            </Box>
          </Flex>
        </Container>
      </Flex>
      <Footer />
    </Box>
  );
}

export default Homepage;
