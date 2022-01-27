import React, {useEffect} from 'react';
import Home from './src/screens/Home';
import Header from './src/Components/Header';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {navigationRef} from './src/Helper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherScreen from './src/screens/WeatherScreen';
import {Images} from './src/assets';
import Search from './src/Components/Search';
const Stack = createNativeStackNavigator();
const App = () => {
  const childRef = React.useRef();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar setBarStyle={{color: 'black'}} backgroundColor="#61dafb" />
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={{}}
          onPress={() => childRef.current.HandleSearch()}>
          <Image
            source={Images.search}
            style={{
              position: 'absolute',
              right: 0,
              top: 10,
              height: 40,
              width: 40,
              padding: 10,
              zIndex: 99,
            }}
          />
        </TouchableWithoutFeedback>
        <Search ref={childRef} />
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="WeatherScreen"
              component={WeatherScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
