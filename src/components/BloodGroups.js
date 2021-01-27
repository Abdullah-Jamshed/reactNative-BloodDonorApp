import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const BloodGroups = () => {
  const [active, setActive] = useState('');

  return (
    <View style={styles.bloodGBContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setActive('A+')}
        style={
          active === 'A+' ? styles.activeBloodGroup : styles.bloodGroupButton
        }>
        <Text style={active === 'A+' ? styles.bgTextActive : styles.bgText}>
          A+
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setActive('A-')}
        style={
          active === 'A-' ? styles.activeBloodGroup : styles.bloodGroupButton
        }>
        <Text style={active === 'A-' ? styles.bgTextActive : styles.bgText}>
          A-
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setActive('B+')}
        style={
          active === 'B+' ? styles.activeBloodGroup : styles.bloodGroupButton
        }>
        <Text style={active === 'B+' ? styles.bgTextActive : styles.bgText}>
          B+
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setActive('B-')}
        style={
          active === 'B-' ? styles.activeBloodGroup : styles.bloodGroupButton
        }>
        <Text style={active === 'B-' ? styles.bgTextActive : styles.bgText}>
          B-
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setActive('AB+')}
        style={
          active === 'AB+' ? styles.activeBloodGroup : styles.bloodGroupButton
        }>
        <Text style={active === 'AB+' ? styles.bgTextActive : styles.bgText}>
          AB+
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setActive('AB-')}
        style={
          active === 'AB-' ? styles.activeBloodGroup : styles.bloodGroupButton
        }>
        <Text style={active === 'AB-' ? styles.bgTextActive : styles.bgText}>
          AB-
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setActive('O-')}
        style={
          active === 'O-' ? styles.activeBloodGroup : styles.bloodGroupButton
        }>
        <Text style={active === 'O-' ? styles.bgTextActive : styles.bgText}>
          O-
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setActive('O+')}
        style={
          active === 'O+' ? styles.activeBloodGroup : styles.bloodGroupButton
        }>
        <Text style={active === 'O+' ? styles.bgTextActive : styles.bgText}>
          O+
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bloodGBContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  activeBloodGroup: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fb3d4a',
    width: 75,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  bloodGroupButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 75,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  bgText: {
    color: '#fb3d4a',
    fontWeight: 'bold',
  },
  bgTextActive: {
    color: '#ffff',
    fontWeight: 'bold',
  },
});

export default BloodGroups;
