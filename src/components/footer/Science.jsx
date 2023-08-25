import { Box, Container, Text } from "@chakra-ui/react";
import { science } from "../../utils/footerList";



function Science(props) {
    return (
        <Container>
             <Text>SCIENCE</Text>
            {
                science.map((item, i)=>{
                    return <Box key={i}>
                        <Text _hover={{cursor:"pointer", color:"#fff"}} fontSize="14px" marginBottom="-10px">{item}</Text>
                    </Box>
                })
            }
        </Container>
    );
}

export default Science;