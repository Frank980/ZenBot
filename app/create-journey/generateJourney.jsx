// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import LottieView from 'lottie-react-native';
// import { AI_PROMPT } from '../../constants/Options';

// export default function GenerateTrip() {
//     const { userData, setUserData } = useContext(CreateJourneyContext);
//     const GenerateAiJourney=()=>{
//         const FINAL_PROMPT = AI_PROMPT
//         .replace('{work}', userData?.Occasion?.title)
//         .replace('{days}', userData?.totNumDays)
//         .replace('{worry1}', userData?.Occasion?.title)
//         .replace('{worry2}', userData?.Occasion?.title)
//         .replace('{worry3}', userData?.Occasion?.title)
//         .replace('{description}', userData?.Description)

//     }
//     return (
//         <View style={styles.container}>
//             <LottieView
//                 source={require('./../../assets/images/AnikiHamster.json')}
//                 autoPlay
//                 loop
//                 style={styles.animation}
//             />
//             <Text style={styles.text}>Please wait...</Text>
//             <Text style={styles.text}>We are working</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FFFFFF',
//     },
//     animation: {
//         width: 150,
//         height: 150,
//     },
//     text: {
//         fontSize: 18,
//         color: '#333333',
//         marginTop: 20,
//         textAlign: 'center',
//     },
// });


//After adding database commands

// import React, { useContext, useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import LottieView from "lottie-react-native";
// import { AI_PROMPT } from "../../constants/Options";
// import { CreateJourneyContext } from "../../context/CreateJourneyContext"; // Assuming context is imported
// import { chatSession } from "../../configs/AiModel";
// import { useSafeAreaFrame } from "react-native-safe-area-context";
// import { useRouter } from "expo-router";
// // import { doc, setDoc } from "firebase/firestore"; 
// import { auth, db } from "./../../configs/FirebaseConfig";
// import { doc, setDoc } from "firebase/firestore";

// export default function GenerateJourney() {
//   const { userData } = useContext(CreateJourneyContext); // Accessing userData from context
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const user = auth.currentUser;

//   useEffect(() => {
//     userData && GenerateAiJourney();
//   }, [userData]);

//   const GenerateAiJourney = async () => {
//     setLoading(true);
//     // Get worries from userData (assuming worries are stored as numeric keys)
//     const worries = Object.keys(userData)
//       .filter((key) => !isNaN(key)) // Filter numeric keys for worries
//       .map((key) => userData[key]) // Map the keys to the actual worry values
//       .slice(0, 3); // Get up to 3 worries

//     // Set default worries if fewer than 3 worries exist
//     const [worry1 = "worry1", worry2 = "worry2", worry3 = "worry3"] = worries;

//     // Replace the placeholders in the AI prompt
//     const FINAL_PROMPT = AI_PROMPT.replace("{work}", userData?.Occasion?.title)
//       .replace("{days}", userData?.totNumDays)
//       .replace("{worry1}", worry1)
//       .replace("{worry2}", worry2)
//       .replace("{worry3}", worry3)
//       .replace("{description}", userData?.Description);

//     console.log(FINAL_PROMPT); // You can now log or use FINAL_PROMPT

//     const result = await chatSession.sendMessage(FINAL_PROMPT);
//     console.log(result.response.text());
//     const journeyResp = JSON.parse(result.response.text());
//     setLoading(false);

//     const docId =(Date.now()).toString();

//     const resutldb = await setDoc(doc(db, "MyUsers", docId), {
//       userEmail: user.email,
//       journeyPlan: journeyResp,
//     });

//       router.push("(tabs)/myjourney");
 
//   };

// //   React.useEffect(() => {
// //     GenerateAiJourney(); // Call the function when the component mounts
// //   }, [userData]); // Runs when userData changes

//   return (
//     <View style={styles.container}>
//       <LottieView
//         source={require("../../assets/images/AnikiHamster.json")}
//         autoPlay
//         loop
//         style={styles.animation}
//       />
//       <Text style={styles.text}>Please wait...</Text>
//       <Text style={styles.text}>We are working</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//   },
//   animation: {
//     width: 150,
//     height: 150,
//   },
//   text: {
//     fontSize: 18,
//     color: "#333333",
//     marginTop: 20,
//     textAlign: "center",
//   },
// });






//To not fetch multiple time: FINAL : BEST TILL NOW

// import React, { useContext, useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import LottieView from "lottie-react-native";
// import { AI_PROMPT } from "../../constants/Options";
// import { CreateJourneyContext } from "../../context/CreateJourneyContext"; // Assuming context is imported
// import { chatSession } from "../../configs/AiModel";
// import { useRouter } from "expo-router";
// // import { doc, setDoc } from "firebase/firestore"; 
// import { auth, db } from "./../../configs/FirebaseConfig";
// import { doc, setDoc } from "firebase/firestore";

// export default function GenerateJourney() {
//   const { userData } = useContext(CreateJourneyContext); // Accessing userData from context
//   const [loading, setLoading] = useState(false);
//   const [isJourneySaved, setIsJourneySaved] = useState(false); // Track if journey is already saved
//   const router = useRouter();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (userData && !isJourneySaved) {  // Check if journey is not already saved
//       GenerateAiJourney();
//     }
//   }, []);

//   const GenerateAiJourney = async () => {
//     setLoading(true);

//     // Get worries from userData (assuming worries are stored as numeric keys)
//     const worries = Object.keys(userData)
//       .filter((key) => !isNaN(key)) // Filter numeric keys for worries
//       .map((key) => userData[key]) // Map the keys to the actual worry values
//       .slice(0, 3); // Get up to 3 worries

//     // Set default worries if fewer than 3 worries exist
//     const [worry1 = "worry1", worry2 = "worry2", worry3 = "worry3"] = worries;

//     // Replace the placeholders in the AI prompt
//     const FINAL_PROMPT = AI_PROMPT.replace("{work}", userData?.Occasion?.title)
//       .replace("{days}", userData?.totNumDays)
//       .replace("{worry1}", worry1)
//       .replace("{worry2}", worry2)
//       .replace("{worry3}", worry3)
//       .replace("{description}", userData?.Description);

//     console.log(FINAL_PROMPT); // You can now log or use FINAL_PROMPT

//     try {
//       const result = await chatSession.sendMessage(FINAL_PROMPT);
//       const journeyResp = JSON.parse(await result.response.text());
//       setLoading(false);

//       const docId = Date.now().toString();

//       // Save journey to Firestore
//       await setDoc(doc(db, "UsersJourney", docId), {
//         userEmail: user.email,
//         journeyPlan: journeyResp,
//         journeyData: JSON.stringify(userData),
//         docId: docId
//       });

//       setIsJourneySaved(true); // Mark journey as saved
//       router.push("(tabs)/myjourney");
      
//     } catch (error) {
//       console.error("Error generating journey:", error);
//       setLoading(false); // Reset loading state if there's an error
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <LottieView
//         source={require("../../assets/images/AnikiHamster.json")}
//         autoPlay
//         loop
//         style={styles.animation}
//       />
//       <Text style={styles.text}>Please wait...</Text>
//       <Text style={styles.text}>We are working</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//   },
//   animation: {
//     width: 150,
//     height: 150,
//   },
//   text: {
//     fontSize: 18,
//     color: "#333333",
//     marginTop: 20,
//     textAlign: "center",
//   },
// });



import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { AI_PROMPT } from "../../constants/Options";
import { CreateJourneyContext } from "../../context/CreateJourneyContext"; // Assuming context is imported
import { chatSession } from "../../configs/AiModel";
import { useRouter } from "expo-router";
// import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "./../../configs/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function GenerateJourney() {
  const { userData } = useContext(CreateJourneyContext); // Accessing userData from context
  const [loading, setLoading] = useState(false);
  const [isJourneySaved, setIsJourneySaved] = useState(false); // Track if journey is already saved
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    if (userData && !isJourneySaved) {  // Check if journey is not already saved
      GenerateAiJourney();
    }
  }, []);
  const GenerateAiJourney = async () => {
    setLoading(true);
  
    // Replace the placeholders in the AI prompt
    const FINAL_PROMPT = AI_PROMPT
      .replace("{description}", userData?.desc)
      .replace("{stressLevel}", userData?.stress)
      .replace("{SleepHours}", userData?.sleep)
      .replace("{anxietyTimes}", userData?.anti)
      .replace("{healthyLevel}", userData?.sint)
      .replace("{ynconstant}", userData?.thoughts)
      .replace("{physicalSympt}", userData?.psymp)
      .replace("{medications}", userData?.med)
      .replace("{occasion}", userData?.occ);
  
    console.log(FINAL_PROMPT); // Log the prompt for debugging
  
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result); // Log the full result for debugging
      const responseText = await result.response.text();
  
      // Log the raw response for debugging
      console.log("Raw response:", responseText);
  
      let journeyResp;
      try {
        journeyResp = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Failed to parse JSON response:", parseError);
        setLoading(false);
        return; // Exit the function if parsing fails
      }
  
      // Check if journey data exists
      if (journeyResp && journeyResp["today's_mental_wellness_plan"]) {
        console.log("Journey Data:", journeyResp["today's_mental_wellness_plan"]);
      } else {
        console.log("No journey data available in the fetched data");
      }
  
      setLoading(false);
      const docId = Date.now().toString();
  
      // Save journey to Firestore
      await setDoc(doc(db, "UsersJourney", docId), {
        userEmail: user.email,
        journeyPlan: journeyResp,
        journeyData: JSON.stringify(userData),
        docId: docId
      });
  
      setIsJourneySaved(true); // Mark journey as saved
      router.push("(tabs)/myjourney");
  
    } catch (error) {
      console.error("Error generating journey:", error);
      setLoading(false); // Reset loading state if there's an error
    }
  };
  
  
  

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/images/AnikiHamster.json")}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.text}>Please wait...</Text>
      <Text style={styles.text}>We are working</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  animation: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 18,
    color: "#333333",
    marginTop: 20,
    textAlign: "center",
  },
});



