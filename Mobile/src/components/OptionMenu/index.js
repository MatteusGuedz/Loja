import React from 'react';
import { Option,Label } from './styles';
import {TouchableOpacity as Touch} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
import { useNavigation  } from '@react-navigation/native';

const OptionMenu = ({Name, LabelText, Nav}) => {

  const navigation = useNavigation()

  return (

  <Touch activeOpacity={0.8} onPress={() => navigation.navigate(Nav)} >
    <Option>
      <Label> {LabelText} </Label>
      <Icon name={Name} size={22}  color="#fff"/>
    </Option>
    </Touch>  
  );
}

export default OptionMenu;