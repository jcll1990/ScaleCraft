import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated,Image } from 'react-native';


function Learn({ navigation }) {

  const [learnNoteButton] = useState(new Animated.Value(1));
  const [learnChordsButton] = useState(new Animated.Value(1));
  const [learnScaleButton] = useState(new Animated.Value(1));
  const [learnHarmonyButton] = useState(new Animated.Value(1));

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

  const handleLearnNotesPress = () => {
    navigation.navigate('LearnNotes');
  };

  const handleLearnChordsPress = () => {
    navigation.navigate('LearnChords');
  };

  const handleLearnScalesPress = () => {
    navigation.navigate('LearnScales');
  };

  const handleLearnHarmonyPress = () => {
    navigation.navigate('LearnHarmony');
  };

  return (
    <View style={styles.main}>
      <View style={styles.mainText}>
        <Text style={styles.appTitle}>ScaleCraft</Text>
        <Image
        source={require('../../assets/scaleColors.jpg')}

        style={styles.image}
      />
        <Text style={styles.appTitle2}>Learn</Text>
      </View>

      <View style={styles.secondpart}>
        <View style={styles.buttonContainer}>

          <Animated.View
            style={[styles.button, { transform: [{ scale: learnNoteButton }] }]}
          >
            <TouchableOpacity
              onPress={handleLearnNotesPress}
              onPressIn={() => handlePressIn(learnNoteButton)}
              onPressOut={() => handlePressOut(learnNoteButton)}
            >
              <Text style={styles.buttonText}>12 Notes</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[styles.button, { transform: [{ scale: learnChordsButton }] }]}
          >
            <TouchableOpacity
              onPress={handleLearnChordsPress}
              onPressIn={() => handlePressIn(learnChordsButton)}
              onPressOut={() => handlePressOut(learnChordsButton)}
            >
              <Text style={styles.buttonText}>Chords</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[styles.button, { transform: [{ scale: learnScaleButton }] }]}
          >
            <TouchableOpacity
              onPress={handleLearnScalesPress}
              onPressIn={() => handlePressIn(learnScaleButton)}
              onPressOut={() => handlePressOut(learnScaleButton)}
            >
              <Text style={styles.buttonText}>Scales</Text>
            </TouchableOpacity>
          </Animated.View>
    
          <Animated.View
            style={[styles.button, { transform: [{ scale: learnHarmonyButton }] }]}
          >
            <TouchableOpacity
              onPress={handleLearnHarmonyPress}
              onPressIn={() => handlePressIn(learnHarmonyButton)}
              onPressOut={() => handlePressOut(learnHarmonyButton)}
            >
              <Text style={styles.buttonText}>Harmony</Text>
            </TouchableOpacity>
          </Animated.View>

        </View>
      </View>
     
      <View style={styles.lastpart}>
        <Image
        source={require('../../assets/scaleColors.jpg')}

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

  mainText: {
    flex:0.35,
    backgroundColor: 'black',
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
  },

  appTitle: {
  
    color: 'white',
    fontSize: 48,
  },
  appTitle2: {

    color: 'white',
    fontSize: 32,
  },

  secondpart: {
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    backgroundColor: 'black',
    flex:0.65
  },

  buttonContainer:{
    justifyContent: "space-around",
    flex:0.6,
    width : "65%"
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
  image: {
    width: "70%",
    height: 10,
    resizeMode: 'contain',
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

export default Learn;