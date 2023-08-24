import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import {menu} from "../utils/menu"

function LeftBar(props) {
  return (
    <Container>
        {
            menu.map((item)=>{
                return <Box>
                    <Text pb={"10px"} _hover={{cursor:"pointer"}}>
                        <span style={{paddingRight:"10px"}}>{item.icon}</span>
                        {item.title}
                    </Text>
                </Box>
            })
        }
    </Container>
  );
}

export default LeftBar;
