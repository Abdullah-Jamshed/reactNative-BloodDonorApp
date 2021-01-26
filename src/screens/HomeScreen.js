import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';

import database from '@react-native-firebase/database';

import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({user}) => {
  const createUserNode = async () => {
    if (user) {
      const {
        _snapshot: {value},
      } = await database().ref(`/`).child(`/users/${user.uid}`).once('value');

      if (!value) {
        console.log('After data === NULL', user);
        database().ref('/').child(`users/${user.uid}`).set({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      }
    }
  };

  useEffect(() => {
    if (String(user.displayName) !== 'null') {
      createUserNode();
    }
  }, [user]);

  return (
    <>
      {user.displayName && (
        <View style={styles.container}>
          <TouchableOpacity style={styles.header}>
            <Ionicons name="menu" size={30} color={'#fb3d4a'} />
          </TouchableOpacity>
          <View style={styles.middle}>
            <Image
              source={require('../assests/findDonorBg.png')}
              style={styles.homeBg}
            />
            <TouchableOpacity style={styles.findDonorButton}>
              <Text style={styles.findDonorButtonText}>Find A Donor</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeBg: {
    width: width,
    height: width,
  },
  findDonorButton: {
    backgroundColor: '#fb3d4a',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  findDonorButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  header: {
    // backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  middle: {
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionSet: (user) => dispatch(userAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
