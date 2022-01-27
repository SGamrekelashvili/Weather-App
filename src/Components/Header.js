import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderButton from './HeaderButton';
import {navigate} from '../Helper';
const Header = () => {
  const [currentroute, setCurrent] = React.useState('Home');

  const navigation = props => {
    navigate(props);
    setCurrent(props);
  };
  return (
    <>
      <Text
        style={{
          justifyContent: 'flex-start',
          fontSize: 25,
          textAlign: 'center',
          color: 'black',
        }}>
        Weather
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <HeaderButton
          navigation={navigation}
          currentroute={currentroute}
          style={styles.buttonStyle}
          textStyle={styles.textStyle}
          name={'Home'}
        />
        <HeaderButton
          navigation={navigation}
          currentroute={currentroute}
          textStyle={styles.textStyle}
          style={styles.buttonStyle}
          name={'Forecast'}
        />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  textStyle: {fontSize: 17},
});
