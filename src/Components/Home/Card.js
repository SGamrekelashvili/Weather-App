/* eslint-disable no-fallthrough */
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {getApi, getImages} from '../../Helper';
import Loading from '../Loading';
import {Images} from '../../assets/index';
const {height} = Dimensions.get('window');
const Card = ({item}) => {
  const [data, setData] = React.useState();
  const [image, setImage] = React.useState();
  useEffect(() => {
    getApi({lat: item.lang, lon: item.long})
      .then(e => {
        if (e?.current?.weather) {
          setData(e);
        } else {
          console.warn(e);
        }
      })
      .catch(e => console.error(e));
    setImage(getImages(item.name));
  }, []);

  if (data) {
    const {weather, dt: Date, temp} = data.current;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={{
              uri: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
            }}
          />
          <Text style={styles.headerText}>{weather[0].main}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomTextCels}>{Math.round(temp)}°</Text>
          <Text style={styles.bottomTextName}>{item.name}</Text>
        </View>

        <Image style={styles.imageStyle} source={image} />
      </View>
    );
  } else {
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <Loading />
      </View>
    );
  }
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    height: height / 4.4,
    marginTop: 20,
    borderRadius: 15,
  },
  imageStyle: {
    width: '100%',
    resizeMode: 'cover',
    height: height / 4.4,
    position: 'absolute',
    zIndex: -1,
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  headerImage: {
    height: 40,
    width: 40,
    zIndex: 99,
    resizeMode: 'cover',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginStart: 5,
  },
  bottom: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    width: '97%',
    justifyContent: 'space-between',
  },
  bottomTextCels: {
    color: 'white',
    fontWeight: 'bold',

    marginLeft: 20,
    fontSize: 30,
    marginVertical: 10,
  },
  bottomTextName: {
    marginHorizontal: 10,
    marginTop: 30,
    fontSize: 19,
    fontWeight: 'bold',

    color: 'white',
  },
});
