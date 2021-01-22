import React from 'react';
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

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
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
            autoCompleteType="off"
            
          />
          <TextInput
            style={styles.inputFeild}
            name="password"
            placeholder="password"
            secureTextEntry={true}
          />
          <View>
            <TouchableOpacity style={styles.button} activeOpacity={0.9}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.9}>
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
    // width: height / 4,
    // height: height / 4,
    width: 80,
    height: 80,
    backgroundColor: '#f5f5f5',
    borderRadius: height / 3,
    // position: 'absolute',
    // left: -(width / 15),
    // top: -(height / 15),
    // position: 'relative',
    // left: -(width / 4),
    // top: -(height / 12),
    // left: -100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginFieldContainer: {
    // marginTop: 50,
    marginTop: 10,
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
});

export default LoginScreen;
