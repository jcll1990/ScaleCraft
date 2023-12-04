import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated,Image } from 'react-native';

function Play({ navigation }) {
  const [scaleNotes] = useState(new Animated.Value(1));
  const [scaleChords] = useState(new Animated.Value(1));
  const [scaleScales] = useState(new Animated.Value(1));
  const [scaleHarmony] = useState(new Animated.Value(1));

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

  const handlePlayHarmonyPress = () => {
    navigation.navigate('PlayHarmony');
  };

  const handlePlayNotesPress = () => {
    navigation.navigate('PlayNotes');
  };

  const handlePlayChordsPress = () => {
    navigation.navigate('PlayChords');
  };

  const handlePlayScalesPress = () => {
    navigation.navigate('PlayScales');
  };

  return (
    <View style={styles.main}>
      <View style={styles.mainText}>
        <Text style={styles.appTitle}>ScaleCraft</Text>
        <Image
        source={require('../../assets/scaleColors.jpg')}

        style={styles.image}
      />
        <Text style={styles.appTitle2}>Play</Text>
      </View>

      <View style={styles.secondpart}>
        <View style={styles.buttonContainer}>
          <Animated.View style={[styles.button, { transform: [{ scale: scaleNotes }] }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePlayNotesPress}
              onPressIn={() => handlePressIn(scaleNotes)}
              onPressOut={() => handlePressOut(scaleNotes)}
            >
              <Text style={styles.buttonText}>Notes</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={[styles.button, { transform: [{ scale: scaleChords }] }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePlayChordsPress}
              onPressIn={() => handlePressIn(scaleChords)}
              onPressOut={() => handlePressOut(scaleChords)}
            >
              <Text style={styles.buttonText}>Chords</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={[styles.button, { transform: [{ scale: scaleScales }] }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePlayScalesPress}
              onPressIn={() => handlePressIn(scaleScales)}
              onPressOut={() => handlePressOut(scaleScales)}
            >
              <Text style={styles.buttonText}>Scales</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={[styles.button, { transform: [{ scale: scaleHarmony }] }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePlayHarmonyPress}
              onPressIn={() => handlePressIn(scaleHarmony)}
              onPressOut={() => handlePressOut(scaleHarmony)}
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
    flex:0.36,
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
    flex:0.63
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

export default Play;