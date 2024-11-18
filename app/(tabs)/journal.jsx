// import React, { useState, useEffect } from "react";
// import Entypo from "@expo/vector-icons/Entypo";
// import {
//   Text,
//   View,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Pressable,
//   ActivityIndicator,
// } from "react-native";
// import { auth, db } from "../../configs/FirebaseConfig";
// import {
//   doc,
//   collection,
//   addDoc,
//   getDocs,
//   query,
//   orderBy,
// } from "firebase/firestore";
// import LottieView from "lottie-react-native";

// // You'll need to install the @google/generative-ai package
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI("AIzaSyDQZepO1vC1hyTinrajHwE8xKjgy86LaQg");

// export default function Journal() {
//   const [isInputVisible, setInputVisible] = useState(true);
//   const [journalText, setJournalText] = useState("");
//   const [entries, setEntries] = useState([]);
//   const [expandedEntryIndex, setExpandedEntryIndex] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSaving, setIsSaving] = useState(false);
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (user) {
//       fetchJournalEntries();
//     }
//   }, [user]);

//   const fetchJournalEntries = async () => {
//     if (!user) return;

//     setIsLoading(true);
//     const userDocRef = doc(db, "UserJournals", user.email);
//     const userJournalsCollectionRef = collection(userDocRef, "journals");

//     try {
//       const q = query(userJournalsCollectionRef, orderBy("date", "desc"));
//       const querySnapshot = await getDocs(q);
//       let fetchedEntries = [];
//       querySnapshot.forEach((doc) => {
//         fetchedEntries.push(doc.data());
//       });
//       setEntries(fetchedEntries);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching journal entries: ", error);
//       setIsLoading(false);
//     }
//   };

//   const handleAddPress = () => {
//     setInputVisible(true);
//     setJournalText("");
//   };

//   const processWithGemini = async (text) => {
//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//       // Request for rephrasing
//       const rephrasingPrompt = `Rephrase the following journal entry into a well-structured, clear version with good paragraphs and proper flow and do not add anything new just rephrase the input text to a better version: "${text}"`;
//       const rephrasingResult = await model.generateContent(rephrasingPrompt);
//       const rephrasedText = rephrasingResult.response.text();

//       // Request for emotion analysis
//       const emotionPrompt = `Analyze the following journal entry and return only one word representing the most dominant emotion (no explanation, just the emotion): "${text}"`;
//       const emotionResult = await model.generateContent(emotionPrompt);
//       const dominantEmotion = emotionResult.response.text().trim();

//       // Request for suggestion
//       const suggestionPrompt = `Analyze the following journal entry and return a proper suggestion on how one can improve the situation if it is negative and if the emotion is positive give a postive or encouragive feedback, this should not be of more than 50 words: "${text}"`;
//       const suggestionResult = await model.generateContent(suggestionPrompt);
//       const suggestionText = suggestionResult.response.text().trim();

//       return {
//         rephrasedText,
//         dominantEmotion,
//         suggestionText,
//       };
//     } catch (error) {
//       console.error("Error processing with Gemini:", error);
//       throw error;
//     }
//   };


import React, { useState, useEffect } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { auth, db } from "../../configs/FirebaseConfig";
import {
  doc,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  getDoc,
} from "firebase/firestore";
import LottieView from "lottie-react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Journal() {
  const [isInputVisible, setInputVisible] = useState(true);
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState([]);
  const [expandedEntryIndex, setExpandedEntryIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [genAI, setGenAI] = useState(null);
  const user = auth.currentUser;

  // Fetch API key and initialize Gemini
  useEffect(() => {
    const initializeGemini = async () => {
      try {
        // Fetch API key from Firestore using the new structure
        const apiKeyDoc = await getDoc(doc(db, "AppConfig", "apiKeys"));
        if (apiKeyDoc.exists()) {
          const { key } = apiKeyDoc.data(); // Updated to match the field name "key"
          const newGenAI = new GoogleGenerativeAI(key);
          setGenAI(newGenAI);
        } else {
          console.error("API key not found in Firestore");
          alert("Error initializing the app. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching API key:", error);
        alert("Error initializing the app. Please try again later.");
      }
    };

    initializeGemini();
  }, []);

  useEffect(() => {
    if (user) {
      fetchJournalEntries();
    }
  }, [user]);

  const fetchJournalEntries = async () => {
    if (!user) return;

    setIsLoading(true);
    // const userDocRef = doc(db, "UserJournals", user.email);
    const userDocRef = doc(db, "UserJournals",user.uid);
    
    const userJournalsCollectionRef = collection(userDocRef, "journals");

    try {
      const q = query(userJournalsCollectionRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      let fetchedEntries = [];
      querySnapshot.forEach((doc) => {
        fetchedEntries.push(doc.data());
      });
      setEntries(fetchedEntries);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching journal entries: ", error);
      setIsLoading(false);
    }
  };

  const processWithGemini = async (text) => {
    if (!genAI) {
      throw new Error("Gemini AI not initialized");
    }

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      // Request for rephrasing
      // const rephrasingPrompt = `Rephrase the following journal entry into a well-structured, clear version with good paragraphs and proper flow and do not add anything new just rephrase the input text to a better version: "${text}"`;
      // const rephrasingResult = await model.generateContent(rephrasingPrompt);
      // const rephrasedText = rephrasingResult.response.text();

      // Request for emotion analysis
      const emotionPrompt = `Analyze the following journal entry and return only one word representing the most dominant emotion (no explanation, just the emotion): "${text}"`;
      const emotionResult = await model.generateContent(emotionPrompt);
      const dominantEmotion = emotionResult.response.text().trim();

      // Request for suggestion
      const suggestionPrompt = `Analyze the following journal entry and return a proper suggestion on how one can improve the situation if it is negative and if the emotion is positive give a postive or encouragive feedback, this should not be of more than 50 words: "${text}"`;
      const suggestionResult = await model.generateContent(suggestionPrompt);
      const suggestionText = suggestionResult.response.text().trim();

      return {
        // rephrasedText,
        dominantEmotion,
        suggestionText,
      };
    } catch (error) {
      console.error("Error processing with Gemini:", error);
      throw error;
    }
  };

    const handleAddPress = () => {
    setInputVisible(true);
    setJournalText("");
  };

  const handleDonePress = async () => {
    if (!user) {
      alert("User not logged in.");
      return;
    }

    if (journalText.trim()) {
      setIsSaving(true);

      try {
        // Process with Gemini AI
        const { rephrasedText, dominantEmotion, suggestionText } =
          await processWithGemini(journalText);

        const newEntry = {
          originalText: journalText,
          // rephrasedText: rephrasedText,
          dominantEmotion: dominantEmotion,
          suggestionText: suggestionText,
          date: new Date().toLocaleDateString(),
          timestamp: new Date(),
        };

        // const userDocRef = doc(db, "UserJournals", user.email);
        const userDocRef = doc(db, "UserJournals", user.uid);
        const userJournalsCollectionRef = collection(userDocRef, "journals");

        await addDoc(userJournalsCollectionRef, newEntry);

        setEntries([newEntry, ...entries]);
        setJournalText("");
        setInputVisible(false);
      } catch (error) {
        console.error("Error saving journal entry:", error);
        alert("Failed to save your journal entry.");
      } finally {
        setIsSaving(false);
      }
    } else {
      alert("Please write something in the journal");
    }
  };

  // Rest of your existing functions...
  const toggleEntryExpansion = (index) => {
    setExpandedEntryIndex(index === expandedEntryIndex ? null : index);
  };

  const renderJournalEntry = (entry, index) => (
    <Pressable
      key={index}
      style={[
        styles.journalEntry,
        expandedEntryIndex === index
          ? styles.expandedEntry
          : styles.collapsedEntry,
      ]}
      onPress={() => toggleEntryExpansion(index)}
    >
      <Text style={styles.entryDate}>{entry.date}</Text>

      {/* Emotion Badge */}
      <View style={styles.emotionBadge}>
        <Text style={styles.emotionText}>{entry.dominantEmotion}</Text>
      </View>

      {/* Rephrased Content */}
      <Text
        style={styles.entryText}
        numberOfLines={expandedEntryIndex === index ? undefined : 4}
      >
        {entry.originalText}
      </Text>

      {/* Show original text when expanded */}
      {expandedEntryIndex === index && (
        <View>
          {/* Rephrased Content */}
          <View style={styles.originalTextContainer}>
            <Text style={styles.originalTextLabel}>Key Takeaways:</Text>
            <Text
              style={styles.entryText}
              numberOfLines={expandedEntryIndex === index ? undefined : 4}
            >
              {entry.suggestionText}
            </Text>
          </View>

          {/* <View style={styles.originalTextContainer}>
            <Text style={styles.originalTextLabel}>Entry:</Text>
            <Text style={styles.originalText}>{entry.originalText}</Text>
          </View> */}
        </View>
      )}
    </Pressable>
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.loaderContainer}>
          <LottieView
            source={require("../../assets/images/Loader2.json")}
            autoPlay
            loop
            style={styles.loader}
          />
        </View>
      );
    }

    return (
      <>
        {isInputVisible && (
          <View style={styles.inputContainer}>
            <Text style={styles.dateText}>
              {new Date().toLocaleDateString()}
            </Text>
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="Write your journal here..."
              value={journalText}
              onChangeText={setJournalText}
              editable={!isSaving}
            />
            <TouchableOpacity
              style={[styles.doneButton, isSaving && styles.doneButtonDisabled]}
              onPress={handleDonePress}
              disabled={isSaving}
            >
              {isSaving ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={styles.doneButtonText}>Done</Text>
              )}
            </TouchableOpacity>
          </View>
        )}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.entriesContainer}
        >
          {entries.length === 0 ? (
            <Text style={styles.noEntriesText}>No journal entries yet</Text>
          ) : (
            entries.map((entry, index) => renderJournalEntry(entry, index))
          )}
        </ScrollView>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <TouchableOpacity
        style={styles.addJournal}
        onPress={handleAddPress}
        disabled={isSaving}
      >
        <Entypo name="plus" size={28} color="#7CC9FF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 200,
    height: 200,
  },
  noEntriesText: {
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
  inputContainer: {
    // position: 'absolute',
    marginTop: 50,
    width: "90%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  dateText: {
    color: "#111111",
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: "white",
    color: "black",
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    minHeight: 100,
    maxHeight: 200, // Limit max height to allow compression
    textAlignVertical: "top",
  },
  doneButton: {
    marginTop: 10,
    alignSelf: "flex-end",
    backgroundColor: "grey",
    padding: 8,
    borderRadius: 5,
  },
  doneButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  entriesContainer: {
    flex: 1,
    width: "90%",
    marginTop: 35,
  },
  journalEntry: {
    backgroundColor: "#7CC9FF",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  expandedEntry: {
    height: "auto",
  },
  collapsedEntry: {
    height: 140,
    overflow: "hidden",
  },
  entryDate: {
    color: "#FFD700",
    fontSize: 14,
    marginBottom: 5,
  },
  entryText: {
    color: "black",
    fontSize: 16,
  },
  doneButtonDisabled: {
    opacity: 0.7,
  },
  addJournal: {
    position: "absolute",
    backgroundColor: "black",
    right: 10,
    bottom: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 10,
  },
  emotionBadge: {
    backgroundColor: "#FFE4E1", // Soft pink background
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
    alignSelf: "flex-start",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#FFB6C1",
  },
  emotionText: {
    color: "#FF69B4",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
  originalTextContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: 8,
  },
  originalTextLabel: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666",
  },
  originalText: {
    color: "#666",
    fontStyle: "italic",
  },
});
