// import { useRouter } from 'expo-router';
// import React, { useEffect, useRef } from 'react';
// import { Text, View, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';

// export default function Login() {
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(20)).current;

//   const router = useRouter();

//   useEffect(() => {
//     Animated.sequence([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, [fadeAnim, slideAnim]);

//   return (
//     <View style={styles.container}>
//       <Image 
//         style={styles.image} 
//         source={require('./../assets/images/login3.jpg')} 
//       />
//       <View style={styles.textContainer}>
//         <Text style={styles.mainText}>Your Mind, Your Routine</Text>
//         <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
//           <Text style={styles.subText}>
//             Quick, Simple, and <Text style={styles.highlightedText}>Personalized</Text>
//           </Text>
//           <Text style={styles.subText}>
//             Make Time for Mental Well-Being Every Day
//           </Text>
//         </Animated.View>
//       </View>

//       <TouchableOpacity onPress={()=>router.push('auth/sign-in')} style={styles.button}>
//           <Text style={styles.buttonText}>Start Your Journey!</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     opacity: 0.7,
//     position: 'absolute',
//   },
//   textContainer: {
//     width: 330,
//     alignSelf: 'center',
//     position: 'absolute',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.85)', // Light background behind text
//     borderRadius: 15,
//   },
//   mainText: {
//     fontFamily: 'outfit-bold',
//     fontSize: 26,
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 12,
//   },
//   subText: {
//     margin: 4,
//     fontFamily: 'outfit-semib',
//     margin: 10,
//     color: '#686',
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   highlightedText: {
//     color: '#FF6347', // Highlight text in a vibrant color
//   },
//   button: {
//     position: 'absolute', // Position button at the bottom
//     bottom: 80, // Adjust for space from the bottom
//     alignSelf: 'center', // Center the button horizontally
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     backgroundColor: 'black', // Black background
//     borderRadius: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//     fontFamily: 'outfit-bold',
//     textAlign: 'center',
//   },
// });


//Better transition 

import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { Text, View, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';

export default function Login() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const rotationAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const router = useRouter();
  // const { width, height } = Dimensions.get('window');


//   useFonts({
//     'outfit' : require('./../assets/fonts/Outfit-Regular.ttf'),
//     'outfit-black' : require('./../assets/fonts/Outfit-Black.ttf'),
//     'outfit-bold' : require('./../assets/fonts/Outfit-Bold.ttf'),
//     'outfit-extrab' : require('./../assets/fonts/Outfit-ExtraBold.ttf'),
//     'outfit-extral' : require('./../assets/fonts/Outfit-ExtraLight.ttf'),
//     'outfit-light' : require('./../assets/fonts/Outfit-Light.ttf'),
//     'outfit-medium' : require('./../assets/fonts/Outfit-Medium.ttf'),
//     'outfit-semib' : require('./../assets/fonts/Outfit-SemiBold.ttf'),
//     'Robo' : require('./../assets/fonts/Robo.ttf')
// })


// async loadFonts() { await Font.loadAsync({ 'Roboto-Regular': require('./path-to-fonts/Roboto-Regular.ttf'), // You can load as many fonts as you like here }); }

// useEffect(() => { loadFonts(); }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(rotationAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, rotationAnim]);

  const startBounce = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const scaleValue = useRef(new Animated.Value(1)).current;
  const [typedText, setTypedText] = useState('');
    const fullText = "Upgrade your wellness routine with a virtual wellness assistant!";

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
        const startAnimation = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(scaleValue, {
                        toValue: 1.05,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleValue, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };

        startAnimation();
    }, [fullText, scaleValue]);

  return (
    <View style={styles.container}>
      {/* <Image 
        style={styles.image} 
        source={require('./../assets/images/login3.jpg')} 
      /> */}
      <TouchableOpacity style={{height: '100%'}} onPress={() => {
          startBounce();
          router.push('auth/sign-in');
        }}>
        <View style={{display: 'flex', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', position: 'absolute', width: '100%', top: 120, fontFamily: 'Robo2'}}>
          Think Less, Live More.
        </Text>
        </View>
      <LottieView
        source={require("../assets/images/animintro.json")}
        autoPlay
        loop
        style={styles.image2}
      />

      <TouchableOpacity
        onPress={() => {
          startBounce();
          router.push('auth/sign-in');
        }}
        style={styles.button}
      >
        {/* <Animated.View style={{ transform: [{ scale: scaleAnim }] }}> */}
          <Text style={styles.buttonText}>{typedText}</Text>
        {/* </Animated.View> */}
      </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8DD2CD',
    // backgroundColor: '#263552',
    // backgroundColor: 'black'
    // backgroundColor: 'black',
    zIndex: 1,
    // height: '100%',
    // width: '100%'
  },
  // image: {
  //   width: '100%',
  //   height: '100%',
  //   opacity: 0.7,
  //   position: 'absolute',
  // },
  image2: {
    width: 300,
    height: 400,
    // position: 'absolute',
    // backgroundColor: '#1B263B',
    zIndex: 2,
    margin: 60,
    marginTop: 180
    // marginBottom: 100
  },
  textContainer: {
    width: 330,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#8DD2CD',
    borderRadius: 15,
  },
  mainText: {
    fontFamily: 'outfit-bold',
    fontSize: 26,
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  subText: {
    margin: 4,
    fontFamily: 'outfit-semib',
    margin: 10,
    color: '#686',
    fontSize: 18,
    textAlign: 'center',
  },
  highlightedText: {
    color: '#FF6347',
  },
  button: {
    position: 'absolute',
    bottom: 160,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#8DD2CD',
    // borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5,
    // width: 200
    
  },
  buttonText: {
    // color: '#D3D3D3',
    color: '#2A3748',
    // fontWeight: 'bold',
    fontSize: 23,
    // fontFamily: 'outfit-bold',
    textAlign: 'center',
    fontFamily: 'Robo',
  },
});

