import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated,Image } from 'react-native';

function HomeScreen({ 
  navigation,
  setUser,

  setNoteTime, 
  setNotePlays,

  setNoteNumbTime,
  setNoteNumbPlays,

  setChordBasicTime,
  setChordBasicPlays,

  setChordIntermediateTime, 
  setChordIntermediatePlays, 

  setChordAdvancedTime, 
  setChordAdvancedPlays,

  setScalesBasicTime, 
  setScalesBasicPlays,

  setScalesIntermediateTime,
  setScalesIntermediatePlays,

  setScalesAdvancedTime,
  setScalesAdvancedPlays,

  setHarmonyTime,
  setHarmonyPlays


}) {

  const [scalePlay] = useState(new Animated.Value(1));
  const [scaleLearn] = useState(new Animated.Value(1));

  useEffect(() => {
    load();
  }, []);


  const load = async () => {
    try {
      let name = await AsyncStorage.getItem("Username");
      
      let dbnoteTime = await AsyncStorage.getItem("noteTime");
      let dbnotePlays = await AsyncStorage.getItem("notePlays");

      let dbnoteNumbTime = await AsyncStorage.getItem("noteNumbTime");
      let dbnoteNumbPlays = await AsyncStorage.getItem("noteNumbPlays");

      let dbchordBasicTime = await AsyncStorage.getItem("chordBasicTime");
      let dbchordBasicPlays = await AsyncStorage.getItem("chordBasicPlays");

      let dbchordIntermediateTime = await AsyncStorage.getItem("chordIntermediateTime");
      let dbchordIntermediatePlays = await AsyncStorage.getItem("chordIntermediatePlays");

      let dbscalesBasicTime = await AsyncStorage.getItem("scalesBasicTime");
      let dbscalesBasicPlays = await AsyncStorage.getItem("scalesBasicPlays");

      let dbscalesIntermediateTime = await AsyncStorage.getItem("scalesIntermediateTime");
      let dbscalesIntermediatePlays = await AsyncStorage.getItem("scalesIntermediatePlays");

      let dbscalesAdvancedTime = await AsyncStorage.getItem("scalesAdvancedTime");
      let dbscalesAdvancedPlays = await AsyncStorage.getItem("scalesAdvancedPlays");

      let dbharmonyTime = await AsyncStorage.getItem("harmonyTime");
      let dbharmonyPlays = await AsyncStorage.getItem("harmonyPlays");


      if (name !== null) {
        setUser(name);
       }

      if (dbnoteTime !== null) {
        setNoteTime(parseFloat(dbnoteTime));
      }
      if (dbnotePlays !== null) {
        setNotePlays(parseFloat(dbnotePlays));
      }
      if (dbnoteNumbTime !== null) {
        setNoteNumbTime(parseFloat(dbnoteNumbTime));
      }
      if (dbnoteNumbPlays !== null) {
        setNoteNumbPlays(parseFloat(dbnoteNumbPlays));
      }

      if (dbchordBasicTime !== null) {
        setChordBasicTime(parseFloat(dbchordBasicTime));
      }
      if (dbchordBasicPlays !== null) {
        setChordBasicPlays(parseFloat(dbchordBasicPlays));
      }
      if (dbchordIntermediateTime !== null) {
        setChordIntermediateTime(parseFloat(dbchordIntermediateTime));
      }
      if (dbchordIntermediatePlays !== null) {
        setChordIntermediatePlays(parseFloat(dbchordIntermediatePlays));
      }

      if (dbscalesBasicTime !== null) {
        setScalesBasicTime(parseFloat(dbscalesBasicTime));
      }
      if (dbscalesBasicPlays !== null) {
        setScalesBasicPlays(parseFloat(dbscalesBasicPlays));
      }
      if (dbscalesIntermediateTime !== null) {
        setScalesIntermediateTime(parseFloat(dbscalesIntermediateTime));
      }
      if (dbscalesIntermediatePlays !== null) {
        setScalesIntermediatePlays(parseFloat(dbscalesIntermediatePlays));
      }
      if (dbscalesAdvancedTime !== null) {
        setScalesAdvancedTime(parseFloat(dbscalesAdvancedTime));
      }
      if (dbscalesAdvancedPlays !== null) {
        setScalesAdvancedPlays(parseFloat(dbscalesAdvancedPlays));
      }
      if (dbharmonyTime !== null) {
        setHarmonyTime(parseFloat(dbharmonyTime));
      }
      if (dbharmonyPlays !== null) {
        setHarmonyPlays(parseFloat(dbharmonyPlays));
      }
    } catch (err) {
      alert(err);
    }
  };
  

  const handlePlayPress = () => {
    navigation.navigate('Play');
  };

  const handleLearnPress = () => {
    navigation.navigate('Learn');
  };

  const handlePressIn = (scale) => {
    Animated.spring(scale, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scale) => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };






  return (
    <View style={styles.main}>

      <StatusBar backgroundColor="black" barStyle="light-content" />

      <View style={styles.mainText}>
        <Text style={styles.appTitle}>ScaleCraft</Text>
        <Image
        source={require('../assets/scaleColors.jpg')}

        style={styles.image}
      />
      </View>

      <View style={styles.secondpart}>
        <View style={styles.buttonContainer}>
          <Animated.View
            style={[styles.button, { transform: [{ scale: scalePlay }] }]}
          >
            <TouchableOpacity
              onPress={handlePlayPress}
              onPressIn={() => handlePressIn(scalePlay)}
              onPressOut={() => handlePressOut(scalePlay)}
            >
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[styles.button, { transform: [{ scale: scaleLearn }] }]}
          >
            <TouchableOpacity
              onPress={handleLearnPress}
              onPressIn={() => handlePressIn(scaleLearn)}
              onPressOut={() => handlePressOut(scaleLearn)}
            >
              <Text style={styles.buttonText}>Learn & How to play</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>

      <View style={styles.lastpart}>

        <Image
        source={require('../assets/scaleColors.jpg')}

        style={styles.image2}
      />
      </View>



    </View>
  );
}


const styles = StyleSheet.create({
  
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: "70%",
    height: 10,
    resizeMode: 'contain',
  },
  mainText: {
    flex:0.36,
    justifyContent: 'center',
    alignItems: 'center', 
  },

  appTitle: {
    
    color: 'white',
    fontSize: 52,
  },

  secondpart: {
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    backgroundColor: 'black',
    flex:0.63
  },

  buttonContainer:{
    justifyContent: "space-around",
    flex:0.4,
    width : "65%",
  },

  button: {
    backgroundColor: 'black',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',  
  },
  lastpart: {
    alignItems: 'center', 
    backgroundColor: 'black',
    flex:0.01,
  },
  image2: {
    width: "100%",
    resizeMode: 'stretch'
  }
});


export default HomeScreen;