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

const PlayNotesNumber = 
({
  user,
  navigation,
  soundFiles,
  soundset,
  noteSet,
  noteNumbTime,
  noteNumbPlays,
  setNoteNumbTime,
  setNoteNumbPlays,
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


  const [rNote1, setRNote1] = useState();
  const [rNote2, setRNote2] = useState();
  const [rNote3, setRNote3] = useState();
  const [rNote4, setRNote4] = useState();
  const [rNote5, setRNote5] = useState();
  const [rNote6, setRNote6] = useState();
  const [rNote7, setRNote7] = useState();
  const [rNote8, setRNote8] = useState();
  const [rNote9, setRNote9] = useState();
  const [rNote10, setRNote10] = useState();
  const [rNote11, setRNote11] = useState();
  const [rNote12, setRNote12] = useState();

  function vibrate() {

    Vibration.vibrate(500);
  }


  const handleSwitchPress = () => {
    navigation.navigate('PlayNotes', { transition: 'fromRight' });
    stopTimer();
    setTimer(0);
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
    generateRandomNumbers()
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

  const playSound = async (a) => {
    try {
      const soundObject = new Audio.Sound();
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


    const generateRandomNonRepeatingNumbers = (min, max, count) => {
      const numbers = Array.from({ length: max - min + 1 }, (_, index) => min + index);
      const result = [];
    
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNumber = numbers.splice(randomIndex, 1)[0];
        result.push(randomNumber);
      }
      return result;
    };
    
    const generateRandomNumbers = () => {
      const randomNumbers = generateRandomNonRepeatingNumbers(1, 12, 12);
      setRNote1(randomNumbers[0]);
      setRNote2(randomNumbers[1]);
      setRNote3(randomNumbers[2]);
      setRNote4(randomNumbers[3]);
      setRNote5(randomNumbers[4]);
      setRNote6(randomNumbers[5]);
      setRNote7(randomNumbers[6]);
      setRNote8(randomNumbers[7]);
      setRNote9(randomNumbers[8]);
      setRNote10(randomNumbers[9]);
      setRNote11(randomNumbers[10]);
      setRNote12(randomNumbers[11]);}

    function NotmainButton(a) {
      setChosenNote(a);
    
      if (a === gameNote && flag === true) {
        setResult("Correct");
        if (user) {
          setNoteNumbTime(prevState => prevState + timer);
          setNoteNumbPlays(prevState => prevState + 1);
          save(parseFloat(noteNumbTime) + timer, parseFloat(noteNumbPlays) + 1);
        }
        stopTimer();
        setflag(false)
        if (endlessMode === true) {
          TheMainButton()
        }

      } else if (result === "Correct" || result === "Correct - Hit note above"){
        setResult("Correct - Hit note above")
        vibrate()}
      else{
        setResult("Incorrect");
        vibrate()
      }
    }
    
    const save = async (updatedNoteTime, updatedNotePlays) => {
      try {
        await AsyncStorage.setItem("noteNumbTime", updatedNoteTime.toString());
        await AsyncStorage.setItem("noteNumbPlays", updatedNotePlays.toString());
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





    const getNote = (a) => {
      const notes = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
      return notes[a - 1];
    };
    const getColor = (a) => {
      const colors = ['#00ff00', '#00ff7f', '#00ffff', '#007fff', '#0000ff', '#7f00ff', '#ff00ff', '#ff0080', '#ff0000', '#ff7f00', '#ffff00', '#7fff00'];
      return colors[a - 1];
    };

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



          {displayGameNote? (noteSet ===true ? gameNote : "?") : "Start"}
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
          style={[styles.noteButton, {transform: [{ scale: buttonEff1 }], borderColor: `${getColor(rNote1)}` }]}
          onPress={() => NotmainButton(rNote1, buttonEff1)}
          onPressIn={() => handlePressIn(buttonEff1)}
          onPressOut={() => handlePressOut(buttonEff1)}
        >
          <Text style={styles.noteButtonText}>{getNote(rNote1)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff2 }] , borderColor: `${getColor(rNote2)}` }]}
          onPress={() => NotmainButton(rNote2, buttonEff2)}
          onPressIn={() => handlePressIn(buttonEff2)}
          onPressOut={() => handlePressOut(buttonEff2)}
        >
          <Text style={styles.noteButtonText}>{getNote(rNote2)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff3 }] , borderColor: `${getColor(rNote3)}` }]}
          onPress={() => NotmainButton(rNote3, buttonEff3)}
          onPressIn={() => handlePressIn(buttonEff3)}
          onPressOut={() => handlePressOut(buttonEff3)}
        >
          <Text style={styles.noteButtonText}>{getNote(rNote3)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff4 }] , borderColor: `${getColor(rNote4)}` }]}
          onPress={() => NotmainButton(rNote4, buttonEff4)}
          onPressIn={() => handlePressIn(buttonEff4)}
          onPressOut={() => handlePressOut(buttonEff4)}
          >
          <Text style={styles.noteButtonText}>{getNote(rNote4)}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.kMID}>
        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff5 }] , borderColor: `${getColor(rNote5)}` }]}
          onPress={() => NotmainButton(rNote5, buttonEff5)}
          onPressIn={() => handlePressIn(buttonEff5)}
          onPressOut={() => handlePressOut(buttonEff5)}
        >
          <Text style={styles.noteButtonText}>{getNote(rNote5)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff6 }] , borderColor: `${getColor(rNote6)}` }]}
          onPress={() => NotmainButton(rNote6, buttonEff6)}
          onPressIn={() => handlePressIn(buttonEff6)}
          onPressOut={() => handlePressOut(buttonEff6)}
          >
          <Text style={styles.noteButtonText}>{getNote(rNote6)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff7 }] , borderColor: `${getColor(rNote7)}` }]}
          onPress={() => NotmainButton(rNote7, buttonEff7)}
          onPressIn={() => handlePressIn(buttonEff7)}
          onPressOut={() => handlePressOut(buttonEff7)}
          >
          <Text style={styles.noteButtonText}>{getNote(rNote7)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff8 }] , borderColor: `${getColor(rNote8)}` }]}
          onPress={() => NotmainButton(rNote8, buttonEff8)}
          onPressIn={() => handlePressIn(buttonEff8)}
          onPressOut={() => handlePressOut(buttonEff8)}
          >
          <Text style={styles.noteButtonText}>{getNote(rNote8)}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.KBOT}>
      <TouchableOpacity
        style={[styles.noteButton, { transform: [{ scale: buttonEff9 }] , borderColor: `${getColor(rNote9)}` }]}
        onPress={() => NotmainButton(rNote9, buttonEff9)}
        onPressIn={() => handlePressIn(buttonEff9)}
        onPressOut={() => handlePressOut(buttonEff9)}
        >
         <Text style={styles.noteButtonText}>{getNote(rNote9)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff10 }] , borderColor: `${getColor(rNote10)}` }]}
          onPress={() => NotmainButton(rNote10, buttonEff10)}
          onPressIn={() => handlePressIn(buttonEff10)}
          onPressOut={() => handlePressOut(buttonEff10)}
          >
          <Text style={styles.noteButtonText}>{getNote(rNote10)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff11 }] , borderColor: `${getColor(rNote11)}` }]}
          onPress={() => NotmainButton(rNote11, buttonEff11)}
          onPressIn={() => handlePressIn(buttonEff11)}
          onPressOut={() => handlePressOut(buttonEff11)}
          >
          <Text style={styles.noteButtonText}>{getNote(rNote11)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.noteButton, { transform: [{ scale: buttonEff12}] , borderColor: `${getColor(rNote12)}` }]}
          onPress={() => NotmainButton(rNote12, buttonEff12)}
          onPressIn={() => handlePressIn(buttonEff12)}
          onPressOut={() => handlePressOut(buttonEff12)}
          >
         <Text style={styles.noteButtonText}>{getNote(rNote12)}</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.clearAndSound}>
   
      <TouchableOpacity 
        style={[styles.clearButton, { transform: [{ scale: switchButtonEff}] }]}
        onPress={() => handleSwitchPress(switchButtonEff)}
        onPressIn={() => handlePressIn(switchButtonEff)}
        onPressOut={() => handlePressOut(switchButtonEff)}
      >
        <Text style={styles.clearButtonText}>Switch - guess by note</Text>
      </TouchableOpacity>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer:{
    color: 'white',
    fontSize: 15,
    textAlignVertical: 'bottom',
    justifyContent: 'center',
    alignItems: 'center',

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


export default PlayNotesNumber;
