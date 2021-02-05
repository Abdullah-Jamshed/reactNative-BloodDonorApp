import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import database from '@react-native-firebase/database';

import {connect} from 'react-redux';
import {successAction} from '../store/actions/becomeDonorAction';

import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import BloodGroups from '../components/BloodGroups';
import BloodDonorFields from '../components/BloodDonorFields';

const UpdateProfile = ({
  navigation,
  user,
  nameUpdate,
  ageUpdate,
  genderUpdate,
  cityUpdate,
  contactUpdate,
}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [loader2] = useState(false);

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

  return (
    <View
      style={[styles.container, {paddingBottom: !isKeyboardVisible ? 65 : 10}]}>
      <Header navigation={navigation} />
      {!isKeyboardVisible && (
        <BottomBar navigation={navigation} screen="updateProfile" />
      )}
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Select Blood Group :</Text>
        </View>
        <BloodGroups screen="updateScreen" />
        <BloodDonorFields screen="updateScreen" />

        <TouchableOpacity
          style={nameUpdate === '' ? styles.disableButton : styles.button}
          activeOpacity={0.9}
          disabled={nameUpdate === '' ? true : false}>
          <Text style={styles.buttonText}>Update</Text>
          {loader2 && (
            <ActivityIndicator style={{marginLeft: 5}} color={'#fff'} />
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 2,
    paddingTop: 45,
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
    color: '#000',
    marginVertical: 5,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer.user,
    nameUpdate: state.updateProfileReducer.nameUpdate,
    ageUpdate: state.updateProfileReducer.ageUpdate,
    genderUpdate: state.updateProfileReducer.genderUpdate,
    cityUpdate: state.updateProfileReducer.cityUpdate,
    contactUpdate: state.updateProfileReducer.contactUpdate,
    success: state.becomeDonorReducer.success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    successActionSet: (success) => dispatch(successAction(success)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
