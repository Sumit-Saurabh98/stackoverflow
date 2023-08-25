import { Box, Container, Text } from "@chakra-ui/react";
import { culture } from "../../utils/footerList";


function Culture(props) {
    return (
        <Container>
             <Text>CULTURE/RECREATION</Text>
            {
                culture.map((item, i)=>{
                    return <Box key={i} >
                        <Text _hover={{cursor:"pointer", color:"#fff"}} fontSize="14px" marginBottom="-10px">{item}</Text>
                    </Box>
                })
            }
        </Container>
    );
}

export default Culture;