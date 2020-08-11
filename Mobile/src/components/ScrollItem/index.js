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
  const [selected, setSelected] = useState(true);


  const OnChangeSelected = (item) => {
    console.log(` indice: ${item}`)
    console.log(` selecionado: ${selected}`)

   
   
  }
  
  return (
    <Container>
    
    <Scroll 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ 
      paddingHorizontal: 20,
      alignItems:'center',
      elevation: 5
    }}>



      {
      Items.map((item, i) =>(
        <BtnItem  select={selected}  key={i} onPress={() => OnChangeSelected(item)}>
        <Text> {item} </Text>
        </BtnItem>
      ))
      }




    </Scroll>
    </Container>
   
    );
}

export default ScrollItem;