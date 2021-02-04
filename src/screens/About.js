import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import BottomBar from '../components/BottomBar';
import Header from '../components/Header';

import database from '@react-native-firebase/database';

const About = ({navigation, screen}) => {
  return (
    <>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <BottomBar navigation={navigation} screen="about" />
        <View style={styles.aboutContainer}>
          <Text>About Us</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => {
              database()
                .ref()
                .child('users/NgSIbSTfMFgUHnXpWS9A9pj3PjG3/displayName')
                .once('value', (data) => {
                  console.log(data.val());
                });
            }}>
            <Text style={styles.buttonText}>Button</Text>
          </TouchableOpacity>
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
  button: {
    backgroundColor: '#fb3d4a',
    width: 150,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

export default About;
