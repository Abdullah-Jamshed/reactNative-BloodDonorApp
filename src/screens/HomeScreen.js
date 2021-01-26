import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import {connect} from 'react-redux';

import database from '@react-native-firebase/database';

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
          <Text>HomeScreen</Text>
          <Text>{user.displayName}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
