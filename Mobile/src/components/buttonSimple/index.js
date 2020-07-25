import React from 'react';
import { Button, Value } from './styles';

const ButtonSimple = ({ priceFlag, ButtonFlag, price, }) => {
  

  const ForPrice =  (
    <Button disabled >
       <Value> R$ {price},00 </Value>
   </Button>
  )


  const ForButton =  (
    <Button transparent>
       <Value> Add to cart </Value>
   </Button>
  )



  if(priceFlag){
    return ForPrice
  }

  if(ButtonFlag){
    return ForButton
  }
}

export default ButtonSimple;