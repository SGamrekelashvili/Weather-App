import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

const Header = ({styles, name, weather, imageBackground, temp}) => {
  return (
    <View style={styles.header}>
      <ImageBackground style={styles.imageStyle} source={imageBackground}>
        <View style={styles.headerTexts}>
          <View style={styles.headerLeft}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={[styles.headerImage]}
                source={{
                  uri: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
                }}
              />
              <Text
                style={[
                  styles.text,
                  {fontWeight: 'bold', textAlign: 'center', fontSize: 21},
                ]}>
                {weather[0].main}
              </Text>
            </View>

            <Text
              style={[
                styles.text,
                {fontWeight: 'bold', letterSpacing: 2, fontSize: 22},
              ]}>
              {name}
            </Text>
          </View>
          <Text style={[styles.text, {fontSize: 35}]}>{Math.round(temp)}°</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
