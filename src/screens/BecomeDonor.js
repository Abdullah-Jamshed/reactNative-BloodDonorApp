import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import BottomBar from '../components/BottomBar';
import Header from '../components/Header';

const BecomeDonor = ({navigation, screen}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <BottomBar navigation={navigation} screen="becomdonor" />
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Become Donor</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 2,
    paddingBottom: 70,
  },
});

export default BecomeDonor;
