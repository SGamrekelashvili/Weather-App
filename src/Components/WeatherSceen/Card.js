import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import moment from 'moment';
const Card = ({item}) => {
  const {temp, weather} = item;
  const {day, night} = temp;
  const {icon} = weather[0];
  var dateString = moment.unix(item.dt).calendar({
    lastWeek: '[Last] dddd',
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    sameElse: 'dddd',
  });

  return (
    <View style={styles.container}>
      <View style={[styles.textView, {left: 0}]}>
        <Text style={styles.text}>{dateString}</Text>
      </View>
      <View
        style={[
          styles.textView,
          {
            position: 'absolute',
            left: '50%',
            right: '50%',
            transform: [{translateX: 10}],
          },
        ]}>
        <Image
          style={{width: 30, height: 30}}
          source={{
            uri: `https://openweathermap.org/img/wn/${icon}.png`,
          }}
        />
      </View>
      <View style={[styles.textView, {flexDirection: 'row'}]}>
        <Text style={[styles.text, {paddingHorizontal: 5, color: 'white'}]}>
          {Math.round(day)}°
        </Text>

        <Text style={[styles.text, {paddingHorizontal: 5, color: 'gray'}]}>
          {Math.round(night)}°
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    borderBottomColor: 'rgba(117, 117, 117, 0.20)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    paddingHorizontal: 20,
  },
  textView: {
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});
