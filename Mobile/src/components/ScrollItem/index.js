import React, {useState} from 'react';
import { Scroll, BtnItem, Text,  Container } from './styles';

const ScrollItem = () => {
  const Items = [
    'Anime',
    'Heroes',
    'Comic',
    'Decoration',
    'Girl',
    'Boy',

  ]
  const {selected, setSelected} = useState();
  
  return (
    <Container>
    

    <Scroll 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ 
      paddingHorizontal: 20,
      alignItems:'center'
    }}>

      <BtnItem  selected={true}>
        <Text> Teste </Text>
      </BtnItem>

      {
      Items.map((item, i) =>(
        <BtnItem  selected={false}  key={i}>
        <Text> {item} </Text>
        </BtnItem>
      ))
      }

     

      



    </Scroll>
    </Container>
   
    );
}

export default ScrollItem;