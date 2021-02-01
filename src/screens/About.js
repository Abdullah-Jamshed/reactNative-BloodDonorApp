import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import BottomBar from '../components/BottomBar';
import Header from '../components/Header';

const About = ({navigation, screen}) => {
  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <BottomBar navigation={navigation} screen="about" />
        <View style={styles.aboutContainer}>
          <Text>About Us</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  aboutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;
