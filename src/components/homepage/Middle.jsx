import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineEye, AiOutlineLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Middle(props) {
    const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_ENDPOINT);

    setQuestions(data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

function getTimeAgo(creationTimestamp) {
    const currentTime = Math.floor(Date.now() / 1000);
    const timeElapsed = currentTime - creationTimestamp;

    if (timeElapsed < 60) {
      return `${timeElapsed} seconds`;
    } else if (timeElapsed < 3600) {
      return `${Math.floor(timeElapsed / 60)} minutes`;
    } else if (timeElapsed < 86400) {
      return `${Math.floor(timeElapsed / 3600)} hours`;
    } else if (timeElapsed < 2592000) {
      return `${Math.floor(timeElapsed / 86400)} days`;
    } else if (timeElapsed < 31536000) {
      return `${Math.floor(timeElapsed / 2592000)} months`;
    } else {
      return `${Math.floor(timeElapsed / 31536000)} years`;
    }
  }

    return (
        <Box
              flex="1"
              overflowY="auto"
              borderRight={"1px solid gray"}
              borderLeft={"1px solid gray"}
              padding="0 40px"
            >
              {questions && questions.map((item) => {
                return (
                  <Box
                    display="flex"
                    alignItems={"center"}
                    flexWrap="wrap"
                    justifyContent="space-between"
                    borderBottom={"1px solid gray"}
                    key={item.question_id}
                  >
                    <Box w="60%">
                      <a style={{ textDecoration: "none" }} href="/">
                        <Text color={"#0074CC"}>{item.title}</Text>
                      </a>
                      <Box display="flex" alignItems="center" flexWrap={"wrap"}>
                        {/* Use a single flex container for tags */}
                        {item.tags.map((tag, i) => (
                          <Box
                            fontSize="10px"
                            border={"1px solid gray"}
                            borderRadius={"30px"}
                            p={"2px 10px"}
                            key={i}
                            marginRight="10px"
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Text fontSize="12px" opacity="0.8" marginRight="10px">
                          {item.last_edit_date ? (
                            <span>
                              <span
                                style={{ fontSize: "10px", opacity: "0.5" }}
                              >
                                Modified
                              </span>
                              <span
                                style={{ fontSize: "10px", opacity: "0.5" }}
                              >
                                {getTimeAgo(item.last_edit_date)} ago
                              </span>
                              <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: "none",
                                  fontSize: "12px",
                                  opacity: "0.8",
                                }}
                              >
                                {item.owner.display_name}
                              </a>
                            </span>
                          ) : (
                            <span>
                              <span
                                style={{ fontSize: "10px", opacity: "0.5" }}
                              >
                                Asked
                              </span>{" "}
                              <span
                                style={{ fontSize: "10px", opacity: "0.5" }}
                              >
                                {getTimeAgo(item.creation_date)} ago
                              </span>{" "}
                              <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  textDecoration: "none",
                                  fontSize: "12px",
                                  opacity: "0.8",
                                  color:"black"
                                }}
                              >
                                {item.owner.display_name}
                              </a>
                            </span>
                          )}
                        </Text>
                        <Text opacity="0.8" fontSize="12px" ml="-5px">
                          {item.owner.reputation}
                        </Text>
                      </Box>
                    </Box>
                    <Container
                      fontSize={"14px"}
                      display="flex"
                      flexWrap="wrap"
                      columnGap={"20px"}
                      justifyContent="space-evenly"
                    >
                      <Box
                        textAlign={"center"}
                        p="0 10px"
                        _hover={{
                          boxShadow: "rgba(144, 238, 144, 0.24) 0px 3px 8px",
                          color: "green",
                        }}
                      >
                        <Text>{item.score}</Text>
                        <Text m="-5px 0">votes</Text>
                        <Text>
                          <AiOutlineLike />
                        </Text>
                      </Box>
                      <Box
                        textAlign={"center"}
                        p="0 10px"
                        _hover={{
                          boxShadow: "rgba(144, 238, 144, 0.24) 0px 3px 8px",
                          color: "green",
                        }}
                      >
                        <Text>{item.answer_count}</Text>
                        <Text m="-5px 0">answers</Text>
                        <Text>
                          <BiCommentDetail />
                        </Text>
                      </Box>
                      <Box
                        textAlign={"center"}
                        p="0 10px"
                        _hover={{
                          boxShadow: "rgba(144, 238, 144, 0.24) 0px 3px 8px",
                          color: "green",
                        }}
                      >
                        <Text>{item.view_count}</Text>
                        <Text m="-5px 0">views</Text>
                        <Text>
                          <AiOutlineEye />
                        </Text>
                      </Box>
                    </Container>
                  </Box>
                );
              })}
            </Box>
    );
}

export default Middle;