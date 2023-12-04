import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated,Image } from 'react-native';

function PlayChords({ navigation }) {
  const [TriadButton] = useState(new Animated.Value(1));
  const [SeventhButton] = useState(new Animated.Value(1));


  const handlePlayChordsBasicPress = () => {
    navigation.navigate('PlayChordsBasic');
  };

  const handlePlayChordsIntermediatePress = () => {
    navigation.navigate('PlayChordsIntermediate');
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
      <View style={styles.mainText}>
        <Text style={styles.appTitle}>ScaleCraft</Text>
        <Image
        source={require('../../../assets/scaleColors.jpg')}

        style={styles.image}
      />
        <Text style={styles.appTitle2}>Chords</Text>
      </View>

      <View style={styles.secondpart}>
        <View style={styles.buttonContainer}>

          <Animated.View
            style={[styles.button, { transform: [{ scale: TriadButton }] }]}
          >
            <TouchableOpacity
              onPress={handlePlayChordsBasicPress}
              onPressIn={() => handlePressIn(TriadButton)}
              onPressOut={() => handlePressOut(TriadButton)}
            >
              <Text style={styles.buttonText}>Triad chords</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[styles.button, { transform: [{ scale: SeventhButton }] }]}
          >
            <TouchableOpacity
              onPress={handlePlayChordsIntermediatePress}
              onPressIn={() => handlePressIn(SeventhButton)}
              onPressOut={() => handlePressOut(SeventhButton)}
            >
            <Text style={styles.buttonText}>Seventh chords</Text>
            </TouchableOpacity>
          </Animated.View>


        </View>
      </View>
      <View style={styles.lastpart}>
        <Image
        source={require('../../../assets/scaleColors.jpg')}

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

export default PlayChords;