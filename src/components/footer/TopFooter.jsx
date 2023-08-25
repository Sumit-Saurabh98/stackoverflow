import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { topFooter } from '../../utils/topFooter';

function TopFooter(props) {
    return (
        <Container display="flex" gap="10px">
            {
                topFooter.map((item, i)=>{
                    return <Box key={i}>
                        <Text _hover={{cursor:"pointer", color:"#fff"}}>{item}</Text>
                    </Box>
                })
            }
        </Container>
    );
}

export default TopFooter;