import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity,
  Text,
  Animated,
  Image,
  Vibration 
} 
  from 'react-native';

const PlayNotes = 
({
  user,
  navigation,
  soundFiles,
  soundset,
  noteSet,
  noteTime,
  notePlays,
  setNoteTime,
  setNotePlays ,
  endlessMode
}) => {

  const [flag, setflag] = useState(false)
  const [mainButtonEff] = useState(new Animated.Value(1));
  const [switchButtonEff] = useState(new Animated.Value(1));
  const [playSoundButtonEff] = useState(new Animated.Value(1));




  const [buttonEff1] = useState(new Animated.Value(1));
  const [buttonEff2] = useState(new Animated.Value(1));
  const [buttonEff3] = useState(new Animated.Value(1));
  const [buttonEff4] = useState(new Animated.Value(1));
  const [buttonEff5] = useState(new Animated.Value(1));
  const [buttonEff6] = useState(new Animated.Value(1));
  const [buttonEff7] = useState(new Animated.Value(1));
  const [buttonEff8] = useState(new Animated.Value(1));
  const [buttonEff9] = useState(new Animated.Value(1));
  const [buttonEff10] = useState(new Animated.Value(1));
  const [buttonEff11] = useState(new Animated.Value(1));
  const [buttonEff12] = useState(new Animated.Value(1));

  const [gameNote, setGameNote] = useState();
  const [displayGameNote, setDisplayGameNote] = useState();
  const [chosenNote, setChosenNote] = useState();
  const [timer, setTimer] = useState(0);
  const [result, setResult] = useState("");
  const [timerIntervalId, setTimerIntervalId] = useState(null); 

  function vibrate() {

    Vibration.vibrate(500);
  }

  const handleSwitchPress = () => {
    navigation.navigate('PlayNotesNumber', { transition: 'fromLeft' });
    stopTimer();
    setTimer(0);
    setGameNote()
    setDisplayGameNote("Start")
  };

  const handlePressIn = (scale) => {
    Animated.spring(scale, {
      toValue: 1.4,
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

  const TheMainButton = () => {
    setflag(true)
    setResult("");
    stopTimer();
    setTimer(0);
    
    let newRandom;

    do {
      const randomDecimal = Math.random();
      newRandom = Math.floor(randomDecimal * 12) + 1;
    } while (newRandom === gameNote);

    setGameNote(newRandom);
    startTimer();
    if (soundset) {
    playSound(newRandom)
    }
  };
  
  const soundObject = new Audio.Sound();

  const playSound = async (a) => {
    try {
      // Unload the previous sound before loading a new one
      await soundObject.unloadAsync();
  
      // Load and play the new sound
      await soundObject.loadAsync(soundFiles[a]);
      await soundObject.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

    const startTimer = () => {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000); 
      setTimerIntervalId(intervalId);
    };
    const stopTimer = () => {
      clearInterval(timerIntervalId); 
    };
  
    useEffect(() => {

      if(!noteSet) {
        setDisplayGameNote("?");
      } else if (gameNote === 1) {
        setDisplayGameNote("A");
      } else if (gameNote === 2) {
        setDisplayGameNote("A#/Bb");
      } else if (gameNote === 3) {
        setDisplayGameNote("B");
      } else if (gameNote === 4) {
        setDisplayGameNote("C");
      } else if (gameNote === 5) {
        setDisplayGameNote("C#/Db");
      } else if (gameNote === 6) {
        setDisplayGameNote("D");
      } else if (gameNote === 7) {
        setDisplayGameNote("D#/Eb");
      } else if (gameNote === 8) {
        setDisplayGameNote("E");
      } else if (gameNote === 9) {
        setDisplayGameNote("F");
      } else if (gameNote === 10) {
        setDisplayGameNote("F#/Gb");
      } else if (gameNote === 11) {
        setDisplayGameNote("G");
      } else if (gameNote === 12) {
        setDisplayGameNote("G#/Ab");
      }
    }, [gameNote]);


    function NotmainButton(a) {
      setChosenNote(a);
    
      if (a === gameNote && flag === true) {
        setResult("Correct");
        if (user) {
          setNoteTime(prevState => prevState + timer);
          setNotePlays(prevState => prevState + 1);
          save(parseFloat(noteTime) + timer, parseFloat(notePlays) + 1);
        }
        stopTimer();
        setflag(false);
        if (endlessMode === true) {
          TheMainButton();
        }
      } else if (result === "Correct" || result === "Correct - Hit note above") {
        setResult("Correct - Hit note above");
        vibrate();
      } else {
        setResult("Incorrect");
        vibrate();
      }
    }
    
    const save = async (updatedNoteTime, updatedNotePlays) => {
      try {
        await AsyncStorage.setItem("noteTime", updatedNoteTime.toString());
        await AsyncStorage.setItem("notePlays", updatedNotePlays.toString());
      } catch (err) {
        alert(err);
      }
    };
    
    
    useFocusEffect(
      React.useCallback(() => {

        setTimer(0);
        setflag(true)
        return () => {
          
        };
      }, [])
    )


  return (
  <View style={styles.main}>

    <View style={styles.mainDisplay}>

      <View style={styles.timerDisplay}>
        <Text style={styles.timer}>Notes</Text>
        <Text style={styles.timer}>{timer > 0 ? `Timer: ${timer}` : null}</Text>
    
      </View>





      <View style={styles.bigNoteDisplay}>
        <TouchableOpacity
        style={[
        styles.mainButton,
        { transform: [{ scale: mainButtonEff }]},
        ]}
        onPress={() => TheMainButton(mainButtonEff)}
        onPressIn={() => handlePressIn(mainButtonEff)}
        onPressOut={() => handlePressOut(mainButtonEff)}
        >
          <Text style={styles.mainButtonText}>
          {displayGameNote ? displayGameNote : "Start"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.builder}>
      <View style={styles.resultgame}>
        <Text style={styles.resultgameText}>{result}</Text>

      </View>

    </View>

    <View style={styles.keyboard}>
      <View style={styles.kTOP}>
        <TouchableOpacity
          style={[styles.noteButton,{transform: [{ scale: buttonEff1 }], borderColor: `#00ff00` }]}
          onPress={() => NotmainButton(1, buttonEff1)}
          onPressIn={() => handlePressIn(buttonEff1)}
          onPressOut={() => handlePressOut(buttonEff1)}
        >
          <Text style={styles.noteButtonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff2 }], borderColor: `#00ff7f` }]}
          onPress={() => NotmainButton(2, buttonEff2)}
          onPressIn={() => handlePressIn(buttonEff2)}
          onPressOut={() => handlePressOut(buttonEff2)}
        >
          <Text style={styles.noteButtonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff3 }], borderColor: `#00ffff` }]}
          onPress={() => NotmainButton(3, buttonEff3)}
          onPressIn={() => handlePressIn(buttonEff3)}
          onPressOut={() => handlePressOut(buttonEff3)}
        >
          <Text style={styles.noteButtonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff4 }], borderColor: `#007fff` }]}
          onPress={() => NotmainButton(4, buttonEff4)}
          onPressIn={() => handlePressIn(buttonEff4)}
          onPressOut={() => handlePressOut(buttonEff4)}
          >
          <Text style={styles.noteButtonText}>4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.kMID}>
        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff5 }], borderColor: `#0000ff` }]}
          onPress={() => NotmainButton(5, buttonEff5)}
          onPressIn={() => handlePressIn(buttonEff5)}
          onPressOut={() => handlePressOut(buttonEff5)}
        >
          <Text style={styles.noteButtonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff6 }], borderColor: `#7f00ff` }]}
          onPress={() => NotmainButton(6, buttonEff6)}
          onPressIn={() => handlePressIn(buttonEff6)}
          onPressOut={() => handlePressOut(buttonEff6)}
          >
          <Text style={styles.noteButtonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff7 }], borderColor: `#ff00ff` }]}
          onPress={() => NotmainButton(7, buttonEff7)}
          onPressIn={() => handlePressIn(buttonEff7)}
          onPressOut={() => handlePressOut(buttonEff7)}
          >
          <Text style={styles.noteButtonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff8 }], borderColor: `#ff0080` }]}
          onPress={() => NotmainButton(8, buttonEff8)}
          onPressIn={() => handlePressIn(buttonEff8)}
          onPressOut={() => handlePressOut(buttonEff8)}
          >
          <Text style={styles.noteButtonText}>8</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.KBOT}>
      <TouchableOpacity
        style={[styles.noteButton, { transform: [{ scale: buttonEff9 }], borderColor: `#ff0000` }]}
        onPress={() => NotmainButton(9, buttonEff9)}
        onPressIn={() => handlePressIn(buttonEff9)}
        onPressOut={() => handlePressOut(buttonEff9)}
        >
         <Text style={styles.noteButtonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff10 }], borderColor: `#ff7f00` }]}
          onPress={() => NotmainButton(10, buttonEff10)}
          onPressIn={() => handlePressIn(buttonEff10)}
          onPressOut={() => handlePressOut(buttonEff10)}
          >
          <Text style={styles.noteButtonText}>10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff11 }], borderColor: `#ffff00` }]}
          onPress={() => NotmainButton(11, buttonEff11)}
          onPressIn={() => handlePressIn(buttonEff11)}
          onPressOut={() => handlePressOut(buttonEff11)}
          >
          <Text style={styles.noteButtonText}>11</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff12}], borderColor: `#7fff00` }]}
          onPress={() => NotmainButton(12, buttonEff12)}
          onPressIn={() => handlePressIn(buttonEff12)}
          onPressOut={() => handlePressOut(buttonEff12)}
          >
         <Text style={styles.noteButtonText}>12</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.clearAndSound}>
   
    {gameNote && soundset &&  (
      <TouchableOpacity
        style={[styles.clearButton, { transform: [{ scale: playSoundButtonEff}] }]}
        onPress={() => playSound(gameNote,playSoundButtonEff)}
        onPressIn={() => handlePressIn(playSoundButtonEff)}
        onPressOut={() => handlePressOut(playSoundButtonEff)}
      >
        <Text style={styles.clearButtonText}>Play note again</Text>
      </TouchableOpacity>
    )}
      <TouchableOpacity 
        style={[styles.clearButton, { transform: [{ scale: switchButtonEff}] }]}
        onPress={() => handleSwitchPress(switchButtonEff)}
        onPressIn={() => handlePressIn(switchButtonEff)}
        onPressOut={() => handlePressOut(switchButtonEff)}
      >
        <Text style={styles.clearButtonText}>Switch - guess by number</Text>
      </TouchableOpacity>

    </View>


    <View style={styles.lastpart}>

    <Image
    source={require('../../../assets/scaleColors.jpg')}

    style={styles.image2}
    />
    </View>


  </View>
  );
};

const styles = StyleSheet.create({
  
  main: {
    display: "flex",
    flex: 1,
    backgroundColor: 'black',
  }, 
  mainDisplay: {
    flex: 0.29,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
  }, 
  timerDisplay: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center', // Center horizontally
  },
  timer:{
    color: 'white',
    fontSize: 15,
    textAlignVertical: 'bottom'
  },
  bigNoteDisplay: {
    flex: 0.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButton: {
    width: '50%',
    height: '70%',
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
     textAlignVertical: 'center',
    justifyContent: 'center'
  },  
  mainButtonText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'center',   
  }, 
  builder:{
    flex: .10,

  },
  resultgame:{
    flex: .50,
  },
  resultgameText:{
    color: 'white',
    fontSize: 24,
    textAlign: 'center',   
  },
  built:{
    flex: .50,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  builderText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    borderWidth: 1,
    borderBottomColor: 'white',
    width: '10%',
    height: '70%',
  },
  keyboard:{
    flex: .5,
  },
  kTOP:{
    flex: .33,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  kMID:{
    flex: .33,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  KBOT:{
    flex: .33,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  noteButton: {
    width: '18%',
    height: '60%',
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: 'white',
    justifyContent: 'center'
  },
  noteButtonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',   
  },
  clearAndSound:{
    flex: .1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }, 
  clearButton: {
    width: '45%',
    height: '60%',
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center'
  },  
  clearButtonText: {
    color: 'white',
    fontSize: 15,
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


export default PlayNotes;
