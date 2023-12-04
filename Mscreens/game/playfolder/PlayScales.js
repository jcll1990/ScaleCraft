import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Animated,Image } from 'react-native';

function PlayScales({ navigation }) {

  const [PentatonicButton] = useState(new Animated.Value(1));
  const [NaturalButton] = useState(new Animated.Value(1));
  const [AdvancedScaleButton] = useState(new Animated.Value(1));
  const [GreekButton] = useState(new Animated.Value(1));


  const handlePlayScalesBasicPress = () => {
    navigation.navigate('PlayScalesBasic');
  };

  const handlePlayScalesIntermediatePress = () => {
    navigation.navigate('PlayScalesIntermediate');
  };

  const handlePlayScalesAdvancedPress = () => {
    navigation.navigate('PlayScalesAdvanced');
  };

  const handlePlayScalesGreekPress = () => {
    navigation.navigate('PlayScalesGreek');
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
        <Text style={styles.appTitle2}>Scales</Text>
      </View>

      <View style={styles.secondpart}>
        <View style={styles.buttonContainer}>

        <Animated.View
            style={[styles.button, { transform: [{ scale: PentatonicButton }] }]}
          >
            <TouchableOpacity
              onPress={handlePlayScalesBasicPress}
              onPressIn={() => handlePressIn(PentatonicButton)}
              onPressOut={() => handlePressOut(PentatonicButton)}
            >
              <Text style={styles.buttonText}>Pentatonic scale</Text>
            </TouchableOpacity>
          </Animated.View>



          <Animated.View
            style={[styles.button, { transform: [{ scale: NaturalButton }] }]}
          >
            <TouchableOpacity
              onPress={handlePlayScalesIntermediatePress}
              onPressIn={() => handlePressIn(NaturalButton)}
              onPressOut={() => handlePressOut(NaturalButton)}
            >
            <Text style={styles.buttonText}>Natural/minor scale</Text>
            </TouchableOpacity>
          </Animated.View>


          
          <Animated.View
            style={[styles.button, { transform: [{ scale: AdvancedScaleButton }] }]}
          >
            <TouchableOpacity
              onPress={handlePlayScalesAdvancedPress}
              onPressIn={() => handlePressIn(AdvancedScaleButton)}
              onPressOut={() => handlePressOut(AdvancedScaleButton)}
            >
              <Text style={styles.buttonText}>Harmonic/Melodic minor</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[styles.button, { transform: [{ scale: GreekButton }] }]}
          >
            <TouchableOpacity
              onPress={handlePlayScalesGreekPress}
              onPressIn={() => handlePressIn(GreekButton)}
              onPressOut={() => handlePressOut(GreekButton)}
            >
            <Text style={styles.buttonText}>Greek modes</Text>
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

export default PlayScales;