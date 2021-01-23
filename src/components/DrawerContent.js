import React, {useEffect} from 'react';
import {
  Animated,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {userAction} from '../store/actions/homeActions';

import auth from '@react-native-firebase/auth';
import {color} from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = ({userActionSet, user}) => {
  const SignOut = () => {
    auth().signOut();
  };

  return (
    <>
      {user.displayName && (
        <View style={styles.drawerContainer}>
          <View style={styles.upper}>
            <View style={styles.userInfo}>
              {user.photoURL ? (
                <Image
                  style={styles.profileImage1}
                  source={{uri: user.photoURL}}
                />
              ) : (
                <Image
                  style={styles.profileImage1}
                  source={{
                    uri: 'https://graph.facebook.com/880856582715773/picture',
                  }}
                />
              )}
              <Text style={styles.profileName}>{user.displayName}</Text>
            </View>
            <View style={styles.drawerOptions}>
              <TouchableOpacity style={styles.drawerOption} activeOpacity={0.1}>
                <Ionicons
                  name="person"
                  size={25}
                  style={styles.drawerOptionIcon}
                />
                <Text>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerOption} activeOpacity={0.1}>
                <MaterialCommunityIcons
                  name="blood-bag"
                  size={25}
                  style={styles.drawerOptionIcon}
                />
                <Text>Becaoma A Donor</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lower}>
            <TouchableOpacity
              onPress={SignOut}
              activeOpacity={0.9}
              style={styles.signOutButton}>
              <Text style={styles.signOutButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  upper: {},
  lower: {},
  signOutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fb3d4a',
  },
  signOutButtonText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  profileImage1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  profileName: {
    textTransform: 'uppercase',
    color: '#fb3d4a',
    fontWeight: 'bold',
    fontSize: 17,
  },
  drawerOptions: {
    // backgroundColor: 'green',
    // paddingHorizontal: 20,
    marginTop: 50,
    // paddingVertical:20
  },
  drawerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  drawerOptionIcon: {
    color: '#fb3d4a',
    marginLeft: 20,
    marginRight: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
