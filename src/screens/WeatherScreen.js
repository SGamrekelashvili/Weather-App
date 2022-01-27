import React from 'react';
import {Images} from '../assets/index';
import {View} from 'react-native';
import {getImages, getApi} from '../Helper';
import Screen from '../Components/WeatherSceen/Screen';
import Loading from '../Components/Loading';
const WeatherScreen = props => {
  const {navigation, route} = props;
  const item = route.params.item;
  const [Data, setData] = React.useState();
  const [Image, setImage] = React.useState();
  React.useEffect(() => {
    const {lang, long} = item;
    getApi({lat: lang, lon: long})
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
  if (Data) {
    return (
      <Screen
        navigation={navigation}
        item={item}
        imageBackground={Image}
        Data={Data}
      />
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Loading />
      </View>
    );
  }
};

export default WeatherScreen;
