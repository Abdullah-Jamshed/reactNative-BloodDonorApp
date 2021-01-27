import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.header}
      onPress={() => navigation.openDrawer()}>
      <Ionicons name="menu" size={30} color={'#fb3d4a'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Header;
