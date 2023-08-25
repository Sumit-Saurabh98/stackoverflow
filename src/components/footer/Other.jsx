import { Box, Container, Text } from "@chakra-ui/react";
import { other } from "../../utils/footerList";


function Other(props) {
    return (
        <Container>
             <Text>OTHER</Text>
            {
                other.map((item, i)=>{
                    return <Box key={i}>
                        <Text _hover={{cursor:"pointer", color:"#fff"}} fontSize="14px" marginBottom="-10px">{item}</Text>
                    </Box>
                })
            }
        </Container>
    );
}

export default Other;