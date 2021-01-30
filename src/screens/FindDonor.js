import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Abdullah',
    bloodGroup: 'A+',
    contact: '45894784598',
    age: '18',
    city: 'karachi',
    gender: 'male',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Basit',
    bloodGroup: 'B+',
    contact: '45894784598',
    age: '22',
    city: 'karachi',
    gender: 'male',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Ghous',
    bloodGroup: 'C-',
    contact: '+45894784598',
    age: '18',
    city: 'karachi',
    gender: 'male',
  },
  {
    id: '58694afsdf0f-3da1-471f-bd96-145571e29d72',
    name: 'Ghous',
    bloodGroup: 'C-',
    contact: '+45894784598',
    age: '18',
    city: 'karachi',
    gender: 'male',
  },
  {
    id: '586fdfs94a0f-3da1-471f-bd96-145571e29d72',
    name: 'Ghous',
    bloodGroup: 'C-',
    contact: '+45894784598',
    age: '18',
    city: 'karachi',
    gender: 'male',
  },
  {
    id: '5869jty4a0f-3da1-471f-bd96-145571e29d72',
    name: 'Ghous',
    bloodGroup: 'C-',
    contact: '+45894784598',
    age: '18',
    city: 'karachi',
    gender: 'male',
  },
];

import BottomBar from '../components/BottomBar';
import BloodGroups from '../components/BloodGroups';

const FindDonor = ({navigation, bloodGroup}) => {
  const [state, setstate] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (bloodGroup !== '') {
      state && setstate(false);
      setLoader(true);
      setstate(false);
      setTimeout(() => {
        setLoader(false);
      }, 100);
    }
  }, [bloodGroup]);

  return (
    <>
      <BottomBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.shadow}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 15, color: '#fb3d4a', fontWeight: 'bold'}}>
              Select Blood Group
            </Text>
          </View>
          <BloodGroups />
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          {state ? (
            <View style={styles.subContainer}>
              <Image
                source={require('../assests/bgData.png')}
                style={{width: 200, height: 200}}
              />
              <Text style={{fontWeight: 'bold', textTransform: 'uppercase'}}>
                Search Donor
              </Text>
              {/* <Button
                title="data"
                onPress={() => {
                  setLoader(true);
                  setstate(false);
                  setTimeout(() => {
                    setLoader(false);
                  }, 2000);
                }}
              />*/}
            </View>
          ) : loader ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color={'red'} />
            </View>
          ) : (
            <View style={{paddingVertical: 20}}>
              {data.map((item) => {
                return (
                  <View key={item.id} style={styles.itemContainer}>
                    <View style={styles.bloodGroupContainer}>
                      <Text style={styles.bloodGroupText}>
                        {item.bloodGroup}
                      </Text>
                    </View>
                    <View style={styles.donorData}>
                      <View>
                        <Text style={styles.nameText}>{item.name}</Text>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 5}}>
                        <View style={styles.miniContainer}>
                          <Text style={styles.miniHeading}>age</Text>
                          <Text style={styles.miniText}>{item.age}</Text>
                        </View>
                        <View style={styles.miniContainer}>
                          <Text style={styles.miniHeading}>gender</Text>
                          <Text style={styles.miniText}>{item.gender}</Text>
                        </View>
                        <View style={styles.miniContainer}>
                          <Text style={styles.miniHeading}>city</Text>
                          <Text style={styles.miniText}>{item.city}</Text>
                        </View>
                        <View style={styles.miniContainer}>
                          <Text style={styles.miniHeading}>contact</Text>
                          <Text style={styles.miniText}>{item.contact}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
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
    bloodGroup: state.becomeDonorReducer.bloodGroup,
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
  subContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    width: '100%',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
  },
  itemContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 10,
    borderColor: '#b3b3b3',
    borderWidth: 0.5,
  },
  bloodGroupContainer: {
    backgroundColor: '#ffcdd4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  bloodGroupText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fb3d4a',
  },
  donorData: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 8,
  },
  nameText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  miniContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  miniHeading: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#000',
  },
  miniText: {
    fontSize: 11,
    textTransform: 'capitalize',
    color: '#000',
  },
  loaderContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FindDonor);
