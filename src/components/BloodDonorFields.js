import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {connect} from 'react-redux';
import {
  genderAction,
  nameAction,
  ageAction,
  cityAction,
  contactAction,
  successAction,
} from '../store/actions/becomeDonorAction';

const BloodDonorFields = ({
  user,
  name,
  age,
  gender,
  city,
  contact,
  nameActionSet,
  ageActionSet,
  cityActionSet,
  contactActionSet,
  genderActionSet,
}) => {
  useEffect(() => {
    nameActionSet(user.displayName);
  }, []);

  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Name :</Text>
      </View>
      <View style={styles.inputFieldNameCont}>
        <TextInput
          style={styles.inputFieldName}
          defaultValue={name}
          editable={false}
        />
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Gender :</Text>
      </View>
      <View style={styles.genderCont}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => genderActionSet('male')}
          style={
            gender === 'male'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text style={gender === 'male' ? styles.bgTextActive : styles.bgText}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => genderActionSet('female')}
          style={
            gender === 'female'
              ? styles.activeBloodGroup
              : styles.bloodGroupButton
          }>
          <Text
            style={gender === 'female' ? styles.bgTextActive : styles.bgText}>
            Female
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Age :</Text>
      </View>
      <View style={styles.inputFieldNameCont}>
        <TextInput
          style={styles.inputFieldName}
          defaultValue={age}
          onChangeText={(text) => ageActionSet(text)}
        />
        <Text style={styles.helpText}>Age must be minimum 18</Text>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>City :</Text>
      </View>
      <View style={styles.inputFieldNameCont}>
        <TextInput
          style={styles.inputFieldName}
          defaultValue={city}
          onChangeText={(text) => cityActionSet(text)}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Contact :</Text>
      </View>
      <View style={styles.inputFieldNameCont}>
        <TextInput
          style={styles.inputFieldName}
          defaultValue={contact}
          onChangeText={(text) => contactActionSet(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  bgText: {
    color: '#fb3d4a',
    fontWeight: 'bold',
  },
  bgTextActive: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  headingContainer: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  heading: {
    fontSize: 14,
    color: '#fb3d4a',
    fontWeight: 'bold',
  },
  inputFieldName: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#b3b3b3',
    borderWidth: 0.5,
    fontSize: 14,
    borderRadius: 5,
  },
  inputFieldNameCont: {
    width: '90%',
    marginTop: 10,
  },
  genderCont: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#fb3d4a',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 15,
  },
  buttonText: {
    color: '#ffff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  disableButton: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 15,
  },
  helpText: {
    fontSize: 12,
    marginTop: 4,
    color: '#fb3d4a',
  },
  activeBloodGroup: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fb3d4a',
    width: 100,
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
    width: 100,
    borderColor: '#b3b3b3',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer.user,
    name: state.becomeDonorReducer.name,
    age: state.becomeDonorReducer.age,
    gender: state.becomeDonorReducer.gender,
    city: state.becomeDonorReducer.city,
    contact: state.becomeDonorReducer.contact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    genderActionSet: (gender) => dispatch(genderAction(gender)),
    nameActionSet: (name) => dispatch(nameAction(name)),
    ageActionSet: (age) => dispatch(ageAction(age)),
    cityActionSet: (city) => dispatch(cityAction(city)),
    contactActionSet: (contact) => dispatch(contactAction(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BloodDonorFields);
