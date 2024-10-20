// import React, {useState} from "react";
// import axios from "axios";
// import { View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet } from "react-native";

// import ChatBubble from "./ChatBubble";
// import {speak, isSpeakingAsync, stop } from "expo-speech";
// import { TouchableOpacity } from "react-native";

// const Chatbot  = ()=>{
//     const[chat, SetChat] = useState();
//     const[userInput, setUserInput] = useState("");
//     const[loading, setLoading] = useState(false);
//     const[error, setError] = useState(null);
//     const[isSpeaking, SetIsSpeaking] = useState(false);

//     const API_KEY = ""

//     const handleuserinput= async()=>{
//         //Adding user input to chat

//         let UpdateChat = [
//             ...chat,
//             {
//                 role: 'users',
//                 parts: [{text: userInput}],
//             },
//         ];

//         setLoading(true);

//         try{
//             const response = await axios.post(
//                 ``,
//                 {
//                     contents: UpdateChat,
//                 }

//             );

//             console.log("Gemini pro api response", response.data);

//             const modelResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

//             if(modelResponse){
//                 const UpdateChatWithModel = [
//                     ...updateedChat,
//                     {
//                         role:'model',
//                         parts: [{text: modelResponse}],
//                     },
//                 ];

//                 SetChat(UpdateChatWithModel);
//                 setUserInput("");
//             }
//         }
//             catch (error){
//                 console.log('Error calling Gemini Pro Api:', error);
//                 console.error("Error response:", error.response);
//                 setError("An error occured. Please try again.");
//             } finally{
//                 setLoading(false);
//             }
//         };

//         const handleSpeech = async(text)=>{
//             if(isSpeaking){
//                 //already speaking
//                 stop();
//                 SetIsSpeaking(false);
//             } else{
//                 if(!(await isSpeakingAsync())){
//                     speak(text);
//                     SetIsSpeaking(true);
//                 }
//             }
//         };

//         const renderChatItem = ({item}) =>(
//             <ChatBubble
//             role={item.role}
//             text={item.parts[0].text}
//             onSpeech={()=>handleSpeech(item.parts[0].text)}/>
//         );

//         return (
//             <View style={styles.container}>
//                 <Text style={StyleSheet.title}>Gemini Chatbot</Text>
//                 <FlatList
//                     data={chat}
//                     renderItem={renderChatItem}
//                     keyExtractor={(item, index)=>index.toString()}
//                     contentContainerStyle={StyleSheet.chatContainer}
//                 />
//                 <View style={StyleSheet.inputContainer}>
//                     <TextInput style={styles.input} placeholder="Ask your therapist..." placeholderTextColor="#aaa" value={userInput} onChangeText={setUserInput}/>
//                     <TouchableOpacity style={styles.button} onPress={handleuserinput}>
//                         <Text style={styles.buttontext}>send</Text>
//                     </TouchableOpacity>
//                 </View>
//                 {loading && <ActivityIndicator style={StyleSheet.loading} color="#333"/>}
//                 {error && <Text style={styles.error}>{error}</Text>}
//             </View>
//         );
//     };

//     const styles = StyleSheet.create({
//         container:{
//             flex: 1,
//             padding: 16,
//             backgroundColor: "#f8f8f8",
//         },

//         title:{
//             fontSize: 24,
//             fontWeight: "bold",
//             color: "#333",
//             marginBottom: 20,
//             marginTop: 40,
//             textAlign: "center",
//         },
//         chatContainer:{
//             flexGrow: 1,
//             justifyContent: 'flex-end',
//         },
//         inputContainer:{
//             flexDirection: "row",
//             alignItems: "center",
//             marginTop: 10,
//         },
//         input:{
//             flex: 1,
//             height: 50,
//             marginRight: 10,
//             padding: 8,
//             borderColor: "#333",
//             borderWidth: 1,
//             borderRadius: 25,
//             color: "#333",
//             backgroundColor: "#fff",
//         },
//         button:{
//             padding: 10,
//             backgroundColor: "#007AFF",
//             borderRadius: 25,
//         },
//         buttonText: {
//             color: "#fff",
//             textAlign: "center",
//         },
//         loading:{
//             marginTop: 10,
//         },
//         error:{
//             color: "red",
//             marginTop: 10,
//         },
//     });

// export default Chatbot;

//Chatgpt for UI improvements

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";

// import React, { useState } from "react";
// import axios from "axios";
// import { View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
// import { TouchableOpacity } from "react-native";
// import { speak, isSpeakingAsync, stop } from "expo-speech";

// import ChatBubble from "./ChatBubble"; // Assume this is your custom chat bubble component

// const Chatbot = () => {
//   const [chat, setChat] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isSpeaking, setIsSpeaking] = useState(false);

//   const API_KEY = "AIzaSyCnV8uXKr2hha3YAEjqc5yfUrtvLSgBUb4"; // Add your API key here

//   const handleUserInput = async () => {
//     let updatedChat = [
//       ...chat, // This ensures older messages stay at the top
//       {
//         role: 'user',
//         parts: [{ text: userInput }],
//       },
//     ];

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,  // Add your API endpoint here
//         {
//           contents: updatedChat,
//         }
//       );

//       const modelResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

//       if (modelResponse) {
//         const updatedChatWithModel = [
//           ...updatedChat,
//           {
//             role: 'model',
//             parts: [{ text: modelResponse }],
//           },
//         ];

//         setChat(updatedChatWithModel);
//         setUserInput("");
//       }
//     } catch (error) {
//       console.error("Error response:", error.response);
//       setError("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSpeech = async (text) => {
//     if (isSpeaking) {
//       stop();
//       setIsSpeaking(false);
//     } else {
//       if (!(await isSpeakingAsync())) {
//         speak(text);
//         setIsSpeaking(true);
//       }
//     }
//   };

//   const renderChatItem = ({ item }) => (
//     <ChatBubble
//       role={item.role}
//       text={item.parts[0].text}
//       onSpeech={() => handleSpeech(item.parts[0].text)}
//     />
//   );

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <View style={styles.chatHeader}>
//         <Text style={styles.title}>Gemini Chatbot</Text>
//       </View>
//       <FlatList
//         data={chat}
//         renderItem={renderChatItem}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.chatContainer}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Ask me anything..."
//           placeholderTextColor="#888"
//           value={userInput}
//           onChangeText={setUserInput}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleUserInput}>
//           <Text style={styles.buttonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//       {loading && <ActivityIndicator style={styles.loading} color="#333" />}
//       {error && <Text style={styles.error}>{error}</Text>}
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f1f1f1",
//     paddingTop: 40,
//     paddingHorizontal: 16,
//   },
//   chatHeader: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   chatContainer: {
//     flexGrow: 1,
//     justifyContent: 'flex-end',
//     paddingVertical: 10,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//     marginBottom: 20,
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     padding: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     paddingHorizontal: 16,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 30,
//     backgroundColor: "#fff",
//     color: "#333",
//   },
//   button: {
//     marginLeft: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: "#007AFF",
//     borderRadius: 30,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   loading: {
//     marginTop: 10,
//   },
//   error: {
//     color: "red",
//     textAlign: "center",
//     marginTop: 10,
//   },
// });

// export default Chatbot;

//gemini AI:

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { speak, isSpeakingAsync, stop } from "expo-speech";

import ChatBubble from "./ChatBubble"; // Assume this is your custom chat bubble component

const Chatbot = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [typingDots, setTypingDots] = useState(""); // New state for typing animation

  // const apiKey = "AIzaSyCnV8uXKr2hha3YAEjqc5yfUrtvLSgBUb4"; // Replace with your API key
  const apiKey = "AIzaSyAVZsWzZNddj32ksQ1fRW7IrNbKR8oKUgI";  

  // Import and configuration
  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-002", // Replace with your model ID
    systemInstruction:
      "Your name is ZenBot and you are a trained therapist who has read the following books On Being A Therapist - Jeffrey Kottler, It Didn't Start With You -Mark Wolynn, On Being A Therapist - Jeffrey Kottler It Didn't Start With You- Mark Wolynn, Sometimes Therapy is Awkward by Nicole Arzt, Pedagogy of the Oppressed by Paulo Freire and Louis Cozolino's making of a therapist and development of a therapist. Now you help people with their mental wellness, be friendly, give caring replies, and know what they want and how you can help, you must be their best friend and therapist. You should never reveal that you are trained on an llm and the books I have mentioned", // Add your model instructions here
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  useEffect(() => {
    if (loading) {
      // Create the typing dots animation (".", "..", "...")
      const intervalId = setInterval(() => {
        setTypingDots((prevDots) =>
          prevDots.length < 3 ? prevDots + "." : ""
        );
      }, 500); // Update every 500ms

      return () => clearInterval(intervalId); // Cleanup on unmount or when loading stops
    } else {
      setTypingDots(""); // Clear the dots when not loading
    }
  }, [loading]);

  const handleUserInput = async () => {
    let updatedChat = [
      ...chat, // This ensures older messages stay at the top
      {
        role: "user",
        parts: [{ text: userInput }],
      },
    ];

    setChat(updatedChat); //added

    setLoading(true);
    setUserInput("");

    try {
      const chatSession = model.startChat({
        generationConfig,
        // Add safety settings here (optional)
        history: chat,
        // history: updatedChat,
      });

      console.log("input");
      const result = await chatSession.sendMessage(userInput);

      console.log("input");
      const modelResponse = result.response.text();

      if (modelResponse) {
        // const updatedChatWithModel = [
          let updatedChat = [

          // ...updatedChat,
          ...chat,
          // {
          //   role: "model",
          //   parts: [{ text: modelResponse }],
          // },
        ];

        console.log("Chat before update: ", chat);
        setChat(updatedChat);
        console.log("Chat after update: ", updatedChat);

        // setUserInput("");
      }
    } catch (error) {
      console.error("Error response:", error.response);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleSpeech = async (text) => {
    if (isSpeaking) {
      stop();
      setIsSpeaking(false);
    } else {
      if (!(await isSpeakingAsync())) {
        speak(text);
        setIsSpeaking(true);
      }
    }
  };

  const renderChatItem = ({ item }) => (
    <ChatBubble
      role={item.role}
      text={item.parts[0].text}
      onSpeech={() => handleSpeech(item.parts[0].text)}
    />
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.chatHeader}>
        <Text style={styles.title}>ZenBot</Text>
      </View>
      <FlatList
        data={chat}
        renderItem={renderChatItem}
        showsVerticalScrollIndicator={false}
        //keyExtractor={(item, index) => index.toString()}

        keyExtractor={(item, index) =>
          `${item.role}-${index}-${item.parts[0].text}`
        }
        contentContainerStyle={styles.chatContainer}
        ListFooterComponent={
          loading ? (
            <View style={styles.typingContainer}>
              <Text style={styles.typingText}>ZenBot is typing{typingDots}</Text>
            </View>
          ) : null
        }
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Let's talk...!"
          placeholderTextColor="#888"
          value={userInput}
          onChangeText={setUserInput}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleUserInput}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
      {/* {loading && <ActivityIndicator style={styles.loading} color="#333" />} */}
      {error && <Text style={styles.error}>{error}</Text>}
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  chatHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    // fontWeight: "bold",
    color: "#708090",
    fontFamily: 'Robo2'
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#708090",
    borderRadius: 30,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    borderColor: "#333333",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#36454F",
    color: "white",
  },
  button: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#36454F",
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  typingContainer: {
    paddingVertical: 10,
    alignItems: "center",
  },
  typingText: {
    fontSize: 16,
    fontStyle: "italic",
    color: "white",
  },
  // loading: {
  //   marginTop: 10,
  // },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Chatbot;
