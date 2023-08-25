import {
  Avatar,
  Box,
  Container,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import style from "./../../styles/header.module.css"
import { BiNotification } from "react-icons/bi";
import { AiOutlineTrophy } from "react-icons/ai";

function Header(props) {
  return (
    <Container className={style.main_container}>
      <Box>
        <a href="/">
        <img
        className={style.logo}
        src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
        alt="stackOverflow"
      />
      </a>
      </Box>
      <Box>
        <Input sx={{ paddingLeft: '20px' }} borderRadius="30px"   h="30px" w="40vw" placeholder="Search" />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap="20px" fontSize="20px">
      <Text _hover={{cursor:"pointer"}} fontSize="15px">Help</Text>
      <Text _hover={{cursor:"pointer"}} fontSize="15px">Tour</Text>
      <Box _hover={{cursor:"pointer"}}>
         <BiNotification/>
     </Box>
      <Box _hover={{cursor:"pointer"}}>
        <AiOutlineTrophy/>
      </Box>
      <Box w="40px" h="40px" borderRadius="50%" overflow="hidden">
      <Avatar _hover={{cursor:"pointer"}} w="100%" h="100%" borderRadius="6px" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
    </Box>
    </Box>
    </Container>
  );
}

export default Header;
