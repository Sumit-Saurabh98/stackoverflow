import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { technology } from '../../utils/footerList';

function Technology(props) {
    return (
        <Container>
             <Text>TECHNOLOGY</Text>
            {
                technology.map((item, i)=>{
                    return <Box key={i}>
                         <Text _hover={{cursor:"pointer", color:"#fff"}} fontSize="14px" marginBottom="-10px">{item}</Text>
                    </Box>
                })
            }
        </Container>
    );
}

export default Technology;