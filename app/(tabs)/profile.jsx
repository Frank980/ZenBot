// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default function Profile() {
//     return (
//       <View style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
//         <Text style={{fontSize: 20, fontFamily: 'Robo', textAlign: 'center', color: 'white'}}>Under Construction</Text>
//       </View>
//     )
// }

// import React, { useContext, useEffect, useState } from "react";
// import {
//   Text,
//   ToastAndroid,
//   TouchableOpacity,
//   View,
//   StyleSheet,
// } from "react-native";
// import { useNavigation } from "expo-router";
// import CalendarPicker from "react-native-calendar-picker";
// import moment from "moment";
// // import { CreateJourneyContext } from '../../context/CreateJourneyContext';
// import { useRouter } from "expo-router";

// export default function Profile() {
//   const navigation = useNavigation();
//   const TodayDate = moment(); //Show todays date

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//       headerTransparent: true,
//       // headerTitle: 'Select Date of the Occasion',
//     });
//   }, []);

//   let today = new Date();
//   let day = new Date(today.getFullYear(), today.getMonth(), 1); // Start at the first day of the month
//   let customDatesStyles = [];

//   while (day.getMonth() === today.getMonth()) {
//     // Clone the date by creating a new Date object
//     let clonedDay = new Date(day);

//     customDatesStyles.push({
//       date: clonedDay,
//       // Random colors
//       style: {
//         backgroundColor:
//           "#" + ("000000" + Math.random().toString(16).slice(2, 8)).slice(-6),
//       },
//       textStyle: { color: "black" }, // sets the font color
//       containerStyle: [], // extra styling for day container
//       allowDisabled: true, // allow custom style to apply to disabled dates
//     });

//     // Move to the next day
//     day.setDate(day.getDate() + 1);
//   }

//   console.log(customDatesStyles);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Progress to Date</Text>
//       <Text style={styles.subText}>
//         Today: {TodayDate.format("MMMM Do YYYY")}
//       </Text>
//       <View style={styles.calendarContainer}>
//         <CalendarPicker
//           todayTextStyle={{ fontWeight: "bold" }}
//           todayBackgroundColor={"transparent"}
//           customDatesStyles={customDatesStyles}
//           minDate={today}
//           textStyle={{
//             fontFamily: "CSBold",
//             color: "#000000",
//           }}
//         />
//       </View>
//       <View style={styles.imageGrid}>
//       <TouchableOpacity><Text style={styles.textBox}>Friends</Text></TouchableOpacity>
//       <TouchableOpacity><Text style={styles.textBox}>Settings</Text></TouchableOpacity>
//       <TouchableOpacity><Text style={styles.textBox}>Acheivements</Text></TouchableOpacity>
//       <TouchableOpacity><Text style={styles.textBox}>Performance</Text></TouchableOpacity>

//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     padding: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     // fontWeight: "bold",
//     color: "#333",
//     marginVertical: 10,
//     fontFamily: "HMR",
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   subText: {
//     fontSize: 16,
//     color: "#555",
//   },
//   calendarContainer: {
//     marginTop: 30,
//     // marginHorizontal: 30,
//     borderRadius: 10,
//     overflow: "hidden",
//     borderWidth: 1,
//     borderColor: "#ddd",
//   },
//   continueButton: {
//     marginTop: 30,
//     backgroundColor: "#4CAF50",
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//   },
//   continueButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   imageGrid: {
//     width: "90%",
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     alignItems: "center",
//     marginBottom: 30, // Space below the image grid
//     marginTop: 50
//   },
//   textBox: {
//     height: 50,
//     width: 120,
//     justifyContent: 'center',
//     textAlign: 'center',
//     alignContent: 'center',
//     display: 'flex',
//     alignItems: 'center',
//     verticalAlign:  'middle',
//     paddingTop: 15,
//     marginBottom: 10,
//     // marginBottom: 20, // Space between rows
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: "#333338",
//     fontFamily: 'CGBold'
//   },
// });

// import React, { useContext, useEffect, useState } from "react";
// import {
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import CalendarPicker from "react-native-calendar-picker";
// import moment from "moment";
// import { useRouter } from "expo-router";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// import { CreateJourneyContext } from "../../context/CreateJourneyContext";

// // Initialize Firebase Firestore
// const db = getFirestore();

// function generateUniqueCode() {
//   const length = 6;
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let code = "";
//   for (let i = 0; i < length; i++) {
//     code += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return code;
// }

// async function checkAndGenerateUniqueCode() {
//   let codeExists = true;
//   let uniqueCode;
//   while (codeExists) {
//     uniqueCode = generateUniqueCode();
//     const docRef = doc(db, "Profile", uniqueCode);
//     const docSnap = await getDoc(docRef);
//     codeExists = docSnap.exists();
//   }
//   return uniqueCode;
// }

// export default function Profile() {
//   const [profession, setProfession] = useState("");
//   const [gender, setGender] = useState("");
//   const [dob, setDob] = useState("");
//   const [uniqueCode, setUniqueCode] = useState(null);
//   const { userData, setUserData } = useContext(CreateJourneyContext);
//   const router = useRouter();

//   useEffect(() => {
//     const initializeUniqueCode = async () => {
//       const newCode = await checkAndGenerateUniqueCode();
//       setUniqueCode(newCode);
//     };
//     initializeUniqueCode();
//   }, []);

//   useEffect(() => {
//     if (uniqueCode) {
//       const saveProfileData = async () => {
//         const profileData = {
//           profession,
//           gender,
//           dob: moment(dob, "DD-MM-YYYY").format("YYYY-MM-DD"), // Format DOB for consistency
//           code: uniqueCode,
//         };
//         await setDoc(doc(db, "Profile", uniqueCode), profileData);
//         setUserData({ ...userData, profile: profileData });
//       };
//       saveProfileData();
//     }
//   }, [profession, gender, dob, uniqueCode]);

//   const handleDateChange = (date) => {
//     setDob(moment(date).format("DD-MM-YYYY")); // Store in DD-MM-YYYY format
//   };

//   return (
//     <ScrollView>
//         <View style={styles.container}>
//       <Text style={styles.headerText}>Quick Profile Setup</Text>

//       <View style={{width: 300, display: 'flex'}}>
//       <Text style={styles.label}>Profession</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your profession"
//         value={profession}
//         onChangeText={setProfession}
//       />

//       <Text style={styles.label}>Gender</Text>
//       <View style={styles.genderContainer}>
//         {["Male", "Female", "Other"].map((option) => (
//           <TouchableOpacity
//             key={option}
//             style={[
//               styles.genderOption,
//               gender === option && styles.selectedGender,
//             ]}
//             onPress={() => setGender(option)}
//           >
//             <Text style={styles.genderText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
// </View>

// <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Nunito2'}}>
//       <Text style={styles.label2}>Date of Birth</Text>
//       <Text style={styles.label3}>Tap on Year and Month to select.</Text>
//       <CalendarPicker style={{ fontFamily: 'Nunito2'}} onDateChange={handleDateChange} />
//       {dob && <Text style={styles.dateText}>Selected Date: {dob}</Text>}
// </View>

//       <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={styles.codeText}>Your Unique Code: {uniqueCode}</Text>

//       <TouchableOpacity
//         style={styles.submitButton}
//         onPress={() => router.push("/next-page")}
//       >
//         <Text style={styles.submitButtonText}>Continue</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//     paddingTop: 20,
//     display: 'flex',
//     alignItems: 'center'
//   },
//   headerText: {
//     fontSize: 24,
//     // fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: 'center',
//     fontFamily: 'CGBold',
//     paddingBottom: 15,
//     paddingTop: 20
//   },
//   label: {
//     fontSize: 16,
//     marginTop: 12,
//     fontFamily: 'Nunito2',
//     paddingBottom: 5
//   },
//   label2: {
//     fontSize: 16,
//     marginTop: 12,
//     fontFamily: 'Nunito2',
//     paddingBottom: 5,
//     paddingTop: 20,
//     // paddingBottom: 20
//   },
//   label3: {
//     fontSize: 14,
//     marginTop: 12,
//     fontFamily: 'Nunito2',
//     paddingBottom: 5,
//     paddingTop: 4,
//     paddingBottom: 20
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 8,
//     borderRadius: 4,
//     marginBottom: 10,
//     fontFamily: 'Nunito2'
//   },
//   genderContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 10,
//   },
//   genderOption: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   selectedGender: {
//     backgroundColor: "#6200ee",
//     borderColor: "#6200ee",
//   },
//   genderText: {
//     color: "blue",
//     fontFamily: 'Nunito2'
//   },
//   dateText: {
//     fontSize: 16,
//     marginVertical: 8,
//     fontFamily: 'Nunito2'
//   },
//   codeText: {
//     fontSize: 18,
//     color: "#555",
//     marginTop: 20,
//     fontFamily: 'Nunito2'
//   },
//   submitButton: {
//     backgroundColor: "#6200ee",
//     padding: 16,
//     width: 200,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 20,
//     fontFamily: 'Nunito2',
//     justifyContent: 'center'
//   },
//   submitButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     // fontWeight: "bold",
//     fontFamily: 'Nunito2'
//   },
// });

// Most recent

// import React, { useContext, useEffect, useState } from "react";
// import {
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import CalendarPicker from "react-native-calendar-picker";
// import moment from "moment";
// import { useRouter } from "expo-router";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// import { CreateJourneyContext } from "../../context/CreateJourneyContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getAuth } from "firebase/auth";

// // Initialize Firebase Firestore
// const db = getFirestore();
// const auth = getAuth();

// function generateUniqueCode() {
//   const length = 6;
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let code = "";
//   for (let i = 0; i < length; i++) {
//     code += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return code;
// }

// async function checkAndGenerateUniqueCode() {
//   let codeExists = true;
//   let uniqueCode;
//   while (codeExists) {
//     uniqueCode = generateUniqueCode();
//     const docRef = doc(db, "Profile", uniqueCode);
//     const docSnap = await getDoc(docRef);
//     codeExists = docSnap.exists();
//   }
//   return uniqueCode;
// }

// export default function Profile() {
//   const [profession, setProfession] = useState("");
//   const [gender, setGender] = useState("");
//   const [dob, setDob] = useState("");
//   const [uniqueCode, setUniqueCode] = useState(null);
//   const [isProfileComplete, setIsProfileComplete] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const { userData, setUserData } = useContext(CreateJourneyContext);
//   const router = useRouter();
//   const currentUser = auth.currentUser;

//   useEffect(() => {
//     const initializeProfile = async () => {
//       if (!currentUser) {
//         console.log("No user logged in");
//         return;
//       }

//       try {
//         // First, try to get the profile using email as the key
//         const emailProfileRef = doc(db, "Profile", currentUser.email);
//         const emailProfileSnap = await getDoc(emailProfileRef);

//         if (emailProfileSnap.exists()) {
//           // Profile exists, load it
//           const profileData = emailProfileSnap.data();
//           setProfession(profileData.profession);
//           setGender(profileData.gender);
//           setDob(moment(profileData.dob, "YYYY-MM-DD").format("DD-MM-YYYY"));
//           setUniqueCode(profileData.code);
//           setIsProfileComplete(true);
//           setUserData({ ...userData, profile: profileData });
//         } else {
//           // No profile exists, generate new unique code
//           const newCode = await checkAndGenerateUniqueCode();
//           setUniqueCode(newCode);
//           setIsProfileComplete(false);
//         }
//       } catch (error) {
//         console.error("Failed to initialize profile:", error);
//       }
//     };

//     initializeProfile();
//   }, [currentUser]);

//   const saveProfile = async () => {
//     if (!currentUser) return;

//     try {
//       const profileData = {
//         profession,
//         gender,
//         dob: moment(dob, "DD-MM-YYYY").format("YYYY-MM-DD"),
//         code: uniqueCode,
//         email: currentUser.email,
//         updatedAt: new Date().toISOString()
//       };

//       // Save profile with email as document ID
//       await setDoc(doc(db, "Profile", currentUser.email), profileData);

//       // Also save a reference with the unique code
//       await setDoc(doc(db, "ProfileCodes", uniqueCode), {
//         email: currentUser.email,
//         updatedAt: new Date().toISOString()
//       });

//       setUserData({ ...userData, profile: profileData });
//       setIsProfileComplete(true);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Error saving profile:", error);
//     }
//   };

//   const handleDateChange = (date) => {
//     setDob(moment(date).format("DD-MM-YYYY"));
//   };

//   const handleContinue = () => {
//     saveProfile();
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//   };

//   if (!currentUser) {
//     return (
//       <View style={styles.container}>
//         <Text>Please log in to access your profile.</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.headerText}>Quick Profile Setup</Text>

//         {isProfileComplete && !isEditing ? (
//           // Display non-editable profile info
//           <ScrollView>
//             <View style={styles.fixedProfileContainer}>
//               <Text style={styles.label}>Profession: {profession}</Text>
//               <Text style={styles.label}>Gender: {gender}</Text>
//               <Text style={styles.label}>Date of Birth: {dob}</Text>
//               <Text style={styles.label}>Your Unique Code: {uniqueCode}</Text>
//             </View>

//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={styles.actionButton}
//                 onPress={handleEdit}
//               >
//                 <Text style={styles.buttonText}>Edit Information</Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.actionButton}
//               >
//                 <Text style={styles.buttonText}>Add Friend</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.requestContainer}>
//               <Text style={styles.requestButton}>Requests</Text>
//             </View>

//             <View style={styles.leaderboardContainer}>
//               <Text style={styles.leaderboardText}>LeaderBoard</Text>
//             </View>
//           </ScrollView>
//         ) : (
//           // Display editable form
//           <View style={{ width: 300, display: "flex" }}>
//             <Text style={styles.label}>Profession</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your profession"
//               value={profession}
//               onChangeText={setProfession}
//             />

//             <Text style={styles.label}>Gender</Text>
//             <View style={styles.genderContainer}>
//               {["Male", "Female", "Other"].map((option) => (
//                 <TouchableOpacity
//                   key={option}
//                   style={[
//                     styles.genderOption,
//                     gender === option && styles.selectedGender,
//                   ]}
//                   onPress={() => setGender(option)}
//                 >
//                   <Text style={styles.genderText}>{option}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>

//             <View style={styles.dobContainer}>
//               <Text style={styles.label2}>Date of Birth</Text>
//               <Text style={styles.label3}>
//                 Tap on Year and Month to select.
//               </Text>
//               <CalendarPicker onDateChange={handleDateChange} />
//               {dob && <Text style={styles.dateText}>Selected Date: {dob}</Text>}
//             </View>

//             <Text style={styles.codeText}>Your Unique Code: {uniqueCode}</Text>

//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={styles.submitButton}
//                 onPress={handleContinue}
//               >
//                 <Text style={styles.submitButtonText}>
//                   {isEditing ? "Save Changes" : "Continue"}
//                 </Text>
//               </TouchableOpacity>

//               {isEditing && (
//                 <TouchableOpacity
//                   style={styles.cancelButton}
//                   onPress={handleCancelEdit}
//                 >
//                   <Text style={styles.cancelButtonText}>Cancel</Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     fontFamily: "Nunito2",
//   },
//   input: {
//     width: "100%",
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//     fontFamily: "Nunito2",
//   },
//   label2: {
//     fontSize: 16,
//     textAlign: "center",
//     marginBottom: 5,
//     fontFamily: "Nunito2",
//   },
//   label3: {
//     fontSize: 12,
//     textAlign: "center",
//     marginBottom: 10,
//     color: "#666",
//     fontFamily: "Nunito2",
//   },
//   genderContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 15,
//   },
//   genderOption: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   selectedGender: {
//     backgroundColor: "#90BABA",
//     borderColor: "#90BABA",
//   },
//   genderText: {
//     textAlign: "center",
//     fontFamily: "Nunito2",
//   },
//   dobContainer: {
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   dateText: {
//     marginTop: 10,
//     fontSize: 16,
//     fontFamily: "Nunito2",
//   },
//   codeText: {
//     fontSize: 16,
//     marginVertical: 15,
//     textAlign: "center",
//     fontFamily: "Nunito2",
//   },
//   submitButton: {
//     backgroundColor: "#90BABA",
//     padding: 15,
//     borderRadius: 10,
//     width: "100%",
//     marginTop: 15,
//   },
//   submitButtonText: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 16,
//     fontFamily: "Nunito2",
//   },
//   cancelButton: {
//     backgroundColor: "#ccc",
//     padding: 15,
//     borderRadius: 10,
//     width: "100%",
//     marginTop: 10,
//   },
//   cancelButtonText: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 16,
//     fontFamily: "Nunito2",
//   },
//   fixedProfileContainer: {
//     backgroundColor: "#f5f5f5",
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     marginTop: 20,
//   },
//   actionButton: {
//     backgroundColor: "grey",
//     padding: 10,
//     borderRadius: 10,
//     flex: 0.45,
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center",
//     fontFamily: "Nunito2",
//   },
//   requestContainer: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   requestButton: {
//     backgroundColor: "grey",
//     padding: 10,
//     borderRadius: 10,
//     paddingHorizontal: 30,
//     fontFamily: "Nunito2",
//   },
//   leaderboardContainer: {
//     marginTop: 30,
//     alignItems: "center",
//   },
//   leaderboardText: {
//     backgroundColor: "#90BABA",
//     padding: 10,
//     borderRadius: 10,
//     fontSize: 20,
//     paddingHorizontal: 30,
//     fontFamily: "Nunito2",
//   },
//   modalContainer: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "rgba(0,0,0,0.5)",
//     },
//     modalContent: {
//       backgroundColor: "white",
//       padding: 20,
//       borderRadius: 10,
//       width: "90%",
//       maxHeight: "80%",
//     },
//     modalTitle: {
//       fontSize: 20,
//       fontWeight: "bold",
//       marginBottom: 15,
//       textAlign: "center",
//       fontFamily: "Nunito2",
//     },
//     modalButtons: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       marginTop: 20,
//     },
//     modalButton: {
//       flex: 1,
//       padding: 10,
//       borderRadius: 5,
//       marginHorizontal: 5,
//       backgroundColor: "#90BABA",
//     },
//     cancelButton: {
//       backgroundColor: "#ccc",
//     },
//     modalButtonText: {
//       color: "white",
//       textAlign: "center",
//       fontFamily: "Nunito2",
//     },
//     errorText: {
//       color: "red",
//       textAlign: "center",
//       marginTop: 10,
//       fontFamily: "Nunito2",
//     },
//     requestsList: {
//       maxHeight: 300,
//     },
//     requestItem: {
//       padding: 10,
//       borderBottomWidth: 1,
//       borderBottomColor: "#ccc",
//     },
//     requestText: {
//       marginBottom: 5,
//       fontFamily: "Nunito2",
//     },
//     requestButtons: {
//       flexDirection: "row",
//       justifyContent: "space-between",
//       marginTop: 10,
//     },
//     requestButton: {
//       padding: 8,
//       borderRadius: 5,
//       flex: 0.45,
//     },
//     acceptButton: {
//       backgroundColor: "#90BABA",
//     },
//     rejectButton: {
//       backgroundColor: "#ff6b6b",
//     },
//     requestButtonText: {
//       color: "white",
//       textAlign: "center",
//       fontFamily: "Nunito2",
//     },
//     friendsContainer: {
//       marginTop: 20,
//       padding: 15,
//       backgroundColor: "#f5f5f5",
//       borderRadius: 10,
//     },
//     friendsTitle: {
//       fontSize: 18,
//       fontWeight: "bold",
//       marginBottom: 10,
//       fontFamily: "Nunito2",
//     },
//     friendItem: {
//       padding: 10,
//       backgroundColor: "white",
//       borderRadius: 5,
//       marginBottom: 10,
//     },
//     friendText: {
//       marginBottom: 5,
//       fontFamily: "Nunito2",
//     },
//     noFriendsText: {
//       textAlign: "center",
//       color: "#666",
//       fontFamily: "Nunito2",
//     },
//     noRequestsText: {
//       textAlign: "center",
//       color: "#666",
//       padding: 20,
//       fontFamily: "Nunito2",
//     },
// });

import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import LottieView from "lottie-react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { useRouter } from "expo-router";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  arrayUnion,
  orderBy,
  limit,
} from "firebase/firestore";
import { CreateJourneyContext } from "../../context/CreateJourneyContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { Circle } from "react-native-progress";
import { Picker } from '@react-native-picker/picker';
// import moment from "moment";

// Initialize Firebase Firestore
const db = getFirestore();
const auth = getAuth();

function generateUniqueCode() {
  const length = 6;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

async function checkAndGenerateUniqueCode() {
  let codeExists = true;
  let uniqueCode;
  while (codeExists) {
    uniqueCode = generateUniqueCode();
    const docRef = doc(db, "Profile", uniqueCode);
    const docSnap = await getDoc(docRef);
    codeExists = docSnap.exists();
  }
  return uniqueCode;
}

export default function Profile() {
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [uniqueCode, setUniqueCode] = useState(null);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [friendCode, setFriendCode] = useState("");
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showRequestsModal, setShowRequestsModal] = useState(false);
  const { userData, setUserData } = useContext(CreateJourneyContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [yesterdayStatus, setYesterdayStatus] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const currentUser = auth.currentUser;

  useEffect(() => {
    const initializeProfile = async () => {
      if (!currentUser) {
        console.log("No user logged in");
        setIsLoading(true);
        return;
      }

      try {
        setIsLoading(true);
        const userProfileRef = doc(db, "Profile", currentUser.uid);
        const userProfileSnap = await getDoc(userProfileRef);

        if (userProfileSnap.exists()) {
          const profileData = userProfileSnap.data();
          setProfession(profileData.profession);
          setGender(profileData.gender);
          setDob(moment(profileData.dob, "YYYY-MM-DD").format("DD-MM-YYYY"));
          setUniqueCode(profileData.code);
          setIsProfileComplete(true);
          setUserData({ ...userData, profile: profileData });

          await fetchFriendRequests();
          await fetchFriends();
        } else {
          const newCode = await checkAndGenerateUniqueCode();
          setUniqueCode(newCode);
          setIsProfileComplete(false);
        }
      } catch (error) {
        console.error("Failed to initialize profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeProfile();
  }, [currentUser]);

  const debugDate = (date, label) => {
    console.log(`${label}:`, {
      date: date,
      type: typeof date,
      isValid: date instanceof Date && !isNaN(date),
      timestamp: date instanceof Date ? date.getTime() : null,
    });
  };


  const checkYesterdayActivities = async () => {
    if (!currentUser || !friends.length) return;

    try {
      const friendsStatus = {};

      for (const [index, friend] of friends.entries()) {
        console.log(`Checking activities for friend: ${friend.uid}`);
        const friendStatus = {
          timetable: false,
          // journal: false,
          meditation: false,
        };

        // Check timetable activity (checkboxes) - Updated version for email-based storage
        try {
          // Use email directly as that's how documents are named now
          const checkboxesRef = doc(db, "userCheckboxes", `${friend.email}_default`);
          console.log(`Checking timetable for document: ${friend.email}_default`);

          const checkboxesDoc = await getDoc(checkboxesRef);

          if (checkboxesDoc.exists()) {
            const data = checkboxesDoc.data();
            console.log("Checkbox document data:", data);

            if (data.updatedAt) {
              const updatedAtDate = typeof data.updatedAt === 'string' 
                ? new Date(data.updatedAt)
                : data.updatedAt.toDate();

              // Reset time to midnight for comparison
              updatedAtDate.setHours(0, 0, 0, 0);

              const today = new Date();
              const yesterday = new Date(today);
              yesterday.setDate(yesterday.getDate() - 1);

              today.setHours(0, 0, 0, 0);
              yesterday.setHours(0, 0, 0, 0);

              // Check if any checkboxes were checked yesterday or today
              friendStatus.timetable = 
                updatedAtDate.getTime() === today.getTime() ||
                updatedAtDate.getTime() === yesterday.getTime();

              console.log(`Timetable status for ${friend.email}:`, friendStatus.timetable);
            }
          } else {
            console.log(`No checkbox document found for user ${friend.email}`);
          }
        } catch (error) {
          console.error("Error checking timetable activity:", error);
        }

        
        // Meditation check
        try {
          const meditationsRef = doc(db, "userMeditations", friend.uid);
          const meditationDoc = await getDoc(meditationsRef);

          if (meditationDoc.exists() && meditationDoc.data().lastUpdated) {
            const lastUpdated = meditationDoc.data().lastUpdated.toDate();
            lastUpdated.setHours(0, 0, 0, 0);
            friendStatus.meditation = isYesterdayOrToday(lastUpdated);
          }
        } catch (error) {
          console.error("Error checking meditation activity:", error);
        }

        friendsStatus[index] = friendStatus;
      }

      setYesterdayStatus(friendsStatus);
    } catch (error) {
      console.error("Error checking activities:", error);
    }
  };

  // Update the useEffect to run checkYesterdayActivities more reliably
  useEffect(() => {
    if (currentUser && friends.length > 0) {
      console.log("Running checkYesterdayActivities");
      checkYesterdayActivities();
    }
  }, [currentUser, friends]);

  useEffect(() => {
    if (currentUser && friends.length > 0) {
      checkYesterdayActivities();
    }
  }, [currentUser, friends]);

  const fetchFriendRequests = async () => {
    if (!currentUser) return;

    try {
      const requestsRef = collection(db, "FriendRequests");
      const q = query(
        requestsRef,
        where("receiverUid", "==", currentUser.uid)
      );
      const querySnapshot = await getDocs(q);

      const requests = [];
      querySnapshot.forEach((doc) => {
        requests.push({ id: doc.id, ...doc.data() });
      });

      setFriendRequests(requests);
    } catch (error) {
      console.error("Error fetching friend requests:", error);
    }
  };

  const fetchFriends = async () => {
    if (!currentUser) return;

    try {
      const userDocRef = doc(db, "UserFriends", currentUser.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const friendsData = userDocSnap.data().friends || [];
        const friendProfiles = [];

        for (const friendUid of friendsData) {
          const friendProfileSnap = await getDoc(
            doc(db, "Profile", friendUid)
          );
          if (friendProfileSnap.exists()) {
            friendProfiles.push({
              ...friendProfileSnap.data(),
              uid: friendUid
            });
          }
        }

        setFriends(friendProfiles);
      }
    } catch (error) {
      console.error("Error fetching friends:", error);
    }
  };

  // Update the Profile saving function to store UID
  const saveProfile = async () => {
    if (!currentUser) return;

    try {
      const profileData = {
        profession,
        gender,
        dob: moment(dob, "DD-MM-YYYY").format("YYYY-MM-DD"),
        code: uniqueCode,
        email: currentUser.email,
        uid: currentUser.uid,
        updatedAt: new Date().toISOString(),
      };

      await setDoc(doc(db, "Profile", currentUser.uid), profileData);
      await setDoc(doc(db, "ProfileCodes", uniqueCode), {
        // uid: currentUser.uid,
        email: currentUser.email,
        updatedAt: new Date().toISOString(),
      });

      setUserData({ ...userData, profile: profileData });
      setIsProfileComplete(true);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleDateChange = (date) => {
    setDob(moment(date).format("DD-MM-YYYY"));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleAddFriend = async () => {
    if (!friendCode || !currentUser) return;

    try {
      setErrorMessage("");

      // const codeRef = doc(db, "ProfileCodes", friendCode);
      const codeRef = doc(db, "ProfileCodes", friendCode);
      const codeSnap = await getDoc(codeRef);

      if (!codeSnap.exists()) {
        setErrorMessage("Invalid friend code");
        return;
      }

      const receiverUid = codeSnap.data().uid;
      

      if (receiverUid === currentUser.uid) {
        setErrorMessage("Cannot send friend request to yourself");
        return;
      }

      const userFriendsRef = doc(db, "UserFriends", currentUser.uid);
      const userFriendsSnap = await getDoc(userFriendsRef);

      if (
        userFriendsSnap.exists() &&
        userFriendsSnap.data().friends?.includes(receiverUid)
      ) {
        setErrorMessage("Already friends with this user");
        return;
      }

      const existingRequestQuery = query(
        collection(db, "FriendRequests"),
        where("senderUid", "==", currentUser.uid),
        where("receiverUid", "==", receiverUid)
      );
      const existingRequestSnap = await getDocs(existingRequestQuery);

      if (!existingRequestSnap.empty) {
        setErrorMessage("Friend request already sent");
        return;
      }

      const requestRef = doc(collection(db, "FriendRequests"));
      await setDoc(requestRef, {
        senderUid: currentUser.uid,
        senderEmail: currentUser.email,
        senderCode: uniqueCode,
        receiverUid,
        receiverCode: friendCode,
        status: "pending",
        timestamp: new Date().toISOString(),
      });

      setFriendCode("");
      setShowAddFriendModal(false);
      Alert.alert("Success", "Friend request sent successfully!");
    } catch (error) {
      console.error("Error sending friend request:", error);
      setErrorMessage("Failed to send friend request");
    }
  };

  const handleAcceptRequest = async (request) => {
    try {
      const user1Ref = doc(db, "UserFriends", currentUser.uid);
      const user2Ref = doc(db, "UserFriends", request.senderUid);

      await setDoc(
        user1Ref,
        {
          friends: arrayUnion(request.senderUid),
        },
        { merge: true }
      );

      await setDoc(
        user2Ref,
        {
          friends: arrayUnion(currentUser.uid),
        },
        { merge: true }
      );

      await deleteDoc(doc(db, "FriendRequests", request.id));

      await fetchFriendRequests();
      await fetchFriends();

      Alert.alert("Success", "Friend request accepted!");
    } catch (error) {
      console.error("Error accepting friend request:", error);
      Alert.alert("Error", "Failed to accept friend request");
    }
  };

  const handleContinue = () => {
    saveProfile();
  };

  const handleRejectRequest = async (request) => {
    try {
      await deleteDoc(doc(db, "FriendRequests", request.id));
      await fetchFriendRequests();
      Alert.alert("Success", "Friend request rejected");
    } catch (error) {
      console.error("Error rejecting friend request:", error);
      Alert.alert("Error", "Failed to reject friend request");
    }
  };

  const AddFriendModal = () => (
    <Modal
      visible={showAddFriendModal}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Friend</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter friend's code"
            value={friendCode}
            onChangeText={setFriendCode}
          />
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.modalButton3}
              onPress={handleAddFriend}
            >
              <Text style={styles.modalButtonText}>Send Request</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton2]}
              onPress={() => {
                setShowAddFriendModal(false);
                setFriendCode("");
                setErrorMessage("");
              }}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  const RequestsModal = () => (
    <Modal visible={showRequestsModal} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Friend Requests</Text>
          <ScrollView style={styles.requestsList}>
            {friendRequests.length === 0 ? (
              <Text style={styles.noRequestsText}>No pending requests</Text>
            ) : (
              friendRequests.map((request) => (
                <View key={request.id} style={styles.requestItem}>
                  <Text style={styles.requestText}>
                    From: {request.senderEmail}
                  </Text>
                  <Text style={styles.requestText}>
                    Code: {request.senderCode}
                  </Text>
                  <View style={styles.requestButtons}>
                    <TouchableOpacity
                      style={[styles.requestButton, styles.acceptButton]}
                      onPress={() => handleAcceptRequest(request)}
                    >
                      <Text style={styles.requestButtonText}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.requestButton, styles.rejectButton]}
                      onPress={() => handleRejectRequest(request)}
                    >
                      <Text style={styles.requestButtonText}>Reject</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
          <TouchableOpacity
            style={styles.modalButton2}
            onPress={() => setShowRequestsModal(false)}
          >
            {/* <Text style={{height: 130, width: 400, backgroundColor: 'blue'}}>Close</Text> */}
            <Text style={styles.modalButtonText2}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const FriendsList = () => (
    <View style={styles.friendsContainer}>
      <Text style={styles.friendsTitle}>Friends</Text>
      {friends.length === 0 ? (
        <Text style={styles.noFriendsText}>No friends added yet</Text>
      ) : (
        friends.map((friend, index) => (
          <View key={index} style={styles.friendItem}>
            {/* <Text style={styles.friendText}>Email: {friend.email}</Text> */}
            <Text style={styles.friendText}>
              {friend.profession}
            </Text>
            {/* <Text style={styles.friendText}>
              DOB: {moment(friend.dob).format("DD-MM-YYYY")}
            </Text> */}
            {renderActivityCircles(yesterdayStatus[index] || {})}
          </View>
        ))
      )}
    </View>
  );

  // Loading Screen Component
  const LoadingScreen = () => (
    <View style={styles.loadingContainer}>
      <LottieView
        source={require("../../assets/images/Loader2.json")} // Adjust path as needed
        autoPlay
        loop
        style={styles.lottieAnimation}
      />
      <Text style={styles.loadingText}>Preparing your profile page...</Text>
    </View>
  );

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text>Please log in to access your profile.</Text>
      </View>
    );
  }

  // Utility function to check if two dates are on the same day
  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };


    // Helper function for date comparison
    const isYesterdayOrToday = (dateInput) => {
      try {
        if (!dateInput) return false;
  
        const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
        if (!(date instanceof Date) || isNaN(date)) {
          console.log("Invalid date input:", dateInput);
          return false;
        }
  
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
  
        // Reset hours to midnight for accurate day comparison
        today.setHours(0, 0, 0, 0);
        yesterday.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);
  
        return date.getTime() === today.getTime() || 
               date.getTime() === yesterday.getTime();
      } catch (error) {
        console.error("Error in isYesterdayOrToday:", error);
        return false;
      }
    };

  // Function to render activity circles based on status
  const renderActivityCircles = (status) => {
    if (!status) return null;

    const activities = [
      { key: "timetable", label: "Schedule" },
      // { key: "journal", label: "J" },
      { key: "meditation", label: "Meditation" },
    ];

    return (
      <View style={styles.activityContainer}>
        {activities.map((activity) => (
          <View
            key={activity.key}
            style={[
              styles.activityCircle,
              { backgroundColor: status[activity.key] ? "#4CAF50" : "#FFFFFF" },
            ]}
          >
            <Text
              style={[
                styles.activityLabel,
                { color: status[activity.key] ? "#FFFFFF" : "#000000" },
              ]}
            >
              {activity.label}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const ServiceRequestModal = ({ visible, onClose }) => {
    const [formData, setFormData] = useState({
      serviceType: '',
      name: '',
      url: '',
      ownerEmail: '',
      ownerContact: '',
    });
    const [errors, setErrors] = useState({});
  
    const serviceTypes = [
      "Instagram Page",
      "Website",
      "YouTube Channel",
      "Podcast",
      "Online Community",
      "Therapy and Counseling Service",
      "Workshops and Webinars",
      "Blog",
      "Newsletter",
      "Online Courses",
      "Mental Health Hotlines and Helplines",
      "Social Media Groups and Forums"
    ];
  
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.url) newErrors.url = 'URL/Link/Contact is required';
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.ownerEmail)) {
        newErrors.ownerEmail = 'Please enter a valid email';
      }
  
      // Phone number validation (numbers only)
      const phoneRegex = /^\d+$/;
      if (!phoneRegex.test(formData.ownerContact)) {
        newErrors.ownerContact = 'Please enter a valid phone number (numbers only)';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = async () => {
      if (!validateForm()) return;
  
      try {
        const serviceCollection = collection(db, 'Servicerequests');
        await setDoc(doc(serviceCollection, currentUser.email), {
          ...formData,
          status: 'pending',
          createdAt: new Date().toISOString()
        });
  
        // Reset form and close modal
        setFormData({
          serviceType: '',
          name: '',
          url: '',
          ownerEmail: '',
          ownerContact: '',
        });
        onClose();
      } catch (error) {
        console.error('Error submitting service request:', error);
        alert('Error submitting service request. Please try again.');
      }
    };
  
    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>Add New Service</Text>
  
              <Text style={styles.label}>Type of Service</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={formData.serviceType}
                  onValueChange={(value) => 
                    setFormData({ ...formData, serviceType: value })
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="Select a service type" value="" />
                  {serviceTypes.map((type) => (
                    <Picker.Item key={type} label={type} value={type} />
                  ))}
                </Picker>
              </View>
              {errors.serviceType && <Text style={styles.errorText}>{errors.serviceType}</Text>}
  
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                placeholder="Enter service name"
                secureTextEntry={false}
              />
              {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
  
              <Text style={styles.label}>URL/Link/Contact</Text>
              <TextInput
                style={styles.input}
                value={formData.url}
                onChangeText={(text) => setFormData({ ...formData, url: text })}
                placeholder="Enter service URL or contact details"
                secureTextEntry={false}
              />
              {errors.url && <Text style={styles.errorText}>{errors.url}</Text>}
  
              <Text style={styles.label}>Owner Email</Text>
              <TextInput
                style={styles.input}
                value={formData.ownerEmail}
                onChangeText={(text) => setFormData({ ...formData, ownerEmail: text })}
                placeholder="Enter owner's email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.ownerEmail && <Text style={styles.errorText}>{errors.ownerEmail}</Text>}
  
              <Text style={styles.label}>Owner Contact</Text>
              <TextInput
                style={styles.input}
                value={formData.ownerContact}
                onChangeText={(text) => setFormData({ ...formData, ownerContact: text })}
                placeholder="Enter owner's contact number"
                keyboardType="numeric"
              />
              {errors.ownerContact && <Text style={styles.errorText}>{errors.ownerContact}</Text>}
  
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.submitButton]}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton]}
                  onPress={onClose}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile</Text>

        {isProfileComplete && !isEditing ? (
          <ScrollView>
            <View style={styles.fixedProfileContainer}>
              <Text style={styles.label}>User Name: {profession}</Text>
              <Text style={styles.label}>Gender: {gender}</Text>
              <Text style={styles.label}>Date of Birth: {dob}</Text>
              <Text style={styles.label}>Roots ID: {uniqueCode}</Text>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
  style={styles.actionButton}
  onPress={() => setModalVisible(true)}
>
  <Text style={styles.buttonText}>Add Service</Text>
</TouchableOpacity>

{/* Add the modal component */}
<ServiceRequestModal 
  visible={modalVisible}
  onClose={() => setModalVisible(false)}
/>

              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.buttonText}>Edit Information</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => setShowAddFriendModal(true)}
              >
                <Text style={styles.buttonText}>Add Friend</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.requestContainer}
              onPress={() => setShowRequestsModal(true)}
            >
              <Text style={styles.requestButton}>
                Requests{" "}
                {friendRequests.length > 0 ? `(${friendRequests.length})` : ""}
              </Text>
            </TouchableOpacity>

            <FriendsList />
{/* 
            <View style={styles.leaderboardContainer}>
              <Text style={styles.leaderboardText}>LeaderBoard</Text>
            </View> */}
          </ScrollView>
        ) : (
          <View style={{ width: 300, display: "flex" }}>
            <Text style={styles.label}>User Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={profession}
              onChangeText={setProfession}
            />

            <Text style={styles.label}>Gender</Text>
            <View style={styles.genderContainer}>
              {["Male", "Female", "Other"].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.genderOption,
                    gender === option && styles.selectedGender,
                  ]}
                  onPress={() => setGender(option)}
                >
                  <Text style={styles.genderText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.dobContainer}>
              <Text style={styles.label2}>Date of Birth</Text>
              <Text style={styles.label3}>
                Tap on Year and Month to select.
              </Text>
              <CalendarPicker width={300} onDateChange={handleDateChange} />
              {dob && <Text style={styles.dateText}>Selected Date: {dob}</Text>}
            </View>

            {/* <Text style={styles.codeText}>Roots ID: {uniqueCode}</Text> */}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleContinue}
              >
                <Text style={styles.submitButtonText}>
                  {isEditing ? "Save Changes" : "Continue"}
                </Text>
              </TouchableOpacity>

              {isEditing && (
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={handleCancelEdit}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        {AddFriendModal()}
        {RequestsModal()}
        {/* {isProfileComplete && <FriendsList />} */}
        {isProfileComplete }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  activityContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
    padding: 10,
  },
  activityCircle: {
    width: 100,
    height: 40,
    padding: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    borderColor: "#000000",
    marginHorizontal: 5,
  },
  activityLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
  circleContainer: {
    position: "relative",
    width: 100,
    height: 100,
  },
  outerCircle: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  innerCircle: {
    position: "absolute",
    top: 5,
    left: 5,
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  quadrant: {
    width: "50%",
    height: "50%",
  },
  quadrant1: {
    borderTopLeftRadius: 45,
  },
  quadrant2: {
    borderTopRightRadius: 45,
  },
  quadrant3: {
    borderBottomLeftRadius: 45,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  lottieAnimation: {
    width: 300,
    height: 300,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: "#1E90FF",
    fontFamily: "Nunito2",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Nunito2",
    paddingTop: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Nunito2",
  },
  label2: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "Nunito2",
  },
  label3: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
    color: "#666",
    fontFamily: "Nunito2",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  genderOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  selectedGender: {
    backgroundColor: "#90BABA",
    borderColor: "#90BABA",
  },
  genderText: {
    textAlign: "center",
    fontFamily: "Nunito2",
  },
  dobContainer: {
    alignItems: "center",
    marginBottom: 15,
    paddingTop: 10,
  },
  dateText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Nunito2",
  },
  codeText: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: "center",
    fontFamily: "Nunito2",
  },
  submitButton: {
    backgroundColor: "#90BABA",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginTop: 15,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Nunito2",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginTop: 10,
  },
  cancelButton2: {
    backgroundColor: "#ccc",
    // padding: 15,
    borderRadius: 10,
    width: "100%",
    // marginTop: 10,
  },
  cancelButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Nunito2",
  },
  fixedProfileContainer: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  actionButton: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
    flex: 0.45,
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Nunito2",
  },
  requestContainer: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#a4c9a9",
  },
  requestButton: {
    backgroundColor: "green",
    padding: 10,
    paddingHorizontal: 30,
    fontFamily: "Nunito2",
  },
  leaderboardContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  leaderboardText: {
    backgroundColor: "#90BABA",
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 30,
    fontFamily: "Nunito2",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito2",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  modalButton3: {
    flex: 1,
    // padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: 40,
    backgroundColor: "#90BABA",
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    // paddingBottom: 15,
    // marginBottom: 5,
    backgroundColor: "#90BABA",
  },
  modalButton2: {
    flex: 1,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    // height: 60,
    backgroundColor: "#90BABA",
  },
  modalButtonText: {
    color: "black",
    textAlign: "center",
    fontFamily: "Nunito2",
  },
  modalButtonText2: {
    color: "black",
    textAlign: "center",
    fontFamily: "Nunito2",
    height: 18,
    // padding: 30,
    width: 280,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Nunito2",
  },
  requestsList: {
    maxHeight: 300,
  },
  requestItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  requestText: {
    marginBottom: 5,
    fontFamily: "Nunito2",
  },
  requestButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  requestButton: {
    padding: 8,
    borderRadius: 5,
    flex: 0.45,
  },
  acceptButton: {
    backgroundColor: "#90BABA",
  },
  rejectButton: {
    backgroundColor: "#ff6b6b",
  },
  requestButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Nunito2",
  },
  friendsContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  friendsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Nunito2",
  },
  friendItem: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    // paddingBottom: 5,
    backgroundColor: "white",
    borderRadius: 60,
    marginBottom: 10,
    fontFamily: 'Nunito2'
  },
  friendText: {
    marginBottom: 3,
    
    fontFamily: "Nunito2",
  },
  noFriendsText: {
    textAlign: "center",
    color: "#666",
    fontFamily: "Nunito2",
  },
  noRequestsText: {
    textAlign: "center",
    color: "#666",
    padding: 20,
    fontFamily: "Nunito2",
  },
});
