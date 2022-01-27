import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={60} color="green" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  flex: 1,
  justifyContent: 'center',
});
