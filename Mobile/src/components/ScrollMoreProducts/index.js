import React from 'react'
import { products } from '../../utils/ApiF'
import { MoreScroll, LabelTitle, Label, Container } from './styles'
import Card from '../Card'

const ScrollMoreProducts = () => {
  return(

  <Container>

  
      



<MoreScroll>


{products.map( product => (
      <Card 
        Space={true}
         Name={product.name}
        Marca={product.mark}
        Pricy={product.price}
        image_url={product.imageMain_url}
      />

    ))}
</MoreScroll>

<LabelTitle> Veja Também </LabelTitle>

  </Container>
    
    
      
    );
}

export default ScrollMoreProducts;