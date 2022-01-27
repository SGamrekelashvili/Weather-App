import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Images} from '../../assets';
import Header from './Header';
import Bottom from './Bottom';
const {width, height} = Dimensions.get('screen');

const Screen = ({Data, imageBackground, item, navigation}) => {
  const {weather, dt: Date, temp} = Data.current;

  return (
    <View style={styles.container}>
      <Pressable style={{zIndex: 99}} onPress={() => navigation.goBack()}>
        <Image
          source={Images.goBack}
          style={{
            position: 'absolute',
            height: 50,
            width: 50,
            padding: 10,
            top: 5,
            left: 0,
          }}
        />
      </Pressable>
      <Header
        name={item.name}
        imageBackground={imageBackground}
        temp={temp}
        styles={styles}
        weather={weather}
      />
      <Bottom style={styles.Bottom} item={item} />
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    height: height / 1.7,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  Bottom: {
    backgroundColor: '#171a3d',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: height / 2,
    bottom: 70,
    paddingTop: 20,
  },
  imageStyle: {
    width: '100%',
    height: height / 1.7,
    zIndex: 98,
    elevation: 1,
  },

  headerTexts: {
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 99,
    elevation: 3,
    paddingHorizontal: 10,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  headerImage: {
    width: 30,
    height: 30,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
