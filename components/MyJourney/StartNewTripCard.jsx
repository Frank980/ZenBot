//Previous start Journey Card

// import React, { useEffect, useRef, useState } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native';

// export default function StartNewTripCard({ onPress }) {
//     const scaleValue = useRef(new Animated.Value(1)).current;
//     const [typedText, setTypedText] = useState('');
//     const fullText = "What's stopping you? Set your goals and start your journey to success today!";

//     useEffect(() => {
//         // Typewriter animation for description text
//         let currentIndex = 0;
//         const typewriterEffect = () => {
//             if (currentIndex < fullText.length) {
//                 setTypedText((prev) => prev + fullText[currentIndex]);
//                 currentIndex++;
//                 setTimeout(typewriterEffect, 30); // Adjust speed of typing here
//             }
//         };

//         typewriterEffect();

//         // Bounce animation for card
//         const startAnimation = () => {
//             Animated.loop(
//                 Animated.sequence([
//                     Animated.timing(scaleValue, {
//                         toValue: 1.05,
//                         duration: 1000,
//                         useNativeDriver: true,
//                     }),
//                     Animated.timing(scaleValue, {
//                         toValue: 1,
//                         duration: 1000,
//                         useNativeDriver: true,
//                     }),
//                 ])
//             ).start();
//         };

//         startAnimation();
//     }, [fullText, scaleValue]);

//     return (
//         <TouchableOpacity onPress={onPress}>
//             <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
//                 <View style={styles.content}>
//                     <Text style={styles.title}>Start a New Journey</Text>
//                     <Text style={styles.description}>
//                         {typedText}
//                     </Text>
//                     <Text style={styles.buttonText}>Get Started</Text>
//                 </View>
//             </Animated.View>
//         </TouchableOpacity>
//     );
// }

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#1e1e1e', // Dark background for the card
//         padding: 20,
//         borderRadius: 10,
//         margin: 20,
//         marginTop: 40,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 3,
//     },
//     content: {
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color: '#FFD700', // Bright gold color to signify achievement and success
//         fontFamily: 'outfit-bold'
//     },
//     description: {
//         fontSize: 14,
//         color: '#f0f0f0', // Light gray for better readability on dark background
//         textAlign: 'center',
//         marginBottom: 20,
//         minHeight: 80, // To avoid UI shifting as text is typed
//         padding: 20,
//         fontFamily: 'outfit-semib'
//     },
//     buttonText: {
//         fontSize: 16,
//         color: '#FFD700', // Bright green to inspire action and energy
//         fontWeight: 'bold',
//         fontFamily: 'outfit-extrab'
//     },
// });

import React, {useContext, useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TextInput,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider"; // Importing Slider from the community package
import { CreateJourneyContext } from "./../../context/CreateJourneyContext";
import { useRouter } from 'expo-router';

export default function StartNewTripCard({ onPress }) {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [typedText, setTypedText] = useState("");
  const router = useRouter();

  const [description, setDescription] = useState("");
  const [stressLevel, setStressLevel] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [anxietyTimes, setAnxietyTimes] = useState(0);
  const [healthyLevel, setHealthyLevel] = useState(0);
  const [ynconstant, setYnconstant] = useState(0);
  const [physicalSympt, setPhysicalSympt] = useState("");
  const [medications, setMedications] = useState("");
  const [Occasion, setOccasion] = useState("");
  const fullText =
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt";

    //User Data:

  const { userData, setUserData } = useContext(CreateJourneyContext);

  useEffect(() => {
    setUserData({ ...userData, desc: description });
  }, [description]);

  useEffect(() => {
    setUserData({ ...userData, stress: stressLevel });
  }, [stressLevel]);

  useEffect(() => {
    setUserData({ ...userData, sleep: sleepHours });
  }, [sleepHours]);
  
  useEffect(() => {
    setUserData({ ...userData, anti: anxietyTimes });
  }, [anxietyTimes]);

  useEffect(() => {
    setUserData({ ...userData, sint: healthyLevel });
  }, [healthyLevel]);

  useEffect(() => {
    setUserData({ ...userData, thoughts: ynconstant });
  }, [ynconstant]);

  useEffect(() => {
    setUserData({ ...userData, psymp: physicalSympt });
  }, [physicalSympt]);

  useEffect(() => {
    setUserData({ ...userData, med:medications });
  }, [medications]);

  useEffect(() => {
    setUserData({ ...userData, occ:Occasion});
  }, [Occasion]);




  useEffect(() => {
    console.log(userData);
  }, [userData]);


  //End of user data 

  useEffect(() => {
    // Typewriter animation for description text
    let currentIndex = 0;
    const typewriterEffect = () => {
      if (currentIndex < fullText.length) {
        setTypedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
        setTimeout(typewriterEffect, 30); // Adjust speed of typing here
      }
    };

    typewriterEffect();

    // Bounce animation for card
    // const startAnimation = () => {
    //   Animated.loop(
    //     Animated.sequence([
    //       Animated.timing(scaleValue, {
    //         toValue: 1.05,
    //         duration: 1000,
    //         useNativeDriver: true,
    //       }),
    //       Animated.timing(scaleValue, {
    //         toValue: 1,
    //         duration: 1000,
    //         useNativeDriver: true,
    //       }),
    //     ])
    //   ).start();
    // };

    // startAnimation();
  }, [fullText, scaleValue]);

  return (
    <ScrollView>
      <Animated.View
          style={[styles.card, { transform: [{ scale: scaleValue }] }]}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Start a New Journey</Text>
            <Text style={styles.description}>{typedText}</Text>
          </View>
        </Animated.View>

      <Text
        style={{
          color: "white",
          fontFamily: "Robo",
          fontSize: 18,
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          paddingHorizontal: 50,
        }}
      >
        Let me know more about you buddy!
      </Text>
      <View style={styles.Belowcard}>
        <Text
          style={{
            color: "white",
            fontFamily: "Robo",
            fontSize: 14,
            paddingBottom: 10,
            paddingLeft: 5,
          }}
        >
          Please share anything you'd like to discuss about your worries.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a short description (up to 100 words)"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Stress Level (Scale 0-9): {stressLevel}</Text>
        <Text style={styles.label}>0 - Low | 9 - High</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={9}
          step={1}
          value={stressLevel}
          onValueChange={setStressLevel}
          minimumTrackTintColor="#ADEAE6"
          maximumTrackTintColor="#ADEAE6"
          thumbTintColor="#ADEAE6"
        />

        <Text style={styles.label}>Hours of Sleep You Got Yesterday: {sleepHours}</Text>
        <Text style={styles.label}>Bar is from 0 to 12</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={12}
          step={1}
          value={sleepHours}
          onValueChange={setSleepHours}
          minimumTrackTintColor="#ADEAE6"
          maximumTrackTintColor="#ADEAE6"
          thumbTintColor="#ADEAE6"
        />

        <Text style={styles.label}>How Many Times Did You Experience Anxiety Yesterday? {anxietyTimes}</Text>
        <Text style={styles.label}>Bar is from 0 to 10</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={anxietyTimes}
          onValueChange={setAnxietyTimes}
          minimumTrackTintColor="#ADEAE6"
          maximumTrackTintColor="#ADEAE6"
          thumbTintColor="#ADEAE6"
        />

        <Text style={styles.label}>
        Quality of Social Engagements Yesterday: {healthyLevel}
        </Text>
        <Text style={styles.label}>Bar is from 0 to 9</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={9}
          step={1}
          value={healthyLevel}
          onValueChange={setHealthyLevel}
          minimumTrackTintColor="#ADEAE6"
          maximumTrackTintColor="#ADEAE6"
          thumbTintColor="#ADEAE6"
        />

        <Text style={styles.label}>
        Inconsistencies in Your Thoughts: {ynconstant}
        </Text>
        <Text style={styles.label}>Bar is from 0 to 9</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={9}
          step={1}
          value={ynconstant}
          onValueChange={setYnconstant}
          minimumTrackTintColor="#ADEAE6"
          maximumTrackTintColor="#ADEAE6"
          thumbTintColor="#ADEAE6"
        />

        <Text
          style={{
            color: "white",
            fontFamily: "Robo",
            fontSize: 14,
            paddingBottom: 10,
            paddingLeft: 5,
          }}
        >
          Were there any physical symptoms you experienced yesterday? Please describe.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="(e.g., headache)"
          value={physicalSympt}
          multiline
          onChangeText={setPhysicalSympt}
          numberOfLines={2}
        />

        <Text
          style={{
            color: "white",
            fontFamily: "Robo",
            fontSize: 14,
            paddingBottom: 10,
            paddingLeft: 5,
          }}
        >
          Do you have any ongoing mental health medications? If so, please specify.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Any medications you're using"
          value={medications}
          multiline
          onChangeText={setMedications}
          numberOfLines={2}
        />

        <Text
          style={{
            color: "white",
            fontFamily: "Robo",
            fontSize: 14,
            paddingBottom: 10,
            paddingLeft: 5,
          }}
        >
          Is there an upcoming occasion causing you additional anxiety?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="(Ex: Seminar, Exam, Interview...)"
          value={Occasion}
          multiline
          onChangeText={setOccasion}
          numberOfLines={2}
        />
      </View>
      <View
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.push('/create-journey/generateJourney')} style={styles.createAccountButton} >
          <Text style={styles.createAccountText}>Generate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e", // Dark background for the card
    padding: 20,
    borderRadius: 10,
    margin: 20,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  Belowcard: {
    backgroundColor: "#1e1e1e", // Dark background for the card
    padding: 20,
    borderRadius: 10,
    margin: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFD700", // Bright gold color to signify achievement and success
    fontFamily: "outfit-bold",
  },
  description: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    minHeight: 80, // To avoid UI shifting as text is typed
    padding: 20,
    fontFamily: "outfit-semib",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: "blue",
    width: "100%",
    fontFamily: "Robo",
    height: 90,
  },
  label: {
    color: "#ADEAE6",
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "Robo",
  },
  slider: {
    width: "100%",
    height: 60,
    marginBottom: 20,
  },
  createAccountButton: {
    paddingVertical: 15,
    marginTop: 15,
    borderRadius: 10,
    borderColor: "#ADEAE6",
    borderWidth: 1,
    alignItems: "center",
    width: 200,
  },
  createAccountText: {
    color: "#ADEAE6",
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: "Robo",
  },
});
