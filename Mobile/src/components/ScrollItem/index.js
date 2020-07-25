import React, {useState} from 'react';
import { Scroll, BtnItem, Text,  Container } from './styles';

const ScrollItem = () => {

  const {selected, setSelected} = useState();
  
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
      <BtnItem >
      <Text> Anime </Text>
      </BtnItem>


      <BtnItem selected>
      <Text> Heroes </Text>
      </BtnItem>

      <BtnItem >
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