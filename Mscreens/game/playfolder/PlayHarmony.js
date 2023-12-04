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


const PlayHarmony = ({
  user,
  navigation,
  soundFiles,
  soundset,
  noteSet,
  harmonyTime, 
  harmonyPlays, 
  setHarmonyTime, 
  setHarmonyPlays 
}) => {

  const [flag, setflag] = useState(false)

  const [flag2, setflag2] = useState(false)
  const [flag3, setflag3] = useState(false)

  const [mainButtonEff] = useState(new Animated.Value(1));
  const [clearonButtonEff] = useState(new Animated.Value(1));
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

  const [chordButton1] = useState(new Animated.Value(1));
  const [chordButton2] = useState(new Animated.Value(1));
  const [chordButton3] = useState(new Animated.Value(1));
  const [chordButton4] = useState(new Animated.Value(1));
  const [chordButton5] = useState(new Animated.Value(1));
  const [chordButton6] = useState(new Animated.Value(1));
  const [chordButton7] = useState(new Animated.Value(1));


  const [gameNote1, setGameNote1] = useState();
  const [gameNote2, setGameNote2] = useState();
  const [gameNote3, setGameNote3] = useState();
  const [gameNote4, setGameNote4] = useState();
  const [gameNote5, setGameNote5] = useState();
  const [gameNote6, setGameNote6] = useState();
  const [gameNote7, setGameNote7] = useState();


  const [positionasnwer, setPositionasnwer] = useState()
  const [chordAsnwer, setChordAsnwer] = useState()


  const [displayGameNote, setDisplayGameNote] = useState();
  const [basicChord, setBasichord] = useState();
  const [displayGameScale, setDisplayGameScale] = useState();

 const [askPosition, setAskposition] = useState()
 const [displayAskPosition, setdisplayAskposition] = useState()
 const [chordType, setChordType] = useState()
 const [displaychordType, setDisplayChordType] = useState()





  const [chosenNote1, setChosenNote1] = useState();
  const [chosenChord, setChosenChord] = useState();


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

  const [timer, setTimer] = useState(0);
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const [timerIntervalId, setTimerIntervalId] = useState(null); 

  function vibrate() {

    Vibration.vibrate(500);
  }

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
    
  const playSound = async (a) => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(soundFiles[a]);
      await soundObject.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

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


  const TheMainButton = () => {
    setflag(false)
    setflag2(false)
    setflag3(false)
    setResult("");
    setResult2("");
    stopTimer();
    setTimer(0);
    setChosenNote1();
    setChosenChord();


    generateRandomNumbers()
  
    let newRandom1; 
    do {
      const randomDecimal1 = Math.random();
      newRandom1 = Math.floor(randomDecimal1 * 12) + 1; //raiz
    } while (newRandom1 === gameNote1);
  
    const randomDecimal2 = Math.random();
    const newRandom2 = Math.floor(randomDecimal2 * 2) + 1; //Scale
    const newRandom3 = Math.floor(randomDecimal2 * 7) + 1; //Position
    const newRandom4 = Math.floor(randomDecimal2 * 2) + 1; //Chordtype
  
    setBasichord(newRandom2);
    setGameNote1(newRandom1);
    setAskposition(newRandom3)
    setChordType(newRandom4)










    if(newRandom2===1){  // 1 = Major natural maj +2 +2 +1 +2 +2 +2 +1

      if (newRandom4 === 1) { // triad
        if (newRandom3 === 1 || newRandom3 === 4 || newRandom3 === 5) {
          setChordAsnwer(1);
        } else if (newRandom3 === 2 || newRandom3 === 3 || newRandom3 === 6) {
          setChordAsnwer(2);
        } else {
          setChordAsnwer(3);
        }
      }
      
      else {        
        if (newRandom3 === 1 || newRandom3 === 4) {
          setChordAsnwer(4);
        } else if (newRandom3 === 2 || newRandom3 === 3 || newRandom3 === 6) {
          setChordAsnwer(5);
        } else if (newRandom3 === 5) {
          setChordAsnwer(6);
        } else {
          setChordAsnwer(7);
        }
      }
      

      if (newRandom3 === 1) {
        setPositionasnwer(newRandom1)

      } else if (newRandom3 === 2) {

        if (newRandom1 +2 > 12)
        {setPositionasnwer(newRandom1 +2 - 12)}
        else {setPositionasnwer(newRandom1 +2)}

      } else if (newRandom3 === 3) {
        if (newRandom1 +2 +2 > 12)
        {setPositionasnwer(newRandom1 +2 +2 - 12)}
        else {setPositionasnwer(newRandom1 +2 +2)}

      } else if (newRandom3 === 4) {
        if (newRandom1 +2 +2 +1 > 12)
        {setPositionasnwer(newRandom1 +2 +2 +1 - 12)}
        else {setPositionasnwer(newRandom1 +2 +2 +1)}

      } else if (newRandom3 === 5) {
        if (newRandom1 +2 +2 +1 +2 > 12)
        {setPositionasnwer(newRandom1 +2 +2 +1 +2 - 12)}
        else {setPositionasnwer(newRandom1 +2 +2 +1 +2)}

      } else if (newRandom3 === 6) {
        if (newRandom1 +2 +2 +1 +2 +2 > 12)
        {setPositionasnwer(newRandom1 +2 +2 +1 +2 +2 - 12)}
        else {setPositionasnwer(newRandom1 +2 +2 +1 +2 +2)}

      } else {
        if (newRandom1 +2 +2 +1 +2 +2 +2 > 12)
        {setPositionasnwer(newRandom1 +2 +2 +1 +2 +2 +2 - 12)}
        else {setPositionasnwer(newRandom1 +2 +2 +1 +2 +2 +2)}
      }

      if (newRandom1 +2> 12) 
        {
      setGameNote2(newRandom1 +2 -12)
      setGameNote3(newRandom1 +2 +2 -12)
      setGameNote4(newRandom1 +2 +2 +1 -12)
      setGameNote5(newRandom1 +2 +2 +1 +2 -12)
      setGameNote6(newRandom1 +2 +2 +1 +2 +2 -12)
      setGameNote7(newRandom1 +2 +2 +1 +2 +2 +2 -12)
        }
      else if (newRandom1 +2 +2> 12) 
      {
        setGameNote2(newRandom1 +2)
        setGameNote3(newRandom1 +2 +2 -12)
        setGameNote4(newRandom1 +2 +2 +1 -12)
        setGameNote5(newRandom1 +2 +2 +1 +2 -12)
        setGameNote6(newRandom1 +2 +2 +1 +2 +2 -12)
        setGameNote7(newRandom1 +2 +2 +1 +2 +2 +2 -12)
      } 
      else if (newRandom1 +2 +2 +1> 12) 
      {
        setGameNote2(newRandom1 +2)
        setGameNote3(newRandom1 +2 +2)
        setGameNote4(newRandom1 +2 +2 +1 -12)
        setGameNote5(newRandom1 +2 +2 +1 +2 -12)
        setGameNote6(newRandom1 +2 +2 +1 +2 +2 -12)
        setGameNote7(newRandom1 +2 +2 +1 +2 +2 +2 -12)
      } 
      else if (newRandom1 +2 +2 +1 +2> 12) 
      {
        setGameNote2(newRandom1 +2)
        setGameNote3(newRandom1 +2 +2)
        setGameNote4(newRandom1 +2 +2 +1)
        setGameNote5(newRandom1 +2 +2 +1 +2 -12)
        setGameNote6(newRandom1 +2 +2 +1 +2 +2 -12)
        setGameNote7(newRandom1 +2 +2 +1 +2 +2 +2 -12)
      } 
      else if (newRandom1 +2 +2 +1 +2 +2> 12) 
      {
        setGameNote2(newRandom1 +2)
        setGameNote3(newRandom1 +2 +2)
        setGameNote4(newRandom1 +2 +2 +1)
        setGameNote5(newRandom1 +2 +2 +1 +2)
        setGameNote6(newRandom1 +2 +2 +1 +2 +2 -12)
        setGameNote7(newRandom1 +2 +2 +1 +2 +2 +2 -12)
      }      
       else if (newRandom1 +2 +2 +1 +2 +2 +2 > 12) 
      {
        setGameNote2(newRandom1 +2)
        setGameNote3(newRandom1 +2 +2)
        setGameNote4(newRandom1 +2 +2 +1)
        setGameNote5(newRandom1 +2 +2 +1 +2)
        setGameNote6(newRandom1 +2 +2 +1 +2 +2)
        setGameNote7(newRandom1 +2 +2 +1 +2 +2 +2 -12)
      }  
      else 
      {
        setGameNote2(newRandom1 +2)
        setGameNote3(newRandom1 +2 +2)
        setGameNote4(newRandom1 +2 +2 +1)
        setGameNote5(newRandom1 +2 +2 +1 +2)
        setGameNote6(newRandom1 +2 +2 +1 +2 +2)
        setGameNote7(newRandom1 +2 +2 +1 +2 +2 +2)
      } 

      

    } else if (newRandom2 === 2) { // 2 = Minor natural min +2 +1 +2 +2 +1 +2 +2



      if (newRandom4 === 1) { // triad
        if (newRandom3 === 3 || newRandom3 === 6 || newRandom3 === 7) {
          setChordAsnwer(1);
        } else if (newRandom3 === 4 || newRandom3 === 5 || newRandom3 === 1) {
          setChordAsnwer(2);
        } else {
          setChordAsnwer(3);
        }
      } else {        
        if (newRandom3 === 3 || newRandom3 === 6) {
          setChordAsnwer(4);
        } else if (newRandom3 === 1 || newRandom3 === 4 || newRandom3 === 5) {
          setChordAsnwer(5);
        } else if (newRandom3 === 7) {
          setChordAsnwer(6);
        } else {
          setChordAsnwer(7);
        }
      }
      

      if (newRandom3 === 1) {
        setPositionasnwer(newRandom1)

      } else if (newRandom3 === 2) {

        if (newRandom1 +2 > 12)
        {setPositionasnwer(newRandom1 +2 - 12)}
        else {setPositionasnwer(newRandom1 +2)}

      } else if (newRandom3 === 3) {
        if (newRandom1 +2 + 1 > 12)
        {setPositionasnwer(newRandom1 +2 + 1 - 12)}
        else {setPositionasnwer(newRandom1 +2 + 1)}

      } else if (newRandom3 === 4) {
        if (newRandom1 +2 + 1 + 2 > 12)
        {setPositionasnwer(newRandom1 +2 + 1 + 2 - 12)}
        else {setPositionasnwer(newRandom1 +2 + 1 + 2)}

      } else if (newRandom3 === 5) {
        if (newRandom1 +2 + 1 + 2 + 2 > 12)
        {setPositionasnwer(newRandom1 +2 + 1 + 2 + 2 - 12)}
        else {setPositionasnwer(newRandom1 +2 + 1 + 2 + 2)}

      } else if (newRandom3 === 6) {
        if (newRandom1 +2 + 1 + 2 + 2 + 1 > 12)
        {setPositionasnwer(newRandom1 +2 + 1 + 2 + 2 + 1 - 12)}
        else {setPositionasnwer(newRandom1 +2 + 1 + 2 + 2 + 1)}

      } else {
        if (newRandom1 +2 + 1 + 2 + 2 + 1 + 2 > 12)
        {setPositionasnwer(newRandom1 +2 + 1 + 2 + 2 + 1 + 2 - 12)}
        else {setPositionasnwer(newRandom1 +2 + 1 + 2 + 2 + 1 + 2)}
      }
      
        if (newRandom1 + 2 > 12) {
            setGameNote2(newRandom1 + 2 - 12);
            setGameNote3(newRandom1 + 2 + 1 - 12);
            setGameNote4(newRandom1 + 2 + 1 + 2 - 12);
            setGameNote5(newRandom1 + 2 + 1 + 2 + 2 - 12);
            setGameNote6(newRandom1 + 2 + 1 + 2 + 2 + 1 - 12);
            setGameNote7(newRandom1 + 2 + 1 + 2 + 2 + 1 + 2 - 12);
        } else if (newRandom1 + 2 + 1 > 12) {
            setGameNote2(newRandom1 + 2);
            setGameNote3(newRandom1 + 2 + 1 - 12);
            setGameNote4(newRandom1 + 2 + 1 + 2 - 12);
            setGameNote5(newRandom1 + 2 + 1 + 2 + 2 - 12);
            setGameNote6(newRandom1 + 2 + 1 + 2 + 2 + 1 - 12);
            setGameNote7(newRandom1 + 2 + 1 + 2 + 2 + 1 + 2 - 12);
        } else if (newRandom1 + 2 + 1 + 2 > 12) {
            setGameNote2(newRandom1 + 2);
            setGameNote3(newRandom1 + 2 + 1);
            setGameNote4(newRandom1 + 2 + 1 + 2 - 12);
            setGameNote5(newRandom1 + 2 + 1 + 2 + 2 - 12);
            setGameNote6(newRandom1 + 2 + 1 + 2 + 2 + 1 - 12);
            setGameNote7(newRandom1 + 2 + 1 + 2 + 2 + 1 + 2 - 12);
        } else if (newRandom1 + 2 + 1 + 2 + 2 > 12) {
            setGameNote2(newRandom1 + 2);
            setGameNote3(newRandom1 + 2 + 1);
            setGameNote4(newRandom1 + 2 + 1 + 2);
            setGameNote5(newRandom1 + 2 + 1 + 2 + 2 - 12);
            setGameNote6(newRandom1 + 2 + 1 + 2 + 2 + 1 - 12);
            setGameNote7(newRandom1 + 2 + 1 + 2 + 2 + 1 + 2 - 12);
        } else if (newRandom1 + 2 + 1 + 2 + 2 + 1 > 12) {
            setGameNote2(newRandom1 + 2);
            setGameNote3(newRandom1 + 2 + 1);
            setGameNote4(newRandom1 + 2 + 1 + 2);
            setGameNote5(newRandom1 + 2 + 1 + 2 + 2);
            setGameNote6(newRandom1 + 2 + 1 + 2 + 2 + 1 - 12);
            setGameNote7(newRandom1 + 2 + 1 + 2 + 2 + 1 + 2 - 12);
        } else if (newRandom1 + 2 + 1 + 2 + 2 + 1 + 2 > 12) {
            setGameNote2(newRandom1 + 2);
            setGameNote3(newRandom1 + 2 + 1);
            setGameNote4(newRandom1 + 2 + 1 + 2);
            setGameNote5(newRandom1 + 2 + 1 + 2 + 2);
            setGameNote6(newRandom1 + 2 + 1 + 2 + 2 + 1);
            setGameNote7(newRandom1 + 2 + 1 + 2 + 2 + 1 + 2 - 12);
        } else {
            setGameNote2(newRandom1 + 2);
            setGameNote3(newRandom1 + 2 + 1);
            setGameNote4(newRandom1 + 2 + 1 + 2);
            setGameNote5(newRandom1 + 2 + 1 + 2 + 2);
            setGameNote6(newRandom1 + 2 + 1 + 2 + 2 + 1);
            setGameNote7(newRandom1 + 2 + 1 + 2 + 2 + 1 + 2);
        }
        
    }
        

    startTimer();
    
    if (soundset) {
      playSound(newRandom1);
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
  
    const getNote = (a) => {
      const notes = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
      return notes[a - 1];
    };
    const getColor = (a) => {
      const colors = ['#00ff00', '#00ff7f', '#00ffff', '#007fff', '#0000ff', '#7f00ff', '#ff00ff', '#ff0080', '#ff0000', '#ff7f00', '#ffff00', '#7fff00'];
      return colors[a - 1];
    };

    const getchord = (a) => {
      const chords = ['Major', 'Minor', 'Diminished', 'Major 7', 'Minor 7', 'Dominant 7', 'm7b5'];
      return chords[a - 1];
    };




    useEffect(() => {

      if(!noteSet) {
        setDisplayGameNote("?");
      } else if (gameNote1 === 1) {
        setDisplayGameNote("A");
      } else if (gameNote1 === 2) {
        setDisplayGameNote("A#/Bb");
      } else if (gameNote1 === 3) {
        setDisplayGameNote("B");
      } else if (gameNote1 === 4) {
        setDisplayGameNote("C");
      } else if (gameNote1 === 5) {
        setDisplayGameNote("C#/Db");
      } else if (gameNote1 === 6) {
        setDisplayGameNote("D");
      } else if (gameNote1 === 7) {
        setDisplayGameNote("D#/Eb");
      } else if (gameNote1 === 8) {
        setDisplayGameNote("E");
      } else if (gameNote1 === 9) {
        setDisplayGameNote("F");
      } else if (gameNote1 === 10) {
        setDisplayGameNote("F#/Gb");
      } else if (gameNote1 === 11) {
        setDisplayGameNote("G");
      } else if (gameNote1 === 12) {
        setDisplayGameNote("G#/Ab");
      }

      if (basicChord === 1) {
        setDisplayGameScale("Natural");
      } else if (basicChord === 2) {
        setDisplayGameScale("Minor");}

      if (askPosition === 1) {
        setdisplayAskposition("I");
      } else if (askPosition === 2) {
        setdisplayAskposition("II");
      } else if (askPosition === 3) {
        setdisplayAskposition("III");
      } else if (askPosition === 4) {
        setdisplayAskposition("IV");
      } else if (askPosition === 5) {
        setdisplayAskposition("V");
      } else if (askPosition === 6) {
        setdisplayAskposition("VI");
      } else if (askPosition === 7) {
        setdisplayAskposition("VII");
      }

      if (chordType === 1) {
        setDisplayChordType("Triad");
      } else if (chordType === 2) {
        setDisplayChordType("Seventh");}

       
    }, [gameNote1]);




    function NotmainButton(a) {

      if (flag === false && flag3 === false) {
        if (a === positionasnwer) {
          setChosenNote1(a);
          setflag(true)
          setResult(`${getNote(a)} root is correct`)
          endgame(a)
        } else {
          setResult("Incorrect root")
          vibrate()
        }
      }
    }

    function endgame(a) {
      if (a === positionasnwer && chosenChord === chordAsnwer)
      {
        setflag3(true)
        if (user) {
          setHarmonyTime(prevState => prevState + timer);
          setHarmonyPlays(prevState => prevState + 1);
          save(parseFloat(harmonyTime) + timer, parseFloat(harmonyPlays) + 1);
        }
        stopTimer();
      }
    }


    function NotmainButton2(a) {
      if (flag2 === false && flag3 === false) {
        if (a === chordAsnwer) {
          setChosenChord(a);
          setflag2(true)
          setResult2(`${getchord(a)} is correct`)
          endgame2(a)
        } else {
          setResult2("Incorrect chord")
          vibrate()
        }
      }
    }

    function endgame2(a) {
      if (chosenNote1 === positionasnwer && a === chordAsnwer)
      {
        setflag3(true)
        if (user) {
          setHarmonyTime(prevState => prevState + timer);
          setHarmonyPlays(prevState => prevState + 1);
          save(parseFloat(harmonyTime) + timer, parseFloat(harmonyPlays) + 1);
        }
        stopTimer();
      }
    }


      const save = async (updatedNoteTime, updatedNotePlays) => {
        try {
          await AsyncStorage.setItem("setHarmonyTime", updatedNoteTime.toString());
          await AsyncStorage.setItem("setHarmonyPlays", updatedNotePlays.toString());
        } catch (err) {
          alert(err);
        }
      };
  
      useFocusEffect(
        React.useCallback(() => {
  
          setTimer(0);
          setflag(false)
          setflag2(false)
          setflag3(false)
          return () => {
            
          };
        }, [])
      )

      return (
      <View style={styles.main}>

      <View style={styles.mainDisplay}>
        <View style={styles.timerDisplay}>
          <Text style={styles.timer}>Harmony{'\n'} {timer > 0 ? `Timer: ${timer}` : null}</Text>
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
            <Text style={styles.mainButtonText}>{displayGameNote ? displayGameNote : "Start"}{'\n'}{displayGameScale}{'\n'}{displayAskPosition}{'\n'}{displaychordType}</Text>
          </TouchableOpacity>
        </View>
      </View>
  
  
      <View style={styles.builder}>
        <View style={styles.resultgame}>
          <Text style={styles.resultgameText}>{result}{'\n'}{result2}</Text>
        </View>
  
        {chordType? <>
       
          {chordType === 1 ?
          <View  style={styles.built}>
          <TouchableOpacity
            style={[styles.chordButton, { transform: [{ scale: chordButton1}] }]}
            onPress={() => {
              NotmainButton2(1)
            }}
            onPressIn={() => handlePressIn(chordButton1)}
            onPressOut={() => handlePressOut(chordButton1)}
          >
            <Text style={styles.chordButtonText}>Major</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chordButton, { transform: [{ scale: chordButton2}] }]}
            onPress={() => {
              NotmainButton2(2)
            }}
            onPressIn={() => handlePressIn(chordButton2)}
            onPressOut={() => handlePressOut(chordButton2)}
          >
            <Text style={styles.chordButtonText}>Minor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chordButton, { transform: [{ scale: chordButton3}] }]}
            onPress={() => {
              NotmainButton2(3)
            }}
            onPressIn={() => handlePressIn(chordButton3)}
            onPressOut={() => handlePressOut(chordButton3)}
          >
            <Text style={styles.chordButtonText}>Diminished</Text>
          </TouchableOpacity>
          </View>
         :
          <View style={styles.built}>
          <TouchableOpacity
            style={[styles.chord4Button, { transform: [{ scale: chordButton4}] }]}
            onPress={() => {
              NotmainButton2(4)
            }}
            onPressIn={() => handlePressIn(chordButton4)}
            onPressOut={() => handlePressOut(chordButton4)}
          >
            <Text style={styles.chord4ButtonText}>Major 7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chord4Button, { transform: [{ scale: chordButton5}] }]}
            onPress={() => {
              NotmainButton2(5)
            }}
            onPressIn={() => handlePressIn(chordButton5)}
            onPressOut={() => handlePressOut(chordButton5)}
          >
            <Text style={styles.chord4ButtonText}>Minor 7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chord4Button, { transform: [{ scale: chordButton6}] }]}
            onPress={() => {
              NotmainButton2(6)
            }}
            onPressIn={() => handlePressIn(chordButton6)}
            onPressOut={() => handlePressOut(chordButton6)}
          >
            <Text style={styles.chord4ButtonText}>Dominant 7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chord4Button, { transform: [{ scale: chordButton7}] }]}
            onPress={() => {
              NotmainButton2(7)
            }}
            onPressIn={() => handlePressIn(chordButton7)}
            onPressOut={() => handlePressOut(chordButton7)}
          >
            <Text style={styles.chord4ButtonText}>m7b5</Text>
          </TouchableOpacity>
          </View>}
          </> : <></> }


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

        {gameNote1 && soundset &&  (
        <TouchableOpacity
          style={[styles.clearButton, { transform: [{ scale: playSoundButtonEff}] }]}
          onPress={() => playSound(gameNote1,playSoundButtonEff)}
          onPressIn={() => handlePressIn(playSoundButtonEff)}
          onPressOut={() => handlePressOut(playSoundButtonEff)}
        >
          <Text style={styles.clearButtonText}>Play root again</Text>
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
    fontSize: 24,
    textAlign: 'center',   
  }, 
  builder:{
    flex: .10,

  },
  chordButton: {
    width: '25%',
    height: '65%',
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center'
  },  
  chordButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',   
  },
  chord4Button: {
    width: '22%',
    height: '65%',
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center'
  },  
  chord4ButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',   
  },
  resultgame:{
    flex: .50,
  },
  resultgameText:{
    color: 'white',
    fontSize: 15,
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
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    borderWidth: 1,
    borderBottomColor: 'white',
    width: '12%',
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
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center'
  },
  noteButtonText: {
    color: 'white',
    fontSize: 20,
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


export default PlayHarmony;
