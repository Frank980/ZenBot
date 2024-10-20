// import React, {useState} from "react";
// import axios from "axios";
// import { View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native";
// import { bundlerModuleNameResolver } from "typescript";


// const ChatBubble =({role, text, onSpeech})=>{
//     return(
//         <View style={[styles.chatItem, role==="user"? styles.userChatItem : styles.modelChatItem]}>
//             <Text style={styles.chatText}>{text}</Text>
//             {role == "model" && (
//                 <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
//                     <Ionicons name="volume-high-outline" size={24} color="#fff"/>
//                 </TouchableOpacity>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     chatItem: {
//         marginBottom: 10,
//         pading: 10,
//         borderRadius: 10,
//         maxWidth: "70%",
//         position: "relative",
//     },
//     userChatItem:{
//         alignSelf: "flex-end",
//         backgroundColor: "#007AF",

//     },
//     modelChatItem:{
//         alignSelf:"flex-start",
//         backgroundColor: "#000",
        
//     },
//     chatText:{
//         fontSize: 16,
//         color: "#fff",
//     },
//     speakerIcon:{
//         position: "absolute",
//         bottom: 5,
//         right: 5,
//     },
// });

// export default ChatBubble;



import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChatBubble = ({ role, text, onSpeech }) => {
  return (
    <View style={[styles.chatItem, role === "user" ? styles.userChatItem : styles.modelChatItem]}>
      <Text style={styles.chatText}>{text}</Text>
      {role === "model" && (
        <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
          <Ionicons name="volume-high-outline" size={20} color="#333" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    marginBottom: 12,
    padding: 14,
    borderRadius: 18,
    maxWidth: "75%",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userChatItem: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF", // Bright blue for user messages
    borderTopRightRadius: 0,
  },
  modelChatItem: {
    alignSelf: "flex-start",
    backgroundColor: "#4A4A4A", // Darker color for bot messages
    borderTopLeftRadius: 0,
  },
  chatText: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 22,
  },
  speakerIcon: {
    position: "absolute",
    bottom: 5,
    right: 10,
    padding: 4,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});

export default ChatBubble;
