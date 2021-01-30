import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Button,
} from 'react-native';
import {connect} from 'react-redux';

import BottomBar from '../components/BottomBar';
import BloodGroups from '../components/BloodGroups';

const FindDonor = ({navigation}) => {
  const [state, setstate] = useState(true);
  const [loader, setLoader] = useState(false);
  return (
    <>
      <BottomBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.shadow}>
          <BloodGroups />
        </View>
        <ScrollView
          contentContainerStyle={{
            // justifyContent: 'center',
            // alignItems: 'center',
            flexGrow: 1,
          }}>
          {state ? (
            <View
              style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                //   backgroundColor: 'red',
              }}>
              <Text>No Data</Text>
              <Button
                title="data"
                onPress={() => {
                  setLoader(true);
                  setstate(false);
                  setTimeout(() => {
                    setLoader(false);
                  }, 3000);
                }}
              />
            </View>
          ) : loader ? (
            <View
              style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size="large" color={'red'} />
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
                // backgroundColor: 'red',
              }}>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Data</Text>
              <Text> Last</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer.user,
    bloodGroup: state.findDonorReducer.bloodGroup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    successActionSet: (success) => dispatch(successAction(success)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 70,
  },
  shadow: {
    width: '100%',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FindDonor);
