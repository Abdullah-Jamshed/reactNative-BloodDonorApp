import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import BottomBar from '../components/BottomBar';

const About = ({navigation, screen}) => {
  return (
    <View style={styles.container}>
      <BottomBar navigation={navigation} screen="about" />
      <Text>About Us</Text>
      <Text>About Us</Text>
      <Text>About Us</Text>
      <Text>About Us</Text>
      <Text>About Us</Text>
      <Text>About Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default About;
