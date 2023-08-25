import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { social } from '../../utils/socials';

function Social(props) {
    return (
        <Container display="flex" justifyContent="space-between" gap="10px">
            {
                social.map((item, i)=>{
                    return <Box key={i}>
                        <Text _hover={{cursor:"pointer", color:"#fff"}}>{item}</Text>
                    </Box>
                })
            }
        </Container>
    );
}

export default Social;