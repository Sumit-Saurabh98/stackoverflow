import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import TopFooter from './TopFooter';
import Social from './Social';
import Technology from './Technology';
import Life from './Life';
import Culture from './Culture';
import Science from './Science';
import Other from './Other';

function Footer(props) {
    return (
        <Container w="100vw" backgroundColor="#232629">
        <Box borderBottom="1px solid gray" color="gray" display="flex" flexWrap="flex" justifyContent="space-around">
            <TopFooter/>
            <Social/>
        </Box>
        <Box color="gray" display="flex" flexWrap="wrap" justifyContent="space-around">
            <Technology/>
            <Life/>
            <Culture/>
            <Science/>
            <Other/>
        </Box>
        </Container>
    );
}

export default Footer;