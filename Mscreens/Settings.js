import React, { useState, useEffect } from 'react';
import {Keyboard ,TouchableWithoutFeedback, StyleSheet, View, Text,  Switch, TextInput, Image, TouchableOpacity, Animated} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings = ({ 

  user, setUser, 
  instrument, setInstrument,
  soundset,  setSoundSet,
  noteSet,  setNoteSet,
  endlessMode,setEndlessMode,
  setSoundFile,

  setNoteTime, setNotePlays,
  setNoteNumbTime, setNoteNumbPlays,

  setChordBasicTime, setChordBasicPlays,
  setChordIntermediateTime,  setChordIntermediatePlays, 

  setScalesBasicTime,  setScalesBasicPlays,
  setScalesIntermediateTime, setScalesIntermediatePlays,
  setScalesAdvancedTime, setScalesAdvancedPlays,
  setScalesGreekTime, setScalesGreekPlays,
  setHarmonyTime, setHarmonyPlays

  }) => {
    
  const [ramUser, setRamUser] = useState()

  const saveUser = async () => {
    try {
      if (ramUser && ramUser.trim() !== "") { // Check if ramUser is not empty or contains only spaces
        await AsyncStorage.multiSet([["Username", ramUser.trim()]]);
        setUser(ramUser.trim());
      } else {
        alert("Please enter a valid username.");
      }
    } catch (err) {
      alert(err);
    }
  };
  
  



  const deleteUser = async () => {
    try{
      await AsyncStorage.removeItem("Username");

      await AsyncStorage.removeItem("noteTime");
      await AsyncStorage.removeItem("notePlays");
      await AsyncStorage.removeItem("noteNumbTime");
      await AsyncStorage.removeItem("noteNumbPlays");

      await AsyncStorage.removeItem("chordBasicTime");
      await AsyncStorage.removeItem("chordBasicPlays");
      await AsyncStorage.removeItem("chordIntermediateTime");
      await AsyncStorage.removeItem("chordIntermediatePlays");

      await AsyncStorage.removeItem("scalesBasicTime");
      await AsyncStorage.removeItem("scalesBasicPlays");
      await AsyncStorage.removeItem("scalesIntermediateTime");
      await AsyncStorage.removeItem("scalesIntermediatePlays");
      await AsyncStorage.removeItem("scalesAdvancedTime");
      await AsyncStorage.removeItem("scalesAdvancedPlays");
      await AsyncStorage.removeItem("scalesGreekTime");
      await AsyncStorage.removeItem("scalesGreekPlays");
      await AsyncStorage.removeItem("setHarmonyTime");
      await AsyncStorage.removeItem("setHarmonyPlays");

    } catch (err) {
     
    } finally {
      setUser()
      setNoteTime(0)
      setNotePlays(0)
      setNoteNumbTime(0)
      setNoteNumbPlays(0)
      
      setChordBasicTime(0)
      setChordBasicPlays(0)
      setChordIntermediateTime(0)
      setChordIntermediatePlays(0)

      setScalesBasicTime (0)
      setScalesBasicPlays(0)
      setScalesIntermediateTime(0)
      setScalesIntermediatePlays(0)
      setScalesAdvancedTime(0)
      setScalesAdvancedPlays(0)
      setScalesGreekTime(0)
      setScalesGreekPlays(0)
      setHarmonyTime(0)
      setHarmonyPlays(0)
    }

  };


  const dismissKeyboard = () => {
    Keyboard.dismiss();}


  const toggleSwitchEndless = () => setEndlessMode((previousState) => !previousState);
  const toggleSwitchSound = () => setSoundSet((previousState) => !previousState);

  useEffect(() => {

    if (!noteSet) {setSoundSet(true)}

  }, [toggleSwitchSound]);


  const toggleSwitchNote = () => setNoteSet((previousState) => !previousState);

  const changeInstrumentToPiano = () => {
    setInstrument('Piano');
    setSoundFile(pianoFiles);
  };

  const changeInstrumentToAcousticGuitar = () => {
    setInstrument('Acoustic guitar');
    setSoundFile(acousticGuitarFiles);
  };

  const changeInstrumentToElectric = () => {
    setInstrument('Electric guitar');
    setSoundFile(electricGuitarFiles);
  };

  const [pianoButton] = useState(new Animated.Value(1));
  const [eguitarButton] = useState(new Animated.Value(1));
  const [aguitarButton] = useState(new Animated.Value(1));
  const [saveUserButton] = useState(new Animated.Value(1));
  const [deleteUserButton] = useState(new Animated.Value(1));

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

  const pianoFiles = {
    '1': require('../assets/piano/1.mp3'),
    '2': require('../assets/piano/2.mp3'),
    '3': require('../assets/piano/3.mp3'),
    '4': require('../assets/piano/4.mp3'),
    '5': require('../assets/piano/5.mp3'),
    '6': require('../assets/piano/6.mp3'),
    '7': require('../assets/piano/7.mp3'),
    '8': require('../assets/piano/8.mp3'),
    '9': require('../assets/piano/9.mp3'),
    '10': require('../assets/piano/10.mp3'),
    '11': require('../assets/piano/11.mp3'),
    '12': require('../assets/piano/12.mp3'),
  };
  const acousticGuitarFiles = {
    '1': require('../assets/aguitar/1.mp3'),
    '2': require('../assets/aguitar/2.mp3'),
    '3': require('../assets/aguitar/3.mp3'),
    '4': require('../assets/aguitar/4.mp3'),
    '5': require('../assets/aguitar/5.mp3'),
    '6': require('../assets/aguitar/6.mp3'),
    '7': require('../assets/aguitar/7.mp3'),
    '8': require('../assets/aguitar/8.mp3'),
    '9': require('../assets/aguitar/9.mp3'),
    '10': require('../assets/aguitar/10.mp3'),
    '11': require('../assets/aguitar/11.mp3'),
    '12': require('../assets/aguitar/12.mp3'),

  };
  const electricGuitarFiles = {
    '1': require('../assets/eguitar/1.mp3'),
    '2': require('../assets/eguitar/2.mp3'),
    '3': require('../assets/eguitar/3.mp3'),
    '4': require('../assets/eguitar/4.mp3'),
    '5': require('../assets/eguitar/5.mp3'),
    '6': require('../assets/eguitar/6.mp3'),
    '7': require('../assets/eguitar/7.mp3'),
    '8': require('../assets/eguitar/8.mp3'),
    '9': require('../assets/eguitar/9.mp3'),
    '10': require('../assets/eguitar/10.mp3'),
    '11': require('../assets/eguitar/11.mp3'),
    '12': require('../assets/eguitar/12.mp3'),
  }


  return (

    <View style={styles.main}>
      <View style={styles.mainText}>
        <Text style={styles.appTitle}>ScaleCraft</Text>
        <Image
        source={require('../assets/scaleColors.jpg')}

        style={styles.image}
      />
        <Text style={styles.appTitle2}>Settings</Text>
      </View>
 
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.userinfo}>
        <Text style={styles.textUser}>{user ? `Current user: ${user}` : "Create user"}</Text>

        {user ? <>{null}</> : 
        <TextInput style={styles.input} onChangeText ={(text) => setRamUser(text)  }/>
        }

        {user ? <>{null}</> :
        <View style={styles.logButtonContainer}>
        <Animated.View style={[{ transform: [{ scale: saveUserButton }] }]}>
          
            <TouchableOpacity
              style={styles.button1}
              onPress={saveUser}
              onPressIn={() => handlePressIn(saveUserButton)}
              onPressOut={() => handlePressOut(saveUserButton)}
            >
              <Text style={styles.buttonText}>Save username</Text>
            </TouchableOpacity>
            
          </Animated.View>
          </View>
          }
          {user ?
          <View style={styles.logButtonContainer}>
          <Animated.View style={[{ transform: [{ scale: deleteUserButton }] }]}>
            
            <TouchableOpacity
              style={styles.button1}
              onPress={deleteUser}
              onPressIn={() => handlePressIn(deleteUserButton)}
              onPressOut={() => handlePressOut(deleteUserButton)}
            >
              <Text style={styles.buttonText}>Delete user & data</Text>
            </TouchableOpacity>
            
          </Animated.View>
          </View>
          :<></>}
      </View>
      </TouchableWithoutFeedback>

      <View style={styles.allswitchescontainer}>

        <View style={styles.switchContainer}>
          <View style={styles.switchTextContainer}>
            <Text style={styles.textSwitch}>    Notes endless mode:</Text>
          </View> 
          <View style={styles.switch}>
          <Switch
            trackColor={{false: 'grey', true: 'green'}}
            thumbColor={noteSet ? 'white' : 'white'}
            ios_backgroundColor="grey"
            onValueChange={toggleSwitchEndless}
            value={endlessMode}
          />
          </View>
        </View>

        <View style={styles.switchContainer}>

          <View style={styles.switchTextContainer}>  
            <Text style={styles.textSwitch}>    Show notes:</Text>
          </View> 
          <View style={styles.switch}>
          <Switch
            trackColor={{false: 'grey', true: 'green'}}
            thumbColor={noteSet ? 'white' : 'white'}
            ios_backgroundColor="grey"
            onValueChange={toggleSwitchNote}
            value={noteSet}
          />
          </View>
        </View>

        <View style={styles.switchContainer}>

          <View style={styles.switchTextContainer}>
          <Text style={styles.textSwitch}>    Sound:</Text>
          </View> 
          <View style={styles.switch}>
          <Switch
            trackColor={{false: 'grey', true: 'green'}}
            thumbColor={soundset ? 'white' : 'white'}
            ios_backgroundColor="grey"
            onValueChange={toggleSwitchSound}
            value={soundset}
          />
          </View>
        </View>

      </View>

      <View style={styles.option1}>

        <View style={styles.instrumentTextContainer}> 
          <Text style={styles.textOption}>    Chosen instrument: {instrument}</Text>
        </View> 
        <View style={styles.buttonContainer}>

          <Animated.View style={[ { transform: [{ scale: pianoButton }] }]}>
              <TouchableOpacity
                style={styles.button}
                onPress={changeInstrumentToPiano}
                onPressIn={() => handlePressIn(pianoButton)}
                onPressOut={() => handlePressOut(pianoButton)}
              >
                <Text style={styles.buttonText}>Change to Piano</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[ { transform: [{ scale: aguitarButton }] }]}>
              <TouchableOpacity
                style={styles.button}
                onPress={changeInstrumentToAcousticGuitar}
                onPressIn={() => handlePressIn(aguitarButton)}
                onPressOut={() => handlePressOut(aguitarButton)}
              >
                <Text style={styles.buttonText}>Change to Acoustic Guitar</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[ { transform: [{ scale: eguitarButton }] }]}>
              <TouchableOpacity
                style={styles.button}
                onPress={changeInstrumentToElectric}
                onPressIn={() => handlePressIn(eguitarButton)}
                onPressOut={() => handlePressOut(eguitarButton)}
              >
                <Text style={styles.buttonText}>Change to Electric Guitar</Text>
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
};

const styles = StyleSheet.create({
  textUser: {
    color: 'white',
    fontSize: 20
  },  
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
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
    flex:0.30,
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
  userinfo: {
    flex: .26,
    justifyContent: 'space-evenly',
    alignItems: 'center', 
  },
  input: {
    color: 'white',
    borderWidth: 2,
    borderColor: "white",
    width : "75%",
    borderRadius: 10,
    paddingHorizontal:16
  },
  logButtonContainer: {
    width: "40%"
  },
  button1: {
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    width: "100%"
    
  },
  allswitchescontainer: {
    flex: .20,
    justifyContent: 'space-evenly',
  },
    switchContainer: {
      flex: .33,
      flexDirection: 'row',
      flex: 1,
    },   
      switchTextContainer: {
        flex: 0.85,
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems: 'center',
      },
        textSwitch: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18,
      },
      switch: {
        color: 'white',
        fontWeight: 'bold',
        flex: .15,
      },

  option1: {
    flex: .25,
    justifyContent: "space-around",
    alignItems: 'center'
  },
    instrumentTextContainer: {
      flex:0.15,
    },
      textOption: {
        color: 'white',
        fontSize: 18
      },
    buttonContainer:{
      justifyContent: "space-around",
      flex:0.85,
      width : "65%",
    },

      button: {
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 14,
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
export default Settings;
