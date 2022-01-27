import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';
import {getApi, getForecast} from '../../Helper';

const Bottom = ({item, style}) => {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    const {lang, long} = item;
    getForecast({lat: lang, lon: long})
      .then(e => {
        if (e?.daily) {
          setData(e);
        } else {
          console.warn(e);
        }
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <View style={style}>
      {data && (
        <FlatList
          data={data.daily}
          keyExtractor={item => item.dt}
          renderItem={({item, index}) => {
            if (index === 0) {
              return null;
            } else {
              return <Card item={item} />;
            }
          }}
        />
      )}
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
