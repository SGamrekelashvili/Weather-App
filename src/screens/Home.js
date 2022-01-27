/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Card from '../Components/Home/Card';
import {Locations} from '../Locations';
import Header from '../Components/Header';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <FlatList
          data={Locations}
          style={{width: '100%'}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('WeatherScreen', {
                    item: item,
                  })
                }
                style={{alignItems: 'center'}}>
                <Card item={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  center: {
    marginTop: 30,
    width: '100%',
  },
});
