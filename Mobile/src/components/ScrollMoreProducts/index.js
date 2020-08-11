import React from 'react'
import { products } from '../../utils/ApiF'
import { MoreScroll, LabelTitle, Label, Container } from './styles'
import Card from '../Card'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const ScrollMoreProducts = ({Produtos}) => {
  return(

  <Container>

  
      



<MoreScroll>


{Produtos.map( product => (
      <Card 
        Space={true}
         Name={product.name}
        Marca={product.mark}
        Pricy={product.price}
        image_url={product.imageMain_url}
        imagesDetails={product.imagesDetails}
        description={product.description}
        disponibility={product.disponibility}
        originalPack={product.originalPack}
        dimensions={product.dimensions}
        peso={product.peso}
        material={product.material}
       

    
      />

    ))}
</MoreScroll>

<LabelTitle> Veja Também </LabelTitle>

  </Container>
    
    
      
    );
}

export default ScrollMoreProducts;