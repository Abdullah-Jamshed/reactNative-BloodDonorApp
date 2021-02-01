import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import database from '@react-native-firebase/database';

import {connect} from 'react-redux';
import {donorUIDAction} from '../store/actions/findDonorAction';

import BottomBar from '../components/BottomBar';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const DonorDetail = ({navigation, donorUID, donorUIDActionSet}) => {
  const [profileData, setProfileData] = useState(true);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    console.log(donorUID);
    if (donorUID) {
      database()
        .ref()
        .child(`users/${donorUID}`)
        .on('value', (data) => {
          setProfileData(data.val());
          console.log(data.val());
          setLoader(false);
        });
    }
  }, []);

  return (
    <>
      {loader ? (
        <View style={styles.loadingCont}>
          <ActivityIndicator color={'#fb3d4a'} size={'large'} />
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.backButton}
            onPress={() => {
              donorUIDActionSet(null);
              navigation.goBack();
            }}>
            <Ionicons name="chevron-back-sharp" size={30} color={'#fb3d4a'} />
          </TouchableOpacity>
          <BottomBar navigation={navigation} screen="profile" />
          <View style={styles.profileContainer}>
            <View
              style={{
                alignItems: 'center',
              }}>
              {profileData.photoURL ? (
                <Image
                  style={styles.image}
                  source={{uri: profileData.photoURL}}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://graph.facebook.com/880856582715773/picture',
                  }}
                />
              )}

              <Text style={styles.name}>{profileData.displayName}</Text>
            </View>

            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
              }}>
              <View style={{paddingBottom: 70}}>
                <View style={styles.InfoContainer}>
                  <View style={styles.userInfoContainer}>
                    <View style={styles.iconContainer}>
                      <MaterialCommunityIcons
                        name="gender-male-female"
                        size={30}
                        color={'#fff'}
                      />
                    </View>
                    <View style={styles.detailInfo}>
                      <Text style={styles.detailInfoText}>
                        {profileData.gender
                          ? profileData.gender
                          : 'Not Available'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.userInfoContainer}>
                    <View style={styles.iconContainer}>
                      <MaterialCommunityIcons
                        name="calendar"
                        size={30}
                        color={'#fff'}
                      />
                    </View>
                    <View style={styles.detailInfo}>
                      <Text style={styles.detailInfoText}>
                        {profileData.age ? profileData.age : 'Not Available'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.userInfoContainer}>
                    <View style={styles.iconContainer}>
                      <MaterialCommunityIcons
                        name="phone"
                        size={30}
                        color={'#fff'}
                      />
                    </View>
                    <View style={styles.detailInfo}>
                      <Text style={styles.detailInfoText}>
                        {profileData.contact
                          ? profileData.contact
                          : 'Not Available'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.userInfoContainer}>
                    <View style={styles.iconContainer}>
                      <Entypo name="location-pin" size={30} color={'#fff'} />
                    </View>
                    <View style={styles.detailInfo}>
                      <Text style={styles.detailInfoText}>
                        {profileData.city ? profileData.city : 'Not Available'}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.userInfoContainer}>
                    <View style={styles.iconContainer}>
                      <MaterialCommunityIcons
                        name="email"
                        size={30}
                        color={'#fff'}
                      />
                    </View>
                    <View style={styles.detailInfo}>
                      <Text
                        style={
                          profileData.email
                            ? profileData.email.length > 18
                              ? {fontSize: 14}
                              : {fontSize: 16}
                            : null
                        }>
                        {profileData.email
                          ? profileData.email
                          : 'Not Available'}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={[styles.userInfoContainer, {borderBottomWidth: 0}]}>
                    <View style={styles.iconContainer}>
                      <Entypo name="drop" size={30} color={'#fff'} />
                    </View>
                    <View style={styles.detailInfo}>
                      <Text style={styles.detailInfoText}>
                        {profileData.bloodGroup
                          ? profileData.bloodGroup
                          : 'Not Available'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                    <Text style={styles.buttonText}>Request</Text>
                    <Text style={styles.buttonText}>Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer.user,
    donorUID: state.findDonorReducer.donorUID,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userActionSet: (user) => dispatch(userAction(user)),
    donorUIDActionSet: (uid) => dispatch(donorUIDAction(uid)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flex: 1,
  },
  InfoContainer: {
    width: width / 1.2,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#fb3d4a',
    borderRadius: 5,
  },
  userInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    borderColor: '#fb3d4a',
    borderBottomWidth: 0.5,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fb3d4a',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#fb3d4a',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#b3b3b3',
  },
  detailInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  detailInfoText: {fontSize: 16},
  loadingCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#fb3d4a',
    width: 150,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffff',
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DonorDetail);
