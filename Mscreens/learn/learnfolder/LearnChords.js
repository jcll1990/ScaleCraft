import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,Dimensions  } from 'react-native';

const LearnChords = () => {



  
  return (
  <View style={styles.main}>
    <View style={styles.mainText}>
      <Text style={styles.appTitle}>ScaleCraft</Text>
      <Image source={require('../../../assets/scaleColors.jpg')} style={styles.image} />
      <Text style={styles.appTitle2}>Learning Chords</Text>
    </View>

    <ScrollView style={styles.scrollView}>

   
      <Text style={styles.appTitle4}>
      When you combine three or more notes, you create chords!
      </Text>
         
      <Text style={styles.appTitle4}>
      Each of these chords can be built using a straightforward formula.
      </Text>
      <Text></Text>

      <Text style={styles.appTitle6}>
      Remember: If the total surpasses 12, start counting from 1. This lets us craft diverse chords with these simple formulas, like a musical recipe! 🎶✨
      </Text>
      <Text></Text>

      <Text style={styles.appTitle4}>
      Let's break down how to create chords using the numeric representation of notes, we can start by building the E major chord:
      </Text>
      
      <Text></Text>
      <Text style={styles.appTitle3}>
      Major Chord (+ 4 + 3):
      </Text>


      <View style={styles.examCont}>

        <View style={styles.step}>      
        <Text style={styles.appTitle5}>
        {'\u2022'} Start with E:
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 4 
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 3
        </Text>
        </View>

        <View style={styles.stepnote}>
        <Text style={styles.appTitle5}>
        </Text>
        <Text style={styles.appTitle5}>
        E + 4 = G#/Ab
        </Text>
        <Text style={styles.appTitle5}>
        G#/Ab + 3 = B
        </Text>
        </View>

        <View style={styles.stepexplain}>
        <Text style={styles.appTitle5}>
        </Text>
        <Text style={styles.appTitle5}>
        (8 + 4 = 12)
        </Text>
        <Text style={styles.appTitle5}>
        (12 + 3 = 15)
        </Text>
        </View>

      </View>
      <Text></Text>
      <Text style={styles.appTitle5}>
      The E major chord is:   E, G#/Ab, B.
      </Text>
      <Text style={styles.appTitle6}>
      B = 15? Since 15 is higher than 12, we substract 12 and start again{'\n'}
      </Text>

      <Text style={styles.appTitle4}>
      By applying the same logic, we can create more chords!
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
        Minor Chord
      </Text>
      <Text style={styles.appTitle4}>
       +  3  +  4
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
        Diminished Chord
      </Text>
      <Text style={styles.appTitle4}>
       +  3  +  3
      </Text>
      <Text></Text>
      <Text style={styles.appTitle4}>
      Enter the world of seventh chords, where musical flavors deepen with the addition of one more note to your triads. It's like adding an extra layer to enrich the taste of your chords.
      </Text>

      <Text></Text>
      <Text style={styles.appTitle3}>
        Major Seventh Chord (Maj7)
      </Text>
      <Text style={styles.appTitle4}>
       + 4  + 3  + 4
      </Text>

      <Text></Text>
      <Text style={styles.appTitle3}>
        Minor Seventh Chord (m7)
      </Text>
      <Text style={styles.appTitle4}>
       + 3  + 4  + 3
      </Text>

      <Text></Text>
      <Text style={styles.appTitle3}>
        Dominant Seventh Chord (7)
      </Text>
      <Text style={styles.appTitle4}>
       + 4  + 3  + 3
      </Text>

      <Text></Text>
      <Text style={styles.appTitle3}>
        Half-Diminished Seventh Chord (m7b5)
      </Text>
      <Text style={styles.appTitle4}>
       + 3  + 4  + 3
      </Text>
      <Text> {'\n\n'}</Text>
      <Text style={styles.appTitle4}>
      Now, let's dive into chord-building practice. After that, we'll explore scales, paving the way to the harmonious realm where everything seamlessly connects!
      </Text>

      <Text> {'\n\n'}</Text>

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
      fontSize: 13,
      paddingLeft: 20,
      paddingRight: 20
    },
    appTitle6: {
      color: 'white',
      fontSize: 10,
      paddingLeft: 20,
      paddingRight: 20
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
    examCont: {
      flexDirection: "row",
      width : "100%",
      justifyContent: "center",

    },
    step: {
      alignItems: "center",
      width: "33%"
    },
    stepnote: {
      alignItems: "center",
      width: "33%"
    },
    stepexplain: {
      alignItems: "center",
      width: "33%"
    },
  });
export default LearnChords;
