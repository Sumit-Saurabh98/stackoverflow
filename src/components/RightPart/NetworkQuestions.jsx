import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function NetworkQuestions(props) {
    const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(process.env.REACT_APP_API_ENDPOINT);

    setQuestions(data.items);
  };

  useEffect(() => {
    fetchData();
  }, []);
    return (
        <Container>
            <Text  as={"h3"}>Network Questions</Text>
            {
                questions.map((q)=>{
                    return <Text fontSize="15px" fontWeight="600" color={"#0074CC"} p="0 10px">
                        {q.title}
                    </Text>
                })
            }
        </Container>
    );
}

export default NetworkQuestions;