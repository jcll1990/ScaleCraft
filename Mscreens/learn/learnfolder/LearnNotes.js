import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,Dimensions  } from 'react-native';

const LearnNotes = () => {



  
  return (
  <View style={styles.main}>
    <View style={styles.mainText}>
      <Text style={styles.appTitle}>ScaleCraft</Text>
      <Image source={require('../../../assets/scaleColors.jpg')} style={styles.image} />
      <Text style={styles.appTitle2}>Learning Notes</Text>
    </View>

    <ScrollView style={styles.scrollView}>

      <Text style={styles.appTitle3}>
      Musical Notes
      </Text>
      <Text></Text>
      <Text style={styles.appTitle4}>
      In music, notes are like the ABCs of sound.
      </Text>
      <Text></Text>

      <Text style={styles.appTitle4}>
      Since they are 12, we can give each note a number. It's like a musical secret code! Here's how it could work:
      </Text>
      <Text></Text>
      
      <View style={styles.notesandnumbercont}>

        <View style={styles.notescont}>      
        <Text style={styles.appTitle5}>
        {'\u2022'} A 
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} A#/Bb   
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} B
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} C
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} C#/Db 
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} D   
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} D#/Eb
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} E
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} F 
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} F#/Gb   
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} G
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} G#/Ab
        </Text>
        </View>

        <View style={styles.numberscont}>
        <Text style={styles.appTitle5}>
        1 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        2 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        3 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        4 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        5 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        6 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        7 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        8 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        9 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        10 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        11 {'\u2022'}
        </Text>
        <Text style={styles.appTitle5}>
        12 {'\u2022'}
        </Text>
        </View>
      </View>

      <Text></Text>
      <Text></Text>
        <Text style={styles.appTitle4}>
        The space between one note and the next is like taking steps. We can move from note to note by adding 1.  🎵✨
        </Text>
      <Text> {'\n\n'}</Text>

      <Text style={styles.appTitle4}>
      Everything will connect once you reach Harmony! 
      </Text>
      <Text> {'\n\n'}</Text>
      <Text style={styles.appTitle4}>
        Now go and practice in "Play/Notes" 
      </Text>

    </ScrollView>

    <View style={styles.lastpart}>
      <Image source={require('../../../assets/scaleColors.jpg')} style={styles.image2} />
    </View>
  </View>
  );
};
  
  const styles = StyleSheet.create({
    main: {
      display: 'flex',
      flex: 1,
      backgroundColor: 'black',
    },
    mainText: {
      flex: 0.36,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollView: {
      flex: 0.67,
      paddingLeft: 15,
      paddingRight: 15
    },
    lastpart: {
      alignItems: 'center',
      backgroundColor: 'black',
      flex: 0.014,
    },
    appTitle: {
      color: 'white',
      fontSize: 52,
    },
    appTitle2: {
      color: 'white',
      fontSize: 32,
    },
    appTitle3: {
      color: 'white',
      fontSize: 20,
      fontWeight: "bold"
    },
    appTitle4: {
      color: 'white',
      fontSize: 15,
      paddingLeft: 10,
      paddingRight: 10
    },
    appTitle5: {
      color: 'white',
      fontSize: 15,
      alignContent: "center",
      justifyContent: "center",
      fontWeight: "bold"
    },

    notesandnumbercont: {
      flexDirection: "row",
      width : "100%",
      justifyContent: "center"
    },
    notescont: {
      alignItems: "center",
      width: "20%"
    },
    numberscont: {
      alignItems: "center",
      width: "20%"
    },
    image: {
      width: '70%',
      height: 10,
      resizeMode: 'contain',
    },
    image2: {
      width: '100%',
      resizeMode: 'stretch',
    },
  });
export default LearnNotes;
