import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import database from '@react-native-firebase/database';

import {connect} from 'react-redux';
import {
  genderAction,
  nameAction,
  ageAction,
  cityAction,
  contactAction,
} from '../store/actions/becomeDonorAction';

import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import BloodGroups from '../components/BloodGroups';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BecomeDonor = ({
  bloodGroup,
  navigation,
  screen,
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
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [loader1, setLoader1] = useState(true);
  const [loader2, setLoader2] = useState(false);

  const beADonor = () => {
    setLoader2(true);
    database()
      .ref('/')
      .child(`/donors/${user.uid}`)
      .set({
        uid: user.uid,
        name,
        age,
        gender,
        city,
        contact,
        bloodGroup,
      })
      .then(() => {
        setLoader2(false);
      });
  };

  const donorCheck = async () => {
    const respose = await database()
      .ref('/')
      .child(`/donors/${user.uid}`)
      .once('value');
    setLoader1(false);
    setFormVisible(!respose.exists());
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    nameActionSet(user.displayName);
  }, []);

  useEffect(() => {
    donorCheck();
  }, []);

  return (
    <View
      style={[styles.container, {paddingBottom: !isKeyboardVisible ? 75 : 10}]}>
      <Header navigation={navigation} />
      {!isKeyboardVisible && (
        <BottomBar navigation={navigation} screen="becomdonor" />
      )}
      {loader1 ? (
        <View style={styles.loadingCont}>
          <ActivityIndicator color={'#fb3d4a'} size={'large'} />
        </View>
      ) : formVisible ? (
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Select Blood Group :</Text>
          </View>
          <BloodGroups />
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Name :</Text>
          </View>
          <View style={styles.inputFieldNameCont}>
            <TextInput
              style={styles.inputFieldName}
              value={name}
              editable={false}
            />
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Age :</Text>
          </View>
          <View style={styles.inputFieldNameCont}>
            <TextInput
              style={styles.inputFieldName}
              value={age}
              onChangeText={(text) => ageActionSet(text)}
            />
            <Text style={styles.helpText}>Age must be minimum 18</Text>
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
              <Text
                style={gender === 'male' ? styles.bgTextActive : styles.bgText}>
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
                style={
                  gender === 'female' ? styles.bgTextActive : styles.bgText
                }>
                Female
              </Text>
            </TouchableOpacity>
            {/* <TextInput style={styles.inputFieldName} /> */}
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>City :</Text>
          </View>
          <View style={styles.inputFieldNameCont}>
            <TextInput
              style={styles.inputFieldName}
              value={city}
              onChangeText={(text) => cityActionSet(text)}
            />
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Contact :</Text>
          </View>
          <View style={styles.inputFieldNameCont}>
            <TextInput
              style={styles.inputFieldName}
              value={contact}
              onChangeText={(text) => contactActionSet(text)}
            />
          </View>

          <TouchableOpacity
            style={
              name === '' ||
              age === '' ||
              Number(age) < 18 ||
              city === '' ||
              gender === '' ||
              contact === '' ||
              bloodGroup === ''
                ? styles.disableButton
                : styles.button
            }
            activeOpacity={0.9}
            disabled={
              name === '' ||
              age === '' ||
              Number(age) < 18 ||
              city === '' ||
              gender === '' ||
              contact === '' ||
              bloodGroup === ''
                ? true
                : false
            }
            onPress={beADonor}>
            <Text style={styles.buttonText}>Become Donor</Text>
            {loader2 && (
              <ActivityIndicator style={{marginLeft: 5}} color={'#fff'} />
            )}
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View style={styles.loadingCont}>
          <FontAwesome5
            name="hand-holding-heart"
            color={'#fb3d4a'}
            size={70}
            style={{marginVertical: 10}}
          />
          <Text style={styles.registeredText}>
            Your Already Registered as a Donor
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 2,
  },
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
    width: 100,
    // borderWidth: 1,
    // borderColor: '#f5f5f5',
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
    // borderWidth: 1,
    // borderColor: '#e8e8e8',
    borderColor: '#fb3d4a',
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
    // borderColor: '#e8e8e8',
    borderColor: '#fb3d4a',
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
  loadingCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registeredText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fb3d4a',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer.user,
    bloodGroup: state.becomeDonorReducer.bloodGroup,
    name: state.becomeDonorReducer.name,
    age: state.becomeDonorReducer.age,
    gender: state.becomeDonorReducer.gender,
    city: state.becomeDonorReducer.city,
    contact: state.becomeDonorReducer.contact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // bloodGroupActionSet: (group) => dispatch(bloodGroupAction(group)),
    genderActionSet: (gender) => dispatch(genderAction(gender)),
    nameActionSet: (name) => dispatch(nameAction(name)),
    ageActionSet: (age) => dispatch(ageAction(age)),
    cityActionSet: (city) => dispatch(cityAction(city)),
    contactActionSet: (contact) => dispatch(contactAction(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BecomeDonor);
