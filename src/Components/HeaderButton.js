import {Text, Pressable} from 'react-native';
import React from 'react';

const HeaderButton = ({style, name, textStyle, currentroute, navigation}) => {
  return (
    <Pressable
      style={[
        style,
        currentroute === name && {borderColor: 'gray', borderWidth: 1},
      ]}
      onPress={() => navigation(name)}>
      <Text style={textStyle}>{name}</Text>
    </Pressable>
  );
};

export default HeaderButton;
