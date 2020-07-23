import styled from 'styled-components/native'

export const Container = styled.View`
   
    background-color: #2E2F33;
  height: 60px;
  width: 100%;
  border-radius: 40px;
  flex-direction:row;
  margin-bottom:2px;
  overflow:hidden;
`;

export const Scroll = styled.ScrollView``;


export const BtnItem = styled.TouchableOpacity`
 background-color: #BF4a45;
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