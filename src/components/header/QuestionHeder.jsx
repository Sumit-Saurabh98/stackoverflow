import { Container, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { questionHeader } from '../../utils/questionHeader';


function QuestionHeader(props) {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleItemClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <Container display="flex" justifyContent="space-around" borderBottom="1px solid gray">
      {questionHeader.map((item, index) => {
        const isActive = clickedIndex === index;

        return (
          <Text
            key={index}
            color={isActive ? 'white' : 'black'}
            bg={isActive ? '#F48224' : 'transparent'}
            onClick={() => handleItemClick(index)}
            cursor="pointer"
            p="5px 10px"
            borderRadius="4px"
          >
            {item}
          </Text>
        );
      })}
    </Container>
  );
}

export default QuestionHeader;
