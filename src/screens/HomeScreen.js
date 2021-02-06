import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

import {connect} from 'react-redux';
import {bloodGroupAction} from '../store/actions/becomeDonorAction';

import database from '@react-native-firebase/database';

import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import {userAction} from '../store/actions/homeActions';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({user, navigation, bloodGroupActionSet, userActionSet}) => {
  const createUserNode = async () => {
    if (user) {
      // const {
      //   _snapshot: {value},
      // } = await database().ref(`/`).child(`/users/${user.uid}`).once('value');
      // console.log('user ==>>', user);

      database()
        .ref(`/`)
        .child(`/users/${user.uid}`)
        .once('value', (data) => {
          if (!data.val()) {
            database()
              .ref('/')
              .child(`users/${user.uid}`)
              .set({
                uid: user.uid,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
              })
              .then(() => {
                console.log('data set');
              });
          } else {
            database()
              .ref(`/`)
              .child(`/users/${user.uid}`)
              .on('value', (data) => {
                userActionSet(data.val());
                console.log('data get');
              });
          }
        });
    }
  };

  useEffect(() => {
    if (String(user.displayName) !== 'null') {
      createUserNode();
    }
  }, [user.displayName]);

  return (
    <>
      {user.displayName && (
        <View style={styles.container}>
          <Header navigation={navigation} />
          <BottomBar navigation={navigation} screen="home" />
          <View style={styles.middle}>
            <Image
              source={require('../assests/findDonorBg.png')}
              style={styles.homeBg}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.findDonorButton}
              onPress={() => {
                navigation.navigate('FindDonor');
              }}>
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
    bloodGroupActionSet: (group) => dispatch(bloodGroupAction(group)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
