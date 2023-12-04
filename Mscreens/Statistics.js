import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Statistics = ({
  user, 

  noteTime, notePlays,
  noteNumbPlays,noteNumbTime, 

  chordBasicTime, chordBasicPlays,
  chordIntermediateTime, chordIntermediatePlays, 

  scalesBasicTime, scalesBasicPlays, 
  scalesIntermediateTime, scalesIntermediatePlays, 
  scalesAdvancedTime, scalesAdvancedPlays,
  scalesGreekTime, scalesGreekPlays,

  harmonyTime, harmonyPlays


}) => {
  return (
    <View style={styles.main}>


      <View style={styles.mainText}>
        <Text style={styles.appTitle}>ScaleCraft</Text>
          <Image
          source={require('../assets/scaleColors.jpg')}

          style={styles.image}
          />
        <Text style={styles.appTitle2}>Statistics</Text>
      </View>





      <View style={styles.stats}>
      { user ? 
      <View>
          <Text style={styles.text2}>    Notes average time: </Text>
          <Text></Text>
          <Text style={styles.text}>        Notes: {notePlays >= 1 ? `${(noteTime / notePlays).toFixed(2)} seg` : "-"}</Text>
          <Text style={styles.text}>        Notes (by number): {noteNumbPlays >= 1 ? `${(noteNumbTime / noteNumbPlays).toFixed(2)} seg` : "-"}</Text>
          <Text></Text>
  
        
          <Text style={styles.text2}>    Chords average time:</Text>
          <Text></Text>
          <Text style={styles.text}>        Triad chord: {chordBasicPlays >= 1 ? `${(chordBasicTime / chordBasicPlays).toFixed(2)} seg` : "-"}</Text>
          <Text style={styles.text}>        Seventh chord: {chordIntermediatePlays >= 1 ? `${(chordIntermediateTime / chordIntermediatePlays).toFixed(2)} seg` : "-"}</Text>
          <Text></Text>

        
          <Text style={styles.text2}>    Scales average time:</Text>
          <Text></Text>
          <Text style={styles.text}>        Pentatonic scale: {scalesBasicPlays >= 1 ? `${(scalesBasicTime / scalesBasicPlays).toFixed(2)} seg` : "-"}</Text>
          <Text style={styles.text}>        Natural scale: {scalesIntermediatePlays >= 1 ? `${(scalesIntermediateTime / scalesIntermediatePlays).toFixed(2)} seg` : "-"}</Text>
          <Text style={styles.text}>        Harmonic/Melodic scale: {scalesAdvancedPlays >= 1 ? `${(scalesAdvancedTime / scalesAdvancedPlays).toFixed(2)} seg` : "-"}</Text>
          <Text style={styles.text}>        Greek modes: {scalesGreekPlays >= 1 ? `${(scalesGreekTime / scalesGreekPlays).toFixed(2)} seg` : "-"}</Text>
          <Text></Text>
 
        
          <Text style={styles.text2}>    Harmony average time: {harmonyPlays >= 1 ? `${(harmonyTime / harmonyPlays).toFixed(2)} seg` : "-"}</Text>
 
        </View>


        : <Text style={styles.text3}>Create a user in settings to save your progress</Text>}

      </View>

      <View style={styles.empty}>
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
  main: {
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
  stats: {
    flex: .69,
    backgroundColor: 'black',
  },
  text3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }, 
  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  }, 
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },  

  empty: {
    flex: .05,
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

export default Statistics;
