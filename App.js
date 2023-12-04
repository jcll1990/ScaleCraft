import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']);

import HomeScreen from './Mscreens/HomeScreen.js';

  import Play from './Mscreens/game/Play.js';
    import PlayNotes from './Mscreens/game/playfolder/PlayNotes.js';
    import PlayNotesNumber from './Mscreens/game/playfolder/PlayNotesNumber.js';
    import PlayChords from './Mscreens/game/playfolder/PlayChords.js';
      import PlayChordsBasic from './Mscreens/game/playfolder/Chords/PlayChordsBasic.js';
      import PlayChordsIntermediate from './Mscreens/game/playfolder/Chords/PlayChordsIntermediate.js';
      
    import PlayScales from './Mscreens/game/playfolder/PlayScales.js';
      import PlayScalesBasic from './Mscreens/game/playfolder/Scales/PlayScalesBasic.js';
      import PlayScalesIntermediate from './Mscreens/game/playfolder/Scales/PlayScalesIntermediate.js';
      import PlayScalesAdvanced from './Mscreens/game/playfolder/Scales/PlayScalesAdvanced.js';
      import PlayScalesGreek from './Mscreens/game/playfolder/Scales/PlayScalesGreek.js';

    import PlayHarmony from './Mscreens/game/playfolder/PlayHarmony.js';

  import Learn from './Mscreens/learn/Learn.js';
    import LearnNotes from './Mscreens/learn/learnfolder/LearnNotes.js';
    import LearnChords from './Mscreens/learn/learnfolder/LearnChords.js';
    import LearnScales from './Mscreens/learn/learnfolder/LearnScales.js';
    import LearnHarmony from './Mscreens/learn/learnfolder/LearnHarmony.js';

import Statistics from './Mscreens/Statistics.js';
import Settings from './Mscreens/Settings.js';
import About from './Mscreens/About.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const pianoFilesStart = {
  '1': require('./assets/piano/1.mp3'),
  '2': require('./assets/piano/2.mp3'),
  '3': require('./assets/piano/3.mp3'),
  '4': require('./assets/piano/4.mp3'),
  '5': require('./assets/piano/5.mp3'),
  '6': require('./assets/piano/6.mp3'),
  '7': require('./assets/piano/7.mp3'),
  '8': require('./assets/piano/8.mp3'),
  '9': require('./assets/piano/9.mp3'),
  '10': require('./assets/piano/10.mp3'),
  '11': require('./assets/piano/11.mp3'),
  '12': require('./assets/piano/12.mp3'),
};



const SlideTransition = {
  cardStyleInterpolator: ({ current, next, layouts }) => {
    const translateX = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.width, 0],
    });

    const opacity = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1],
    });

    const slideFromRight = { transform: [{ translateX }] };
    const lastScreenSlide = next
      ? {
          transform: [
            {
              translateX: next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -layouts.screen.width],
              }),
            },
          ],
        }
      : {};

    return {
      cardStyle: {
        ...slideFromRight,
        ...lastScreenSlide,
        backgroundColor: 'rgba(0, 0, 0, 1)', // Adjust the alpha value for transparency
        opacity,
      },
    };
  },
};

const HomeStack = ({ 
  user, setUser, 
  soundFiles,
  soundset,
  noteSet,
  endlessMode, 

  noteTime, notePlays, setNoteTime, setNotePlays, 
  noteNumbTime, noteNumbPlays, setNoteNumbTime, setNoteNumbPlays,
  chordBasicTime, chordBasicPlays, setChordBasicTime, setChordBasicPlays,
  chordIntermediateTime, chordIntermediatePlays, setChordIntermediateTime, setChordIntermediatePlays, 
  scalesBasicTime, scalesBasicPlays, setScalesBasicTime, setScalesBasicPlays, 
  scalesIntermediateTime, scalesIntermediatePlays, setScalesIntermediateTime, setScalesIntermediatePlays, 
  scalesAdvancedTime, scalesAdvancedPlays, setScalesAdvancedTime, setScalesAdvancedPlays,
  scalesGreekTime, scalesGreekPlays, setScalesGreekTime, setScalesGreekPlays,
  harmonyTime, harmonyPlays, setHarmonyTime, setHarmonyPlays
  }) => {
  
  const screenProps = { 
    user, setUser, 
    soundFiles,
    soundset,
    noteSet, 
    endlessMode,
  
    noteTime, notePlays, setNoteTime, setNotePlays, 
    noteNumbTime, noteNumbPlays, setNoteNumbTime, setNoteNumbPlays,
    chordBasicTime, chordBasicPlays, setChordBasicTime, setChordBasicPlays,
    chordIntermediateTime, chordIntermediatePlays, setChordIntermediateTime, setChordIntermediatePlays, 
    scalesBasicTime, scalesBasicPlays, setScalesBasicTime, setScalesBasicPlays, 
    scalesIntermediateTime, scalesIntermediatePlays, setScalesIntermediateTime, setScalesIntermediatePlays, 
    scalesAdvancedTime, scalesAdvancedPlays, setScalesAdvancedTime, setScalesAdvancedPlays,
    scalesGreekTime, scalesGreekPlays, setScalesGreekTime, setScalesGreekPlays,
    harmonyTime, harmonyPlays, setHarmonyTime, setHarmonyPlays 
    };
  return (
  <Stack.Navigator
  
    screenOptions={{
      animationEnabled: true,
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      ...SlideTransition,
    }}
  >
      <Stack.Screen name="HomeScreen" options={{ title: 'Home' }}>
        {(props) =>(<HomeScreen {...props} {...screenProps}/>)}
      </Stack.Screen>
  
      <Stack.Screen name="Play">
        {(props) => <Play {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayNotes">
        {(props) => <PlayNotes {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayNotesNumber">
        {(props) => <PlayNotesNumber {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayChords">
        {(props) => <PlayChords {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayChordsBasic">
        {(props) => <PlayChordsBasic {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayChordsIntermediate">
        {(props) => <PlayChordsIntermediate {...props} {...screenProps} />}
      </Stack.Screen>
      

      <Stack.Screen name="PlayScales">
        {(props) => <PlayScales {...props} {...screenProps} />}
      </Stack.Screen>


      <Stack.Screen name="PlayScalesBasic">
        {(props) => <PlayScalesBasic {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayScalesIntermediate">
        {(props) => <PlayScalesIntermediate {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayScalesAdvanced">
        {(props) => <PlayScalesAdvanced {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayScalesGreek">
        {(props) => <PlayScalesGreek {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="PlayHarmony">
        {(props) => <PlayHarmony {...props} {...screenProps} />}
      </Stack.Screen>




      <Stack.Screen name="Learn">
        {(props) => <Learn {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="LearnNotes">
        {(props) => <LearnNotes {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="LearnChords">
        {(props) => <LearnChords {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="LearnScales">
        {(props) => <LearnScales {...props} {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="LearnHarmony">
        {(props) => <LearnHarmony {...props} {...screenProps} />}
      </Stack.Screen>

    </Stack.Navigator>
  );
}  




const App = () => {
  const [user, setUser] =useState()
  const [instrument, setInstrument] = useState("Piano");
  const [soundFiles, setSoundFile] = useState(pianoFilesStart)
  const [soundset, setSoundSet] = useState(true)
  const [noteSet, setNoteSet] = useState(true)
  const [endlessMode, setEndlessMode] = useState(false)

  const [noteTime, setNoteTime] = useState(0)
  const [notePlays, setNotePlays] = useState(0)

  const [noteNumbTime, setNoteNumbTime] = useState(0)
  const [noteNumbPlays, setNoteNumbPlays] = useState(0)


  const [chordBasicTime, setChordBasicTime] = useState(0)
  const [chordBasicPlays, setChordBasicPlays] = useState(0)

  const [chordIntermediateTime, setChordIntermediateTime] = useState(0)
  const [chordIntermediatePlays, setChordIntermediatePlays] = useState(0)

  const [scalesBasicTime, setScalesBasicTime] = useState(0)
  const [scalesBasicPlays, setScalesBasicPlays] = useState(0)

  const [scalesIntermediateTime, setScalesIntermediateTime] = useState(0)
  const [scalesIntermediatePlays, setScalesIntermediatePlays] = useState(0)

  const [scalesAdvancedTime, setScalesAdvancedTime] = useState(0)
  const [scalesAdvancedPlays, setScalesAdvancedPlays] = useState(0)

  const [scalesGreekTime, setScalesGreekTime] = useState(0)
  const [scalesGreekPlays, setScalesGreekPlays] = useState(0)

  const [harmonyTime, setHarmonyTime] = useState(0)
  const [harmonyPlays, setHarmonyPlays] = useState(0)
  



  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor  : "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarLabelStyle:{fontSize:12,fontWeight:"bold"},
          tabBarStyle: [{display:"flex"},null]
        }}
      >
        <Tab.Screen name="Home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" style={[styles.tabBarIcon, { color, fontSize: size }]} />),}}>
          {() => <HomeStack 

          user = {user}
          setUser = {setUser}
          soundFiles={soundFiles}  
          soundset= {soundset}
          noteSet = {noteSet}
          endlessMode = {endlessMode}


          noteTime = {noteTime}
          notePlays = {notePlays}
          setNoteTime ={setNoteTime}
          setNotePlays ={setNotePlays}

          noteNumbTime = {noteNumbTime}
          noteNumbPlays = {noteNumbPlays}
          setNoteNumbTime = {setNoteNumbTime}
          setNoteNumbPlays = {setNoteNumbPlays}


          chordBasicTime = {chordBasicTime}
          chordBasicPlays = {chordBasicPlays}
          setChordBasicTime ={setChordBasicTime}
          setChordBasicPlays ={setChordBasicPlays}

          chordIntermediateTime = {chordIntermediateTime}
          chordIntermediatePlays ={chordIntermediatePlays}
          setChordIntermediateTime ={setChordIntermediateTime}
          setChordIntermediatePlays ={setChordIntermediatePlays}
          

          scalesBasicTime = {scalesBasicTime}
          scalesBasicPlays = {scalesBasicPlays}
          setScalesBasicTime ={setScalesBasicTime}
          setScalesBasicPlays ={setScalesBasicPlays}

          scalesIntermediateTime = {scalesIntermediateTime}
          scalesIntermediatePlays = {scalesIntermediatePlays}
          setScalesIntermediateTime ={setScalesIntermediateTime}
          setScalesIntermediatePlays ={setScalesIntermediatePlays}

          scalesAdvancedTime = {scalesAdvancedTime}
          scalesAdvancedPlays = {scalesAdvancedPlays}
          setScalesAdvancedTime ={setScalesAdvancedTime}
          setScalesAdvancedPlays ={setScalesAdvancedPlays}

          scalesGreekTime = {scalesGreekTime}
          scalesGreekPlays = {scalesGreekPlays}
          setScalesGreekTime = {setScalesGreekTime}
          setScalesGreekPlays = {setScalesGreekPlays}


          harmonyTime = {harmonyTime}
          harmonyPlays = {harmonyPlays}
          setHarmonyTime = {setHarmonyTime}
          setHarmonyPlays = {setHarmonyPlays}


          />}
        </Tab.Screen>

        <Tab.Screen name="Statistics" 
          options={{ 
            headerShown: false,           
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="stats-chart-outline" style={[styles.tabBarIcon, { color, fontSize: size }]} />),}}>
              {() => <Statistics 

              user = {user}
              noteTime = {noteTime}
              notePlays = {notePlays}

              noteNumbTime = {noteNumbTime}
              noteNumbPlays = {noteNumbPlays}

              chordBasicTime = {chordBasicTime}
              chordBasicPlays = {chordBasicPlays}

              chordIntermediateTime = {chordIntermediateTime}
              chordIntermediatePlays ={chordIntermediatePlays}


              scalesBasicTime = {scalesBasicTime}
              scalesBasicPlays = {scalesBasicPlays}

              scalesIntermediateTime = {scalesIntermediateTime}
              scalesIntermediatePlays = {scalesIntermediatePlays}

              scalesAdvancedTime = {scalesAdvancedTime}
              scalesAdvancedPlays = {scalesAdvancedPlays}

              scalesGreekTime = {scalesGreekTime}
              scalesGreekPlays = {scalesGreekPlays}

              harmonyTime = {harmonyTime}
              harmonyPlays = {harmonyPlays}

              />}
        </Tab.Screen>

        <Tab.Screen name="Settings"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="options-outline" style={[styles.tabBarIcon, { color, fontSize: size }]} />),}}>
          {() => <Settings 

          user = {user}
          setUser = {setUser}
          instrument ={instrument} 
          setInstrument={setInstrument} 
          soundset= {soundset}
          setSoundSet = {setSoundSet}
          noteSet = {noteSet}
          setNoteSet = {setNoteSet}
          setSoundFile={setSoundFile} 
          endlessMode = {endlessMode}
          setEndlessMode = {setEndlessMode}
          

          noteTime = {noteTime}
          notePlays = {notePlays}
          setNoteTime ={setNoteTime}
          setNotePlays ={setNotePlays}

          setNoteNumbTime = {setNoteNumbTime}
          setNoteNumbPlays = {setNoteNumbPlays}
          noteNumbTime = {noteNumbTime}
          noteNumbPlays = {noteNumbPlays}

          setChordBasicTime ={setChordBasicTime}
          setChordBasicPlays ={setChordBasicPlays}
          chordBasicTime = {chordBasicTime}
          chordBasicPlays = {chordBasicPlays}

          setChordIntermediateTime ={setChordIntermediateTime}
          setChordIntermediatePlays ={setChordIntermediatePlays}
          chordIntermediateTime = {chordIntermediateTime}
          chordIntermediatePlays ={chordIntermediatePlays}


          setScalesBasicTime ={setScalesBasicTime}
          setScalesBasicPlays ={setScalesBasicPlays}
          scalesBasicTime = {scalesBasicTime}
          scalesBasicPlays = {scalesBasicPlays}

          setScalesIntermediateTime ={setScalesIntermediateTime}
          setScalesIntermediatePlays ={setScalesIntermediatePlays}
          scalesIntermediateTime = {scalesIntermediateTime}
          scalesIntermediatePlays = {scalesIntermediatePlays}

          setScalesAdvancedTime ={setScalesAdvancedTime}
          setScalesAdvancedPlays ={setScalesAdvancedPlays}
          scalesAdvancedTime = {scalesAdvancedTime}
          scalesAdvancedPlays = {scalesAdvancedPlays}

          scalesGreekTime = {scalesGreekTime}
          scalesGreekPlays = {scalesGreekPlays}
          setScalesGreekTime = {setScalesGreekTime}
          setScalesGreekPlays = {setScalesGreekPlays}

          harmonyTime = {harmonyTime}
          harmonyPlays = {harmonyPlays}
          setHarmonyTime = {setHarmonyTime}
          setHarmonyPlays = {setHarmonyPlays}


          />}
        </Tab.Screen>


        <Tab.Screen name="About" component={About} 
          options={{ headerShown: false,           
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" style={[styles.tabBarIcon, { color, fontSize: size }]} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

  headerStyle: {
    backgroundColor: 'black'
  }
});

export default App;
