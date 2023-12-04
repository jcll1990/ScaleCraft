import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const About = () => {
  return (
      <View style={styles.main}>
        <View style={styles.mainText}>
          <Text style={styles.appTitle}>ScaleCraft</Text>
          <Image source={require('../assets/scaleColors.jpg')} style={styles.image} />
          <Text style={styles.appTitle2}>Disclaimer</Text>
        </View>
  
        <ScrollView style={styles.scrollView}>
        <Text> {'\n\n'}</Text>
          <Text style={styles.appTitle4}>
          The ScaleCraft mobile app is provided for informational and educational purposes only. The content within the app is intended to assist users in learning music theory, specifically in relation to scales and chords.
          </Text>
          <Text> {'\n\n'}</Text>
          <Text style={styles.appTitle3}>
          Accuracy of Information:
          </Text>
          <Text style={styles.appTitle4}>
          While we make every effort to ensure the accuracy of the information provided, ScaleCraft does not guarantee the completeness, accuracy, reliability, or suitability of the content. Users are encouraged to independently verify any information and seek professional advice if needed.          
          </Text>
          <Text> {'\n\n'}</Text>
          <Text style={styles.appTitle3}>
          Use at Your Own Risk:
          </Text>
          <Text style={styles.appTitle4}>
          Users of the ScaleCraft app acknowledge that the use of the information and features within the app is at their own risk. ScaleCraft shall not be held responsible for any errors, omissions, or consequences arising from the use of the provided content.         
          </Text>
          <Text> {'\n\n'}</Text>
          <Text style={styles.appTitle3}>
          Intellectual Property:
          </Text>
          <Text style={styles.appTitle4}>
          All intellectual property rights related to the ScaleCraft app, including but not limited to text, images, and audio, are owned by ScaleCraft. Unauthorized use, reproduction, or distribution of the app's content is strictly prohibited.
          </Text>
          <Text> {'\n\n'}</Text>
          <Text style={styles.appTitle3}>
          Changes to Disclaimer:
          </Text>
          <Text style={styles.appTitle4}>
          ScaleCraft reserves the right to update or change this disclaimer at any time without prior notice. Users are encouraged to review this disclaimer regularly for any changes.
          </Text>
          <Text> {'\n'}</Text>
          <Text style={styles.appTitle4}>
          By using the ScaleCraft app, you agree to the terms outlined in this disclaimer.
          </Text>

        </ScrollView>
  
        <View style={styles.lastpart}>
          <Image source={require('../assets/scaleColors.jpg')} style={styles.image2} />
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
      flex: 0.67
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

export default About;
