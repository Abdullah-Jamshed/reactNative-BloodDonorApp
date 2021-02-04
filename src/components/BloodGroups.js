import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {bloodGroupAction} from '../store/actions/becomeDonorAction';

const BloodGroups = ({bloodGroup, bloodGroupActionSet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bloodGBContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => bloodGroupActionSet('A+')}
          style={
            bloodGroup === 'A+'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={bloodGroup === 'A+' ? styles.bgTextActive : styles.bgText}>
            A+
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => bloodGroupActionSet('A-')}
          style={
            bloodGroup === 'A-'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={bloodGroup === 'A-' ? styles.bgTextActive : styles.bgText}>
            A-
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => bloodGroupActionSet('B+')}
          style={
            bloodGroup === 'B+'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={bloodGroup === 'B+' ? styles.bgTextActive : styles.bgText}>
            B+
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => bloodGroupActionSet('B-')}
          style={
            bloodGroup === 'B-'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={bloodGroup === 'B-' ? styles.bgTextActive : styles.bgText}>
            B-
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => bloodGroupActionSet('AB+')}
          style={
            bloodGroup === 'AB+'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={bloodGroup === 'AB+' ? styles.bgTextActive : styles.bgText}>
            AB+
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => bloodGroupActionSet('AB-')}
          style={
            bloodGroup === 'AB-'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={bloodGroup === 'AB-' ? styles.bgTextActive : styles.bgText}>
            AB-
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => bloodGroupActionSet('O-')}
          style={
            bloodGroup === 'O-'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={bloodGroup === 'O-' ? styles.bgTextActive : styles.bgText}>
            O-
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => bloodGroupActionSet('O+')}
          style={
            bloodGroup === 'O+'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={bloodGroup === 'O+' ? styles.bgTextActive : styles.bgText}>
            O+
          </Text>
        </TouchableOpacity>
      </View>
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
    borderColor: '#fb3d4a',
    borderWidth: 0.5,
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
    borderColor: '#b3b3b3',
    borderWidth: 0.5,
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

const mapStateToProps = (state) => {
  return {
    bloodGroup: state.becomeDonorReducer.bloodGroup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bloodGroupActionSet: (group) => dispatch(bloodGroupAction(group)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BloodGroups);
