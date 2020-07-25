import styled from 'styled-components/native'

const COR_ALPHA = `#BF4a45`
const COR_BASIC = `#2E2F33`

export const Container = styled.View`
   
    background-color: ${COR_BASIC};
  height: 60px;
  width: 100%;
  border-radius: 40px;
  flex-direction:row;
  margin-bottom:2px;
  overflow:hidden;

`;

export const Scroll = styled.ScrollView`

`;


export const BtnItem = styled.TouchableOpacity`

 background-color: ${props => props.selected ? COR_ALPHA : COR_BASIC} ;
 height:30px;
 padding:10px;
 border-radius:18px;
 align-items:center;
 justify-content: center;
 margin-right:50px;
`


export const Text = styled.Text`
color: #fff;
font-weight:bold; 

`;