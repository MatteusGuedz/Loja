import React, {useState} from 'react';
import { View, StatusBar, StyleSheet, ScrollView, Text, Touchable } from 'react-native';
import { Header3 } from '../components/Header'
import Bottom from '../components/BottomArea'
import CardBag from '../components/CardBag'
import {products} from '../utils/ApiF'




const Cart = () => {


  const Precios = products.map(product => product.price)

  const [QuantItems, setQuantItems] = useState(products.length)
  const [TotalValue, setTotalValue] = useState(Precios)
  

  const total = TotalValue.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
  }, 0)

  

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" /> 
      <Header3 totalQuant={QuantItems} />
 
        <ScrollView>

 
            <View style={styles.ListCont}>

           


              {products.map(product => (
                <CardBag 
                Name={product.name}
                Mark={product.mark}
                Pricy={product.price}
                Image_Url={product.imageMain_url} />
                ))}

        

            </View>
                
        </ScrollView>

        <Bottom ValorTotal={total} />
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#010101'
  },
  ListCont:{

    alignItems: 'center',
    backgroundColor: '#2E2F33',
    paddingVertical:10,
  }
})

export default Cart;