import {Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import QuestionStructure from "../Structure/QuestionStructure";

function Interesting() {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_ENDPOINT);

    setQuestions(data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <QuestionStructure questions={questions} />
     
     <Box textAlign={"center"}>
      <Text as={"h3"}>Looking for more?</Text>
      <Text>Browse the <span style={{color:"#0074CC", cursor:"pointer"}}>complete list of questions</span> or <span style={{color:"#0074CC", cursor:"pointer"}}>Popular Tags</span></Text>
     </Box>
    </Container>
  );
}

export default Interesting;
