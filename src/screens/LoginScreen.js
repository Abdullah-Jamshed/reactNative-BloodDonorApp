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
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk';

import {connect} from 'react-redux';
import {userAction, loaderAction} from '../store/actions/homeActions';

import HomeScreen from './HomeScreen';
import SignupScreen from './SignupScreen';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({
  navigation,
  user,
  userActionSet,
  loader,
  loaderActionSet,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // .then(() => {
  //   console.log('user exits & signed in!');
  // })
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };
  const facebookLogin = async () => {
    loaderActionSet(true);
    // try {
    console.log('data ==>> 1');
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    console.log('data ==>>', result);

    if (result.isCancelled) {
      loaderActionSet(false);
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
    // } catch (err) {
    //   loaderActionSet(false);
    //   console.log(err);
    // }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Image
            source={require('../assests/bloodDrop.png')}
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={styles.loginFieldContainer}>
          <TextInput
            style={styles.inputFeild}
            name="email"
            placeholder="email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.inputFeild}
            name="password"
            placeholder="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <View>
            <TouchableOpacity
              style={
                email === '' || password === ''
                  ? styles.disableButton
                  : styles.button
              }
              activeOpacity={0.9}
              disabled={email === '' || password === '' ? true : false}
              onPress={signIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.9}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {flexDirection: 'row'}]}
              activeOpacity={0.9}
              onPress={facebookLogin}>
              <Text style={styles.buttonText}>Login With Facebook</Text>
              {loader && (
                <ActivityIndicator style={{marginLeft: 5}} color={'#fff'} />
              )}
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
});

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer.user,
    loader: state.homeReducer.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionSet: (user) => dispatch(userAction(user)),
    loaderActionSet: (user) => dispatch(loaderAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
