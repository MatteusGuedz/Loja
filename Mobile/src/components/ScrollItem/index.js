import React from 'react';
import { Scroll, BtnItem, Text,  Container } from './styles';

const ScrollItem = () => {
  return (
    <Container>
    

    <Scroll 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ 
      paddingHorizontal: 20,
      alignItems:'center'
    }}
    >
      <BtnItem>
      <Text> Anime </Text>
      </BtnItem>


      <BtnItem>
      <Text> Heroes </Text>
      </BtnItem>

      <BtnItem>
      <Text> Comic </Text>
      </BtnItem>

      <BtnItem>
      <Text> Girl </Text>
      </BtnItem>
       
       
    


    </Scroll>
    </Container>
   
    );
}

export default ScrollItem;