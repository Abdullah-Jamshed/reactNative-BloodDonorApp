import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {connect} from 'react-redux';
import {
  nameAction,
  emailAction,
  passwordAction,
  userAction,
} from '../store/actions/homeActions';

const {width, height} = Dimensions.get('window');

const SignupScreen = ({
  navigation,
  name,
  email,
  password,
  nameActionSet,
  emailActionSet,
  passwordActionSet,
  userActionSet,
  user,
}) => {
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        var userUpdate = auth().currentUser;

        userUpdate
          .updateProfile({
            displayName: name,
          })
          .then(function () {
            // Update successful.
            userActionSet(auth().currentUser);
            // console.log("after update",)
            // console.log('Update successful.');
          })
          .catch(function (error) {
            // An error happened.
            console.log('Update Unsuccessful.', error);
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}> SignUp</Text>
        </View>
        <View style={styles.loginFieldContainer}>
          <TextInput
            style={styles.inputFeild}
            name="name"
            placeholder="Name"
            keyboardType="name-phone-pad"
            value={name}
            onChangeText={(text) => nameActionSet(text)}
          />
          <TextInput
            style={styles.inputFeild}
            name="email"
            placeholder="email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => emailActionSet(text)}
          />
          <TextInput
            style={styles.inputFeild}
            name="password"
            placeholder="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => passwordActionSet(text)}
          />
          <View>
            <TouchableOpacity
              onPress={createUser}
              style={
                email === '' || password === ''
                  ? styles.disableButton
                  : styles.button
              }
              activeOpacity={0.9}
              disabled={email === '' || password === '' ? true : false}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}>
              <Text style={styles.buttonBackText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 100,
    // paddingVertical:100,
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: '#f5f5f5',
    borderRadius: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFieldContainer: {
    marginTop: 20,
  },
  inputFeild: {
    borderWidth: 1,
    borderColor: '#f5f5f5',
    width: width / 1.4,
    marginBottom: 10,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#fb3d4a',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 5,
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
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fb3d4a',
  },
  buttonBackText: {
    color: '#fb3d4a',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  backButton: {
    width: 80,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    alignSelf: 'center',
    marginTop: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer.user,
    name: state.homeReducer.name,
    email: state.homeReducer.email,
    password: state.homeReducer.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionSet: (user) => dispatch(userAction(user)),
    nameActionSet: (name) => dispatch(nameAction(name)),
    emailActionSet: (email) => dispatch(emailAction(email)),
    passwordActionSet: (password) => dispatch(passwordAction(password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
