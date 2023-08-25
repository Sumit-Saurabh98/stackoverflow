import { Box, Container, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { menu } from "../../utils/menu";

function LeftBar(props) {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <Container>
      {menu.map((item, index) => {
        const isSelected = selectedItem === index;
        return (
          <Box
            key={index}
            onClick={() => handleItemClick(index)}
            borderLeft={isSelected ? "5px solid #F48224" : "transparent"}
            pl={"10px"}
          >
            <Text
              pb={"10px"}
              _hover={{ cursor: "pointer" }}
              color={isSelected ? "#F48224" : "black"} 
            >
              <span style={{ paddingRight: "10px" }}>{item.icon}</span>
              {item.title}
            </Text>
          </Box>
        );
      })}
    </Container>
  );
}

export default LeftBar;
