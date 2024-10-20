// import React, { useContext, useEffect, useState } from 'react';
// import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import { CreateJourneyContext } from '../../context/CreateJourneyContext';
// import { useNavigation } from 'expo-router';
// import { selectWorryList } from './../../constants/Options';
// import WorryOptionCard from '../../components/CreateJourney/WorryOptionCard';
// import { useRouter } from 'expo-router';

// export default function SelectImportant() {
//   const { userData, setUserData } = useContext(CreateJourneyContext);
//   const navigation = useNavigation();
//   const [selectWorry, setSelectWorry] = useState();
//   const router = useRouter();

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: 'Select Occasion',
//     });
//   }, []);

//   useEffect(() => {
//     setUserData({ ...userData, worry: selectWorry });
//   }, [selectWorry]);

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>What do you think is bothering you?</Text>

//       <Text style={styles.subHeaderText}>Choose the Most Appropriate one</Text>

//       <FlatList
//         data={selectWorryList}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => setSelectWorry(item)} style={styles.optionContainer}>
//             <WorryOptionCard option={item} selectWorry={selectWorry} />
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         numColumns={3} // Ensures 3 options in a row
//         columnWrapperStyle={styles.row} // Custom style for rows
//         showsVerticalScrollIndicator={false} // Hides the scrollbar
//       />

//       {/* Styled Continue Button */}
//       <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/create-journey/selectDates')}>
//         <Text style={styles.continueButtonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//     paddingTop: 75,
//     backgroundColor: 'white',
//     height: '100%',
//   },
//   headerText: {
//     margin: 10,
//     fontFamily: 'outfit-bold',
//     fontSize: 35,
//   },
//   subHeaderText: {
//     marginTop: 20,
//     fontFamily: 'outfit-semib',
//     fontSize: 20,
//   },
//   optionContainer: {
//     flex: 1 / 3, // Ensure each option takes 1/3 of the row's width
//   },
//   row: {
//     justifyContent: 'space-between', // Spread items across the row
//   },
//   // New styles for the Continue button
//   continueButton: {
//     backgroundColor: '#4CAF50', // Green background color
//     padding: 15,
//     borderRadius: 25, // Rounded corners
//     alignItems: 'center', // Center text horizontally
//     justifyContent: 'center', // Center text vertically
//     marginTop: 30,
//   },
//   continueButtonText: {
//     color: 'white', // White text color
//     fontFamily: 'outfit-bold', // Use bold font
//     fontSize: 18,
//   },
// });




// import React, { useContext, useEffect, useState } from 'react';
// import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import { CreateJourneyContext } from '../../context/CreateJourneyContext';
// import { useNavigation } from 'expo-router';
// import { selectWorryList } from './../../constants/Options';
// import WorryOptionCard from '../../components/CreateJourney/WorryOptionCard';
// import { useRouter } from 'expo-router';

// export default function SelectImportant() {
//   const { userData, setUserData } = useContext(CreateJourneyContext);
//   const navigation = useNavigation();
//   const [selectedWorries, setSelectedWorries] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: 'Select Occasion',
//     });
//   }, []);

//   useEffect(() => {
//     setUserData({ ...userData, worry: selectedWorries });
//   }, [selectedWorries]);

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   const handleWorrySelect = (item) => {
//     // Check if the item is already selected
//     if (selectedWorries.includes(item)) {
//       // If already selected, remove it
//       setSelectedWorries(selectedWorries.filter(worry => worry !== item));
//     } else {
//       // If not selected, add it if we have less than 3
//       if (selectedWorries.length < 3) {
//         setSelectedWorries([...selectedWorries, item]);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>What do you think is bothering you?</Text>

//       <Text style={styles.subHeaderText}>Choose the Most Appropriate one</Text>

//       <FlatList
//         data={selectWorryList}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleWorrySelect(item)} style={styles.optionContainer}>
//             <WorryOptionCard option={item} selectWorry={selectedWorries.includes(item)} />
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         numColumns={3} // Ensures 3 options in a row
//         columnWrapperStyle={styles.row} // Custom style for rows
//         showsVerticalScrollIndicator={false} // Hides the scrollbar
//       />

//       {/* Styled Continue Button */}
//       <TouchableOpacity
//         style={styles.continueButton}
//         onPress={() => router.push('/create-journey/selectDates')}
//         disabled={selectedWorries.length === 0} // Disable if no worries selected
//       >
//         <Text style={styles.continueButtonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//     paddingTop: 75,
//     backgroundColor: 'white',
//     height: '100%',
//   },
//   headerText: {
//     margin: 10,
//     fontFamily: 'outfit-bold',
//     fontSize: 35,
//   },
//   subHeaderText: {
//     marginTop: 20,
//     fontFamily: 'outfit-semib',
//     fontSize: 20,
//   },
//   optionContainer: {
//     flex: 1 / 3, // Ensure each option takes 1/3 of the row's width
//   },
//   row: {
//     justifyContent: 'space-between', // Spread items across the row
//   },
//   // New styles for the Continue button
//   continueButton: {
//     backgroundColor: '#4CAF50', // Green background color
//     padding: 15,
//     borderRadius: 25, // Rounded corners
//     alignItems: 'center', // Center text horizontally
//     justifyContent: 'center', // Center text vertically
//     marginTop: 30,
//   },
//   continueButtonText: {
//     color: 'white', // White text color
//     fontFamily: 'outfit-bold', // Use bold font
//     fontSize: 18,
//   },
// });









// Light Theme

import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { CreateJourneyContext } from '../../context/CreateJourneyContext';
import { useNavigation } from 'expo-router';
import { selectWorryList } from './../../constants/Options';
import WorryOptionCard from '../../components/CreateJourney/WorryOptionCard';
import { useRouter } from 'expo-router';

export default function SelectImportant() {
  const { userData, setUserData } = useContext(CreateJourneyContext);
  const navigation = useNavigation();
  const [selectedWorries, setSelectedWorries] = useState({}); // Changed to an object
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Select Occasion',
    });
  }, []);

  useEffect(() => {
    // Update userData with selected worries
    setUserData({ ...userData, ...selectedWorries });
  }, [selectedWorries]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleWorrySelect = (item) => {
    // Check if the item is already selected
    if (selectedWorries[item.id]) {
      // If already selected, remove it
      const updatedWorries = { ...selectedWorries };
      delete updatedWorries[item.id];
      setSelectedWorries(updatedWorries);
    } else {
      // If not selected, add it if we have less than 3
      if (Object.keys(selectedWorries).length < 3) {
        setSelectedWorries(prev => ({
          ...prev,
          [item.id]: item.title, // Store item with its id as key
        }));
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What do you think is bothering you?</Text>
      <Text style={styles.subHeaderText}>Choose the Most Appropriate one</Text>

      <FlatList
        data={selectWorryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleWorrySelect(item)} style={styles.optionContainer}>
            <WorryOptionCard option={item} selectWorry={!!selectedWorries[item.id]} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3} // Ensures 3 options in a row
        columnWrapperStyle={styles.row} // Custom style for rows
        showsVerticalScrollIndicator={false} // Hides the scrollbar
      />

      {/* Styled Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push('/create-journey/writeDesc')}
        disabled={Object.keys(selectedWorries).length === 0} // Disable if no worries selected
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: 'white',
    height: '100%',
  },
  headerText: {
    margin: 10,
    fontFamily: 'outfit-bold',
    fontSize: 35,
  },
  subHeaderText: {
    marginTop: 20,
    fontFamily: 'outfit-semib',
    fontSize: 20,
  },
  optionContainer: {
    flex: 1/3, // Ensure each option takes 1/3 of the row's width
  //  display: 'flex',
  //  flexDirection: 'column',
  //  alignContent: 'center',
  //  justifyContent: 'center',
  //  width: 100
  },
  row: {
    justifyContent: 'space-between', // Spread items across the row
  },
  // New styles for the Continue button
  continueButton: {
    backgroundColor: '#4CAF50', // Green background color
    padding: 15,
    borderRadius: 25, // Rounded corners
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    marginTop: 30,
  },
  continueButtonText: {
    color: 'white', // White text color
    fontFamily: 'outfit-bold', // Use bold font
    fontSize: 18,
  },
});























// import React, { useContext, useEffect, useState } from 'react';
// import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import { CreateJourneyContext } from '../../context/CreateJourneyContext';
// import { useNavigation } from 'expo-router';
// import { selectWorryList } from './../../constants/Options';
// import WorryOptionCard from '../../components/CreateJourney/WorryOptionCard';
// import { useRouter } from 'expo-router';

// export default function SelectImportant() {
//   const { userData, setUserData } = useContext(CreateJourneyContext);
//   const navigation = useNavigation();
//   const [selectedWorries, setSelectedWorries] = useState({});
//   const router = useRouter();

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: 'Select Occasion',
//     });
//   }, []);

//   useEffect(() => {
//     // Update userData with only currently selected worries
//     const updatedUserData = { ...userData };
//     Object.keys(updatedUserData).forEach((key) => {
//       if (!selectedWorries[key] && key !== "otherUserDataFields") {
//         delete updatedUserData[key];
//       }
//     });
//     setUserData({ ...updatedUserData, ...selectedWorries });
//   }, [selectedWorries]);

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   const handleWorrySelect = (item) => {
//     const currentSelection = { ...selectedWorries };

//     if (currentSelection[item.id]) {
//       // If already selected, remove it
//       delete currentSelection[item.id];
//     } else {
//       // If not selected, add it and remove the oldest if we exceed 3 items
//       if (Object.keys(currentSelection).length === 3) {
//         // Remove the first selected worry to make space
//         const firstKey = Object.keys(currentSelection)[0];
//         delete currentSelection[firstKey];
//       }
//       currentSelection[item.id] = item.title;
//     }

//     setSelectedWorries(currentSelection);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>What do you think is bothering you?</Text>
//       <Text style={styles.subHeaderText}>Choose the Most Appropriate one</Text>

//       <FlatList
//         data={selectWorryList}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleWorrySelect(item)} style={styles.optionContainer}>
//             <WorryOptionCard option={item} selectWorry={!!selectedWorries[item.id]} />
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         numColumns={3} // Ensures 3 options in a row
//         columnWrapperStyle={styles.row} // Custom style for rows
//         showsVerticalScrollIndicator={false} // Hides the scrollbar
//       />

//       {/* Styled Continue Button */}
//       <TouchableOpacity
//         style={styles.continueButton}
//         onPress={() => router.push('/create-journey/writeDesc')}
//         disabled={Object.keys(selectedWorries).length === 0} // Disable if no worries selected
//       >
//         <Text style={styles.continueButtonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//     paddingTop: 75,
//     backgroundColor: 'white',
//     height: '100%',
//   },
//   headerText: {
//     margin: 10,
//     fontFamily: 'outfit-bold',
//     fontSize: 35,
//   },
//   subHeaderText: {
//     marginTop: 20,
//     fontFamily: 'outfit-semib',
//     fontSize: 20,
//   },
//   optionContainer: {
//     flex: 1 / 3, // Ensure each option takes 1/3 of the row's width
//   },
//   row: {
//     justifyContent: 'space-between', // Spread items across the row
//   },
//   // New styles for the Continue button
//   continueButton: {
//     backgroundColor: '#4CAF50', // Green background color
//     padding: 15,
//     borderRadius: 25, // Rounded corners
//     alignItems: 'center', // Center text horizontally
//     justifyContent: 'center', // Center text vertically
//     marginTop: 30,
//   },
//   continueButtonText: {
//     color: 'white', // White text color
//     fontFamily: 'outfit-bold', // Use bold font
//     fontSize: 18,
//   },
// });




















//Dark theme

// import React, { useContext, useEffect, useState } from 'react';
// import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import { CreateJourneyContext } from '../../context/CreateJourneyContext';
// import { useNavigation } from 'expo-router';
// import { selectWorryList } from './../../constants/Options';
// import WorryOptionCard from '../../components/CreateJourney/WorryOptionCard';
// import { useRouter } from 'expo-router';

// export default function SelectImportant() {
//   const { userData, setUserData } = useContext(CreateJourneyContext);
//   const navigation = useNavigation();
//   const [selectedWorries, setSelectedWorries] = useState({}); // Changed to an object
//   const router = useRouter();

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: 'Select Occasion',
//     });
//   }, []);

//   useEffect(() => {
//     // Update userData with selected worries
//     setUserData({ ...userData, ...selectedWorries });
//   }, [selectedWorries]);

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   const handleWorrySelect = (item) => {
//     // Check if the item is already selected
//     if (selectedWorries[item.id]) {
//       // If already selected, remove it
//       const updatedWorries = { ...selectedWorries };
//       delete updatedWorries[item.id];
//       setSelectedWorries(updatedWorries);
//     } else {
//       // If not selected, add it if we have less than 3
//       if (Object.keys(selectedWorries).length < 3) {
//         setSelectedWorries(prev => ({
//           ...prev,
//           [item.id]: item.title, // Store item with its id as key
//         }));
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>What do you think is bothering you?</Text>
//       <Text style={styles.subHeaderText}>Choose the Most Appropriate one</Text>

//       <FlatList
//         data={selectWorryList}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleWorrySelect(item)} style={styles.optionContainer}>
//             <WorryOptionCard option={item} selectWorry={!!selectedWorries[item.id]} />
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         numColumns={3} // Ensures 3 options in a row
//         columnWrapperStyle={styles.row} // Custom style for rows
//         showsVerticalScrollIndicator={false} // Hides the scrollbar
//       />

//       {/* Styled Continue Button */}
//       <TouchableOpacity
//         style={styles.continueButton}
//         onPress={() => router.push('/create-journey/writeDesc')}
//         disabled={Object.keys(selectedWorries).length === 0} // Disable if no worries selected
//       >
//         <Text style={styles.continueButtonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     padding: 25,
//     paddingTop: 75,
//     backgroundColor: '#1C1C1C', // Dark theme background
//     height: '100%',
//   },
//   headerText: {
//     margin: 10,
//     fontFamily: 'outfit-bold',
//     fontSize: 35,
//     color: '#FFD700', // Golden text
//   },
//   subHeaderText: {
//     marginTop: 20,
//     fontFamily: 'outfit-semib',
//     fontSize: 20,
//     color: '#AAAAAA', // Light gray text
//   },
//   optionContainer: {
//     // flex: 1 / 3,
//     flexBasis: '30%', // Each item takes up 30% of the row
//     margin: 5, // Add spacing between the items
//     justifyContent: 'center', // Center items in their space
//     alignItems: 'center', // Center items in their space
//     // margin: 5,
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   continueButton: {
//     backgroundColor: '#FFD700', // Golden background
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 30,
//     shadowColor: '#FFD700',
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     elevation: 10,
//   },
//   continueButtonText: {
//     color: '#000', // Dark text on golden button
//     fontFamily: 'outfit-bold',
//     fontSize: 18,
//   },
// });
