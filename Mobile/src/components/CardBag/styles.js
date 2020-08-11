import styled from 'styled-components/native'

export const Card = styled.View`
  height: 120px;
  background-color: #fff;
  width: 90%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  flex-direction: row;
  margin-bottom:5px;
`

 


export const Infos = styled.View`
   flex:1; 
   background-color: #eee;
   border-top-right-radius:15px;
   border-bottom-right-radius:15px;
 
`

export const  ImagemProduct = styled.Image`

    width: 115px;
    height:120px;
    

`

export const BoxInfos = styled.View`
  margin-left:5px;
`

export const Title = styled.Text`
    color: #000;
    font-size:20px;
    font-weight: bold;
  

`

export const Marca = styled.Text`
  color: #999;
  font-size: 16px;
 


`

export const ContainerBottom = styled.View`
    align-items: center;
    flex-direction: row;
    /* background-color: #ccc;  */
    position: absolute;
    bottom:5px;
    width:100%;
    justify-content:space-between;
    padding-left:5px; 
    border-bottom-right-radius:15px;

    `


export const Quant = styled.View`

    /* background-color: #090; */
    flex-direction: row;
    width:110px;
   

`

export const Price = styled.Text`
 
  font-size: 16px;
  font-weight: bold;
`;
export const Cif = styled.Text`
  color: #BF4a45;
`;

  

