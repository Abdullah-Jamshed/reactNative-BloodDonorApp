import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import BottomBar from '../components/BottomBar';
import BloodGroups from '../components/BloodGroups';

const FindDonor = ({navigation}) => {
  return (
    <>
      <BottomBar navigation={navigation} />
      <View style={styles.container}>
        <BloodGroups />
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>last value</Text>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FindDonor);
