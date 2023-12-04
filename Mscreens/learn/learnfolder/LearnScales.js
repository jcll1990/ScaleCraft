import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,Dimensions  } from 'react-native';

const LearnScales = () => {



  
  return (
  <View style={styles.main}>
    <View style={styles.mainText}>
      <Text style={styles.appTitle}>ScaleCraft</Text>
      <Image source={require('../../../assets/scaleColors.jpg')} style={styles.image} />
      <Text style={styles.appTitle2}>Learning Scales</Text>
    </View>

    <ScrollView style={styles.scrollView}>

   
      <Text style={styles.appTitle4}>
      When you're crafting a song, you get to pick from the 12 available notes. This is where scales step into the creative dance!
      </Text>
      <Text></Text>
      <Text style={styles.appTitle4}>
      Scales are like the magical seven-note ingredients in the music kitchen, and the Natural scale is the star of the show. If you use these seven chosen notes to cook up chords and play melodies, your song will sound absolutely fantastic.
      </Text>
      <Text></Text>
      <Text style={styles.appTitle4}>
      Building scales is like following the same musical logic we used for crafting chords!
      </Text>
      <Text></Text>
      <Text style={styles.appTitle4}>
      Now, let's kick things off with the G Major Scale (aka: G Natural Scale):"
      </Text>
      <Text style={styles.appTitle6}></Text>
      <Text style={styles.appTitle6}>
      Remember: If the total surpasses 12, start counting from 1. This lets us craft diverse chords with these simple formulas, like a musical recipe! 🎶✨
      </Text>

      <Text></Text>
      <Text style={styles.appTitle3}>
      Major Scale (+2 +2 +1 +2 +2 +2 +1):
      </Text>
      <Text></Text>

      <View style={styles.examCont}>

        <View style={styles.step}>      
        <Text style={styles.appTitle5}>
        {'\u2022'} Start with G:
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 2 
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 2
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 1
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 2
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 2
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 2
        </Text>
        <Text style={styles.appTitle5}>
        {'\u2022'} Add 1
        </Text>

        </View>

        <View style={styles.stepnote}>
        <Text style={styles.appTitle5}>
        </Text>
        <Text style={styles.appTitle5}>
        G + 2 = A
        </Text>
        <Text style={styles.appTitle5}>
        A + 2 = B
        </Text>
        <Text style={styles.appTitle5}>
        B + 1 = C
        </Text>
        <Text style={styles.appTitle5}>
        C + 2 = D
        </Text>
        <Text style={styles.appTitle5}>
        D + 2 = E
        </Text>
        <Text style={styles.appTitle5}>
        E + 2 = F#/Gb
        </Text>
        <Text style={styles.appTitle5}>
        F#/Gb + 1 = G
        </Text>
        </View>

        <View style={styles.stepexplain}>
        <Text style={styles.appTitle5}>
        </Text>
        <Text style={styles.appTitle5}>
        (11 + 2 = 13)
        </Text>
        <Text style={styles.appTitle5}>
        (1 + 2 = 3)
        </Text>
        <Text style={styles.appTitle5}>
        (3 + 1 = 4)
        </Text>
        <Text style={styles.appTitle5}>
        (12 + 2  = 6)
        </Text>
        <Text style={styles.appTitle5}>
        (12 + 2  =  8)
        </Text>
        <Text style={styles.appTitle5}>
        (12 + 2 = 10)
        </Text>
        <Text style={styles.appTitle5}>
        (10 + 1 = 11)
        </Text>

        </View>

      </View>
      <Text></Text>
      <Text style={styles.appTitle5}>
      The G Natural Scale is : G, A, B, C, D, E, F#, G
      </Text>
      <Text></Text>
      <Text style={styles.appTitle6}>
      {'\u2022'}  We choose F# instead of Gb because G is the starting point (root) and we don't want to repeat it, even with a 'b' (flat) or '#' (sharp). This logic applies when creating chords based on scales too. {'\n'}
      </Text>
      <Text style={styles.appTitle6}>
      {'\u2022'}  The final step in a scales formula always brings you back to the starting note.{'\n'}
      </Text>

      <Text style={styles.appTitle4}>
      By applying the same logic, we can create more Scales!
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
        Minor Scale
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 1 + 2 + 2 + 1 + 2 + 2
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
        Pentatonic Scales! 🎶✨
      </Text>
      <Text></Text>

      <Text style={styles.appTitle4}>
      Pentatonic scales are like the 'Lite' version of natural or minor scales. With only five notes instead of seven, they create a streamlined melody toolkit, offering a simplified yet powerful sound. This musical gem is frequently embraced in the world of rock and roll, contributing to its signature energy and allure..
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
        Major Pentatonic Scale
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 2 + 3 + 2 + 3
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
        Minor Pentatonic Scale
      </Text>
      <Text style={styles.appTitle4}>
      + 3 + 2 + 2 + 3 + 2
      </Text>
      <Text></Text>


      <Text style={styles.appTitle4}>
      There are more scales that can add different sounds to your composition, like the Harmonic minor (Classical Music) or Melodic minor (Jazz) 🎶✨
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Harmonic minor
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 2 + 1 + 2 + 2 + 2 + 1
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Melodic minor
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 1 + 2 + 2 + 1 + 2 + 2
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
       The 7 greek modes
      </Text>
      <Text></Text>

      <Text style={styles.appTitle4}>
      Unlock the Greek modes, seven musical twists to enhance your melodies. Think of them as fresh starting points on the natural scale. If you understand the natural and minor scales, you've already grasped two! These modes inject a touch of enchantment into your musical creations
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Ionian
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 2 + 1 + 2 + 2 + 2 + 1
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Dorian 
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 1 + 2 + 2 + 2 + 1 + 2
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Phygian
      </Text>
      <Text style={styles.appTitle4}>
      + 1 + 2 + 2 + 2 + 1 + 2 + 2
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Lydian
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 2 + 2 + 1 + 2 + 2 + 1
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Mixolydian
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 2 + 1 + 2 + 2 + 1 + 2
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Aeolian 
      </Text>
      <Text style={styles.appTitle4}>
      + 2 + 1 + 2 + 2 + 1 + 2 + 2
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Locrian 
      </Text>
      <Text style={styles.appTitle4}>
      + 1 + 2 + 2 + 1 + 2 + 2 + 2 
      </Text>
      <Text></Text>

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
export default LearnScales;
