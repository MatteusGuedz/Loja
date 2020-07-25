import styled from 'styled-components/native'
const [colorP, transparent] = ['#DE7672', '#2E2F33']

export const Button = styled.TouchableOpacity`
    background-color: ${props => props.transparent ? transparent : colorP };
    height:40px;
    padding:15px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border-color: #fff;
    border-width:2px;
`

export const Value = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size:16px;
`