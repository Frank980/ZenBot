import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { CreateJourneyContext } from '../../context/CreateJourneyContext';
import { useRouter } from 'expo-router';

export default function WriteDesc() {
  const { userData, setUserData } = useContext(CreateJourneyContext);
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    setUserData({ ...userData, Description: description });
    router.push('/create-journey/reviewDesc'); // Replace '/next-page' with your actual route
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add a short description</Text>

      <TextInput
        style={styles.input}
        placeholder="Write 10 to 30 words about the occasion"
        value={description}
        onChangeText={setDescription}
        multiline
        maxLength={100} // Restricts input to around 30 words
        placeholderTextColor="white"
      />

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'outfit-bold',
    color: '#FFD700',
    fontSize: 28,
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    fontFamily: 'outfit-regular',
    color: 'white',
  },
  continueButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  continueButtonText: {
    color: 'white',
    fontFamily: 'outfit-bold',
    fontSize: 18,
  },
});
