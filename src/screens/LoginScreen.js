import React, {useState} from 'react';
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

import HomeScreen from './HomeScreen';
import SignupScreen from './SignupScreen';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
              disabled={email === '' || password === '' ? true : false}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={()=>navigation.navigate("Signup")}>
              <Text style={styles.buttonText}>Sign Up</Text>
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

export default LoginScreen;
