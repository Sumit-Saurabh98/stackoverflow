import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import QuestionHeder from "../header/QuestionHeder";

function QuestionStructure({questions}) {


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
      padding="0 40px"
    >
      <QuestionHeder/>
      {questions &&
        questions.map((item) => {
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
                  <Text fontWeight="600" color={"#0074CC"}>{item.title}</Text>
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
                  <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                    {item.last_edit_date ? (
                      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"} columnGap={"5px"} fontSize={"12px"}>
                        <Text>Modified</Text>
                        <Text>{getTimeAgo(item.last_edit_date)} ago</Text>
                        <a href="/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                          {item.owner.display_name}
                        </a>
                      </Box>
                    ) : (
                      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"} columnGap={"5px"} fontSize={"12px"}>
                        <Text>Asked</Text>
                        <Text>{getTimeAgo(item.creation_date)} ago</Text>
                        <a href="/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                          {item.owner.display_name}
                        </a>
                      </Box>
                    )}
                  </Box>
                  <Text fontSize={"12px"}>
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

export default QuestionStructure;
