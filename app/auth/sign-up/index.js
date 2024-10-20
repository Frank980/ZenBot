// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   ToastAndroid,
// } from "react-native";
// import { useRouter } from "expo-router";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from './../../../configs/FirebaseConfig'

// export default function SignUp() {
//   const router = useRouter();

//   const OnCreateAccount = () => {

//     if(!email&&!password&&!fullName){
//         ToastAndroid.show('Please Enter All Your Details', ToastAndroid.BOTTOM);
//         return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         console.log(user);
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage, errorCode);
//         // ..
//       });
//   };

//   const[email, setEmail] = useState();
//   const[password, setPassword] = useState();
//   const[fullName, setFullName] = useState();


//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="caret-back" size={24} color="black" />
//       </TouchableOpacity>

//       {/* Header Text */}
//       <Text style={styles.headerText}>Join The Journey Now!</Text>

//       {/* Input Fields */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Full Name</Text>
//         <TextInput 
//             onChangeText={(value)=>setFullName(value)}
//           style={styles.input}
//           placeholder="Please Enter Your Full Name"
//           placeholderTextColor="#888"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//          onChangeText={(value)=>setEmail(value)}
//           style={styles.input}
//           placeholder="Please Enter Your Email"
//           placeholderTextColor="#888"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={(value)=>setPassword(value)}
//           secureTextEntry={true}
//           placeholder="Please Enter Your Password"
//           placeholderTextColor="#888"
//         />
//       </View>

//       {/* Create Account Button */}
//       <TouchableOpacity onPress={OnCreateAccount} style={styles.createAccountButton}>
//         <Text style={styles.createAccountText}>Create Account</Text>
//       </TouchableOpacity>

//       {/* Sign In Button */}
//       <TouchableOpacity
//         onPress={() => router.replace("auth/sign-in")}
//         style={styles.signInButton}
//       >
//         <Text style={styles.signInText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 25,
//     backgroundColor: "#f0f4f8", // Light background for a clean look
//     justifyContent: "center",
//   },
//   backButton: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     backgroundColor: "#E0E0E0", // Soft gray background for back button
//     padding: 10,
//     borderRadius: 50,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   headerText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 30,
//     color: "#333",
//     marginTop: 60, // Give space under back button
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 12,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     fontSize: 16,
//   },
//   createAccountButton: {
//     backgroundColor: "#4CAF50", // Modern green for Create Account
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginTop: 30,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   createAccountText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   signInButton: {
//     backgroundColor: "#2196F3", // Blue for Sign In
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   signInText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });


//After implementing async

// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
//   ToastAndroid,
// } from "react-native";
// import { useRouter } from "expo-router";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from './../../../configs/FirebaseConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SignUp() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [fullName, setFullName] = useState('');

//   const OnCreateAccount = async () => {
//     if (!email || !password || !fullName) {
//       ToastAndroid.show('Please Enter All Your Details', ToastAndroid.BOTTOM);
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Store user's email in AsyncStorage
//       await AsyncStorage.setItem('userEmail', email);
//       console.log('User signed up and email stored:', user);
      
//       // Navigate to the next screen or perform additional actions
//       router.replace('./../../(tabs)/myjourney'); // Replace this with your actual home route
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage, errorCode);
      
//       // Show error message based on error code
//       if (errorCode === 'auth/email-already-in-use') {
//         ToastAndroid.show('Email already in use', ToastAndroid.BOTTOM);
//       } else {
//         ToastAndroid.show('Error signing up, please try again.', ToastAndroid.BOTTOM);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="caret-back" size={24} color="black" />
//       </TouchableOpacity>

//       {/* Header Text */}
//       <Text style={styles.headerText}>Join The Journey Now!</Text>

//       {/* Input Fields */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Full Name</Text>
//         <TextInput
//           onChangeText={(value) => setFullName(value)}
//           style={styles.input}
//           placeholder="Please Enter Your Full Name"
//           placeholderTextColor="#888"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           onChangeText={(value) => setEmail(value)}
//           style={styles.input}
//           placeholder="Please Enter Your Email"
//           placeholderTextColor="#888"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={(value) => setPassword(value)}
//           secureTextEntry={true}
//           placeholder="Please Enter Your Password"
//           placeholderTextColor="#888"
//         />
//       </View>

//       {/* Create Account Button */}
//       <TouchableOpacity onPress={OnCreateAccount} style={styles.createAccountButton}>
//         <Text style={styles.createAccountText}>Create Account</Text>
//       </TouchableOpacity>

//       {/* Sign In Button */}
//       <TouchableOpacity
//         onPress={() => router.replace("auth/sign-in")}
//         style={styles.signInButton}
//       >
//         <Text style={styles.signInText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 25,
//     backgroundColor: "#f0f4f8",
//     justifyContent: "center",
//   },
//   backButton: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     backgroundColor: "#E0E0E0",
//     padding: 10,
//     borderRadius: 50,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   headerText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 30,
//     color: "#333",
//     marginTop: 60,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: "#333",
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 12,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     fontSize: 16,
//   },
//   createAccountButton: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginTop: 30,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   createAccountText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   signInButton: {
//     backgroundColor: "#2196F3",
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   signInText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });


import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform,
  ScrollView
  // ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"; // Added signOut
import { auth } from "./../../../configs/FirebaseConfig";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  // Function to handle sign-up
  const OnCreateAccount = async () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show('Please Enter All Your Details', ToastAndroid.BOTTOM);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Do not store any user token, just proceed to next steps
      console.log('User signed up:', user);
      
      // Navigate to the next screen
      router.replace('./../../(tabs)/myjourney'); 
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      
      // Show error message based on error code
      if (errorCode === 'auth/email-already-in-use') {
        ToastAndroid.show('Email already in use', ToastAndroid.BOTTOM);
      } else {
        ToastAndroid.show('Error signing up, please try again.', ToastAndroid.BOTTOM);
      }
    }
  };

  return (
    <View style={{width: '100%', height: '200%', backgroundColor: 'black'}}>
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="caret-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Header Text */}
      <Text style={styles.headerText}>Join The Journey Now!</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          onChangeText={(value) => setFullName(value)}
          style={styles.input}
          placeholder="Please Enter Your Full Name"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.input}
          placeholder="Please Enter Your Email"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          placeholder="Please Enter Your Password (At least 6 characters long)"
          placeholderTextColor="#888"
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity onPress={OnCreateAccount} style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={() => router.replace("auth/sign-in")}
        style={styles.signInButton}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 25,
    // backgroundColor: "#f0f4f8",
    // justifyContent: "center",
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#000',
    width: '100%',
    fontFamily: 'Robo',
    position: 'absolute',
    top: 40,
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 20,
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFF0',
    // fontWeight: "bold",
    fontFamily: 'Robo2',
    textAlign: "center",
    marginBottom: 30,
    // color: "#333",
    marginTop: 60,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    // color: "#333",
    color: '#FFFFF0',
    marginBottom: 8,
    fontFamily: 'Robo'
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    fontFamily: 'Robo'
  },
  createAccountButton: {
    backgroundColor: "#ADEAE6",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    
  },
  createAccountText: {
    color: "#2A3748",
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: 'Robo'
  },
  signInButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderColor: '#ADEAE6',
    borderWidth: 1,
    
  },
  signInText: {
    color: "white",
    fontSize: 18,
    // fontWeight: "bold",
    fontFamily: 'Robo'
  },
});


















// Changing toke req after chatgt

// import React, { useState } from 'react';
// import { useRouter } from 'expo-router';
// import { Text, TextInput, View, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './../../../configs/FirebaseConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SignUp() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const onSignUp = () => {
//     if (!email || !password || !confirmPassword) {
//       ToastAndroid.show('Please Enter All Your Details', ToastAndroid.LONG);
//       return;
//     }

//     if (password !== confirmPassword) {
//       ToastAndroid.show('Passwords Do Not Match', ToastAndroid.LONG);
//       return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//       .then(async (userCredential) => {
//         const user = userCredential.user;

//         // Store user session token or UID in AsyncStorage
//         try {
//           await AsyncStorage.setItem('userToken', user.uid); // Storing the UID
//           ToastAndroid.show('Sign-Up Successful', ToastAndroid.LONG);

//           // Navigate to dashboard
//           router.replace('./../../(tabs)/myjourney');
//         } catch (error) {
//           console.error('Failed to save token in Async Storage:', error);
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;

//         if (errorCode === 'auth/email-already-in-use') {
//           ToastAndroid.show('Email Already in Use', ToastAndroid.LONG);
//         } else if (errorCode === 'auth/invalid-email') {
//           ToastAndroid.show('Invalid Email Format', ToastAndroid.LONG);
//         } else if (errorCode === 'auth/weak-password') {
//           ToastAndroid.show('Password Should Be At Least 6 Characters', ToastAndroid.LONG);
//         } else {
//           ToastAndroid.show(errorMessage, ToastAndroid.LONG);
//         }
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
//         <Ionicons name="caret-back" size={24} color="black" />
//       </TouchableOpacity>

//       <Text style={styles.headerText}>Create a New Account</Text>
//       <Text style={styles.subHeaderText}>Sign up to get started</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           onChangeText={(value) => setEmail(value)}
//           style={styles.input}
//           placeholder="Please Enter Your Email"
//           placeholderTextColor="#888"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           onChangeText={(value) => setPassword(value)}
//           style={styles.input}
//           secureTextEntry={true}
//           placeholder="Please Enter Your Password"
//           placeholderTextColor="#888"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Confirm Password</Text>
//         <TextInput
//           onChangeText={(value) => setConfirmPassword(value)}
//           style={styles.input}
//           secureTextEntry={true}
//           placeholder="Confirm Your Password"
//           placeholderTextColor="#888"
//         />
//       </View>

//       <TouchableOpacity onPress={onSignUp} style={styles.button}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.replace('auth/sign-in')} style={styles.loginButton}>
//         <Text style={styles.loginText}>Already have an account? Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 25,
//     justifyContent: 'center',
//     backgroundColor: '#f8f9fa',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//     backgroundColor: '#E0E0E0',
//     padding: 10,
//     borderRadius: 50,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   headerText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//     color: '#333',
//   },
//   subHeaderText: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#666',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 12,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#28a745',
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginButton: {
//     paddingVertical: 15,
//     marginTop: 15,
//     borderRadius: 10,
//     borderColor: '#28a745',
//     borderWidth: 1,
//     alignItems: 'center',
//   },
//   loginText: {
//     color: '#28a745',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
