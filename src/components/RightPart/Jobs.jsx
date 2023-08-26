import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";
import { jobs } from "../../utils/Jobs";
function Jobs() {
  return (
    <Container>
      <Text  as={"h3"}>Looking For Jobs...</Text>

      {
        jobs.map((job, i)=>{
            return <Box key={i} mt="50px" borderBottom="1px solid black">
        <Text fontWeight="800" color="#0074CC">{job.title}</Text>
        <Text fontSize="14px" mt="-10px">{job.company}</Text>
        <Box gap="20px" m="-20px 0" display="flex" >
          <Text fontSize="15px"> <span style={{fontSize:"15px", paddingRight:"10px"}}><MdOutlineLocationOn/></span>{job.location}</Text>
          <Text fontSize="15px"><span style={{fontSize:"10px", paddingRight:"10px"}}><FaEarthAsia/></span>{job.mode}</Text>
        </Box>
        <Box gap="10px" display="flex">
          {
            job.tags.map((tag, i) =>{
                return <Text key={i} fontSize="15px" backgroundColor="#fff" borderRadius="20px" p="0 10px">{tag}</Text>
            })
          }
        </Box>
      </Box>
        })
      }

    </Container>
  );
}

export default Jobs;
