import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const LearnHarmony = () => {
  return (
    <View style={styles.main}>
    <View style={styles.mainText}>
      <Text style={styles.appTitle}>ScaleCraft</Text>
      <Image source={require('../../../assets/scaleColors.jpg')} style={styles.image} />
      <Text style={styles.appTitle2}>Learning Harmony</Text>
    </View>

    <ScrollView style={styles.scrollView}>

      <Text style={styles.appTitle4}>
      Harmony is the art of blending different musical notes together to create a pleasant and unified sound. In the context of scales, particularly major and minor scales, harmony is often achieved through the use of triads — three-note chords, and seventh chords, which add an extra layer of richness to the musical tapestry.
      </Text>
      <Text></Text>
      <Text style={styles.appTitle4}>
        Choosing chords for each scale is easy!With 7 notes in the scale, we label them as:  
      </Text>
      <Text style={styles.appTitle3}>
      {'\u2022'}  I 
      </Text>
      <Text style={styles.appTitle3}>
      {'\u2022'}  II 
      </Text>
      <Text style={styles.appTitle3}>
      {'\u2022'}  III
      </Text>
      <Text style={styles.appTitle3}>
      {'\u2022'}  IV 
      </Text>
      <Text style={styles.appTitle3}>
      {'\u2022'}  V 
      </Text>
      <Text style={styles.appTitle3}>
      {'\u2022'}  VI
      </Text>
      <Text style={styles.appTitle3}>
      {'\u2022'}  VII
      </Text>
      <Text></Text>
      <Text style={styles.appTitle4}>
       Each position gets a chord assigned, using the note as the root. 
      </Text>
      <Text style={styles.appTitle4}>
       For each scale it will go like this: 
      </Text>
      <Text></Text>
      <Text style={styles.appTitle2}>
      Major Scale
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
      Triads:
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Major
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Minor
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Minor
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Major
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Major
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Minor
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Diminished
      </Text>

      <Text></Text>

      <Text style={styles.appTitle3}>
      Seventh chords:
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Major 7
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Minor 7
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Minor 7
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Major 7
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Dominant 7 (7)
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Minor 7
      </Text>
      <Text style={styles.appTitle4}>
      {'\u2022'} Half-Diminished 7 (m7b5)
      </Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.appTitle2}>
        Minor Scale
      </Text>
      <Text></Text>
      <Text style={styles.appTitle3}>
        Triads:
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Minor
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Diminished
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Major
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Minor
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Minor
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Major
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Major
      </Text>

      <Text></Text>

      <Text style={styles.appTitle3}>
        Seventh chords:
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Minor 7
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Half-Diminished 7 (m7b5)
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Major 7
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Minor 7
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Minor 7
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Major 7
      </Text>
      <Text style={styles.appTitle4}>
        {'\u2022'} Dominant 7 (7)
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
export default LearnHarmony;
