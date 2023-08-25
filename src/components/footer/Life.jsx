import { Box, Container, Text } from "@chakra-ui/react";
import { life } from "../../utils/footerList";

function Life(props) {
    return (
        <Container>
             <Text>LIFE/ARTS</Text>
            {
                life.map((item, i)=>{
                    return <Box key={i}>
                        <Text _hover={{cursor:"pointer", color:"#fff"}} fontSize="14px" marginBottom="-10px">{item}</Text>
                    </Box>
                })
            }
        </Container>
    );
}

export default Life;