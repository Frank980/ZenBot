// import React, { Component, useEffect, useContext } from "react";
// import { useNavigation } from "expo-router";
// import { Text, View } from "react-native";
// import { CreateJourneyContext } from "../../context/CreateJourneyContext";

// export default function reviewDesc() {
//   const navigation = useNavigation();
//   const { userData, setUserData } = useContext(CreateJourneyContext);
//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: "",
//     });
//   }, []);
//   return (
//     <View>
//       <Text>Reviewing Your Worry</Text>
//       <View>
//         <Text>Review before getting the Solution!</Text>
//         <View>
//           <Text>Important Day</Text>
//           <Text>{userData?.Occasion?.title}</Text>
//           <Text>Number of days we have</Text>
//           <Text>{userData?.totNumDays}</Text>

//           <Text>Things bothering You! I hate it!</Text>
//           <View>
//             {Object.keys(userData)
//               .filter((key) => !isNaN(key)) // Filter numeric keys for worries
//               .map((key) => (
//                 <Text key={key}>• {userData[key]}</Text>
//               ))}
//           </View>

//           <Text>Your Description</Text>
//           <Text>{userData?.Description}</Text>
//         </View>
//       </View>
//     </View>
//   );
// }


import React, { useEffect, useContext } from "react";
import { useNavigation } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { CreateJourneyContext } from "../../context/CreateJourneyContext";
import { useRouter } from 'expo-router';

export default function ReviewDesc() {
  const navigation = useNavigation();
  const { userData } = useContext(CreateJourneyContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Reviewing Your Worry</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Important Day</Text>
        <Text style={styles.sectionContent}>{userData?.Occasion?.title || 'Not specified'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Number of Days Left</Text>
        <Text style={styles.sectionContent}>{userData?.totNumDays || 'Not specified'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Things Bothering You</Text>
        <View style={styles.worryList}>
          {Object.keys(userData)
            .filter((key) => !isNaN(key)) // Filter numeric keys for worries
            .map((key) => (
              <Text key={key} style={styles.worryText}>
                • {userData[key]}
              </Text>
            ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Description</Text>
        <Text style={styles.sectionContent}>
          {userData?.Description || 'No description provided'}
        </Text>
      </View>

      {/* Generate Journey Button */}
      <TouchableOpacity style={styles.generateButton} onPress={() => router.push('/create-journey/generateJourney')}>
        <Text style={styles.generateButtonText}>Generate Journey</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    height: "100%",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "outfit-bold",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4CAF50",
    marginBottom: 10,
    fontFamily: "outfit-bold",
  },
  sectionContent: {
    fontSize: 16,
    color: "#555",
    fontFamily: "outfit-regular",
  },
  worryList: {
    paddingLeft: 10,
  },
  worryText: {
    fontSize: 16,
    color: "#666",
    fontFamily: "outfit-regular",
    marginBottom: 5,
  },
  generateButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  generateButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "outfit-bold",
  },
});







//Code for retreiving 3 worries

// import React, { useContext } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { CreateJourneyContext } from '../../context/CreateJourneyContext';

// export default function DisplayWorries() {
//   const { userData } = useContext(CreateJourneyContext);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Things bothering You! I hate it!</Text>
//       <View style={styles.worriesContainer}>
//         {Object.keys(userData)
//           .filter((key) => !isNaN(key)) // Filter numeric keys for worries
//           .map((key) => (
//             <Text key={key} style={styles.worryText}>
//               • {userData[key]}
//             </Text>
//           ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//     backgroundColor: 'white',
//     height: '100%',
//   },
//   headerText: {
//     fontFamily: 'outfit-bold',
//     fontSize: 28,
//     marginBottom: 20,
//   },
//   worriesContainer: {
//     marginTop: 10,
//   },
//   worryText: {
//     fontSize: 18,
//     fontFamily: 'outfit-regular',
//     marginVertical: 5,
//   },
// });
