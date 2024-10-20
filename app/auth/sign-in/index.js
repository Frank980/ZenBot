// import React from 'react';
// import { useRouter } from 'expo-router';
// import { Text, TextInput, View, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import {auth} from './../../../configs/FirebaseConfig';
// import { useState } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';


// export default function SignIn() {

//     const router = useRouter();

    
//   const[email, setEmail] = useState();
//   const[password, setPassword] = useState();

//   const onSignin=()=>{

//     if(!email&&!password){
//         ToastAndroid.show('Please Enter All Your Details', ToastAndroid.LONG);
//         return;
//     }

//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//       if(errorCode=='auth/invalid-credential'){
//         ToastAndroid.show('Invalid Credentials', ToastAndroid.LONG);
//       }
//     });
//   }




//     return (
//       <View style={styles.container}>

//         <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
//           <Ionicons name="caret-back" size={24} color="black" />
//         </TouchableOpacity>
     
//         <Text style={styles.headerText}>Let's Sign You In</Text>
//         <Text style={styles.subHeaderText}>Welcome Back</Text>
//         <Text style={styles.subHeaderText}>You've been missed!</Text>

//         <View style={styles.inputContainer}>
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//             onChangeText={(value)=>setEmail(value)}
//               style={styles.input}
//               placeholder='Please Enter Your Email'
//               placeholderTextColor="#888"
//             />
//         </View>

//         <View style={styles.inputContainer}>
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//             onChangeText={(value)=>setPassword(value)}
//               style={styles.input}
//               secureTextEntry={true}
//               placeholder='Please Enter Your Password'
//               placeholderTextColor="#888"
//             />
//         </View>

//         <TouchableOpacity onPress={onSignin} style={styles.button}>
//           <Text style={styles.buttonText}>Sign-In</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={()=>router.replace('auth/sign-up')} style={styles.createAccountButton}>
//           <Text style={styles.createAccountText}>Create Account</Text>
//         </TouchableOpacity>
//       </View>
//     )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 25,
//     justifyContent: 'center',
//     backgroundColor: '#f8f9fa', // Light background
//   },
//   backButton: {
//       position: 'absolute', 
//       top: 40, 
//       left: 20, 
//       backgroundColor: '#E0E0E0', // Soft gray background for back button
//       padding: 10, 
//       borderRadius: 50, 
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 3,
//       elevation: 5,
//     },
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
//     backgroundColor: '#007bff', // Blue button for sign-in
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
//   createAccountButton: {
//     paddingVertical: 15,
//     marginTop: 15,
//     borderRadius: 10,
//     borderColor: '#007bff',
//     borderWidth: 1,
//     alignItems: 'center',
//   },
//   createAccountText: {
//     color: '#007bff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });





// After adding async storage through ChatGPT


// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'expo-router';
// import { Text, TextInput, View, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './../../../configs/FirebaseConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SignIn() {
//   const router = useRouter();

//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   // Check if user is already logged in
//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     try {
//       const storedUser = await AsyncStorage.getItem('userToken');
//       if (storedUser !== null) {
//         // If user token exists, navigate to the home or dashboard
//         router.replace('./../../(tabs)/myjourney'); // Replace '/home' with the actual route
//       }
//     } catch (error) {
//       console.error('Error retrieving token from Async Storage:', error);
//     }
//   };

//   const onSignin = () => {
//     if (!email || !password) {
//       ToastAndroid.show('Please Enter All Your Details', ToastAndroid.LONG);
//       return;
//     }

//     signInWithEmailAndPassword(auth, email, password)
//       .then(async (userCredential) => {
//         // Signed in
//         const user = userCredential.user;

//         // Store user session token or UID in AsyncStorage
//         try {
//           await AsyncStorage.setItem('userToken', user.uid);
//           ToastAndroid.show('Sign-In Successful', ToastAndroid.LONG);
          
//           // Navigate to home screen or dashboard
//           router.replace('./../../(tabs)/myjourney'); // Replace '/home' with the actual route

//         } catch (error) {
//           console.error('Failed to save token in Async Storage:', error);
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);

//         if (errorCode === 'auth/invalid-credential') {
//           ToastAndroid.show('Invalid Credentials', ToastAndroid.LONG);
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

//       <Text style={styles.headerText}>Let's Sign You In</Text>
//       <Text style={styles.subHeaderText}>Welcome Back</Text>
//       <Text style={styles.subHeaderText}>You've been missed!</Text>

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

//       <TouchableOpacity onPress={onSignin} style={styles.button}>
//         <Text style={styles.buttonText}>Sign-In</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.replace('auth/sign-up')} style={styles.createAccountButton}>
//         <Text style={styles.createAccountText}>Create Account</Text>
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
//     backgroundColor: '#007bff',
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
//   createAccountButton: {
//     paddingVertical: 15,
//     marginTop: 15,
//     borderRadius: 10,
//     borderColor: '#007bff',
//     borderWidth: 1,
//     alignItems: 'center',
//   },
//   createAccountText: {
//     color: '#007bff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });






import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ToastAndroid, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig';
import { useFonts } from "expo-font";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useFonts({
      'Robo' : require('../../../assets/fonts/Robo.ttf')
  })

  const onSignin = () => {
    if (!email || !password) {
      ToastAndroid.show('Please Enter All Your Details', ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        ToastAndroid.show('Sign-In Successful', ToastAndroid.LONG);
        
        // Navigate to home screen or dashboard
        router.replace('./../../(tabs)/myjourney'); // Replace '/home' with the actual route
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        if (errorCode === 'auth/invalid-credential') {
          ToastAndroid.show('Invalid Credentials', ToastAndroid.LONG);
        } else {
          ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
      });
  };

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
    <View style={styles.container} >
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="caret-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Let's Sign You In</Text>
      <Text style={styles.subHeaderText}>Welcome Back</Text>
      <Text style={styles.subHeaderText}>You've been missed!</Text>

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
          onChangeText={(value) => setPassword(value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Please Enter Your Password"
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity onPress={onSignin} style={styles.button}>
        <Text style={styles.buttonText}>Sign-In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace('auth/sign-up')} style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#000',
    width: '100%',
    fontFamily: 'Robo',
    position: 'absolute',
    top: 110,
    // height: '100%'
  },
  backButton: {
    position: 'absolute',
    top: -45,
    left: 20,
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFF0',
    marginBottom: 10,
    // color: '#333',
    fontFamily: 'Robo2'
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ADEAE6',
    marginBottom: 20,
    fontFamily: 'Robo'
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#FFFFF0',
    marginBottom: 5,
    fontFamily: 'Robo'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    fontFamily: 'Robo'
  },
  button: {
    // backgroundColor: '#ADEAE6',
    backgroundColor: '#8DD2CD',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#2A3748',
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Robo'
  },
  createAccountButton: {
    paddingVertical: 15,
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#ADEAE6',
    borderWidth: 1,
    alignItems: 'center',
  },
  createAccountText: {
    color: '#ADEAE6',
    fontSize: 16,
    // fontWeight: 'bold',
    fontFamily: 'Robo'
  },
});














//Chaging token systems after chatgpt suggestions


// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'expo-router';
// import { Text, TextInput, View, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './../../../configs/FirebaseConfig';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function SignIn() {
//   const router = useRouter();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   // Check if user is already logged in
//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     try {
//       const storedUser = await AsyncStorage.getItem('userToken');
//       if (storedUser !== null) {
//         // Navigate to dashboard if the token exists
//         router.replace('./../../(tabs)/myjourney');
//       }
//     } catch (error) {
//       console.error('Error retrieving token from Async Storage:', error);
//     }
//   };

//   const onSignin = () => {
//     if (!email || !password) {
//       ToastAndroid.show('Please Enter All Your Details', ToastAndroid.LONG);
//       return;
//     }

//     signInWithEmailAndPassword(auth, email, password)
//       .then(async (userCredential) => {
//         const user = userCredential.user;

//         // Store user session token or UID in AsyncStorage
//         try {
//           await AsyncStorage.setItem('userToken', user.uid); // Storing the UID
//           ToastAndroid.show('Sign-In Successful', ToastAndroid.LONG);
          
//           // Navigate to dashboard
//           router.replace('./../../(tabs)/myjourney');
//         } catch (error) {
//           console.error('Failed to save token in Async Storage:', error);
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;

//         if (errorCode === 'auth/invalid-credential') {
//           ToastAndroid.show('Invalid Credentials', ToastAndroid.LONG);
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

//       <Text style={styles.headerText}>Let's Sign You In</Text>
//       <Text style={styles.subHeaderText}>Welcome Back</Text>
//       <Text style={styles.subHeaderText}>You've been missed!</Text>

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

//       <TouchableOpacity onPress={onSignin} style={styles.button}>
//         <Text style={styles.buttonText}>Sign-In</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.replace('auth/sign-up')} style={styles.createAccountButton}>
//         <Text style={styles.createAccountText}>Create Account</Text>
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
//     backgroundColor: '#007bff',
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
//   createAccountButton: {
//     paddingVertical: 15,
//     marginTop: 15,
//     borderRadius: 10,
//     borderColor: '#007bff',
//     borderWidth: 1,
//     alignItems: 'center',
//   },
//   createAccountText: {
//     color: '#007bff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
