// import React, { Component, useContext, useEffect, useState } from 'react'
// import { FlatList, Text, TouchableOpacity, View } from 'react-native'
// import {CreateJourneyContext} from '../../context/CreateJourneyContext'
// import { useNavigation } from 'expo-router';
// import {selectOccasionList} from './../../constants/Options'
// import OptionCard from '../../components/CreateJourney/OptionCard';

// export default function SelectImportant() {

//     const {userData, setUserData} = useContext(CreateJourneyContext);

//     const navigation = useNavigation();
//     const [selectImportant, setSelectImportant] = useState();
//     useEffect(()=>{
//       navigation.setOptions({
//         headerShown: true,
//         headerTransparent: true,
//         headerTitle: 'Select Occassion'
//       }, [])
//     })
//     return (
//       <View style={{padding: 25, paddingTop: 75, backgroundColor: 'white', height: '100%'}}>
//         <Text style={{margin: 10, fontFamily: 'outfit-bold', fontSize: 35}}> What's the important day about? </Text>

//         <View style={{marginTop: 20, fontFamily: 'outfit-semib', fontSize: 20}}>
//           <Text>Choose the Most Appropriate one</Text>


//           <FlatList data={selectOccasionList}
//             renderItem={({item, index})=>(
//               <TouchableOpacity onPress={()=>setSelectImportant(item.title)}>
//                 <OptionCard option={item} selectImportant={selectImportant}/>
//               </TouchableOpacity>
//             )}
//           />
//         </View>
//       </View>
//     )
// }
























//White theme

import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { CreateJourneyContext } from '../../context/CreateJourneyContext';
import { useNavigation } from 'expo-router';
import { selectOccasionList } from './../../constants/Options';
import OptionCard from '../../components/CreateJourney/OptionCard';
import { useRouter } from 'expo-router';

export default function SelectImportant() {
  const { userData, setUserData } = useContext(CreateJourneyContext);
  const navigation = useNavigation();
  const [selectImportant, setSelectImportant] = useState();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Select Occasion',
    });
  }, []);

  useEffect(() => {
    setUserData({ ...userData, Occasion: selectImportant });
  }, [selectImportant]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>What's the important day about?</Text>

      <Text style={styles.subHeaderText}>Choose the Most Appropriate one</Text>

      <FlatList
        data={selectOccasionList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectImportant(item)} style={styles.optionContainer}>
            <OptionCard option={item} selectImportant={selectImportant} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3} // Ensures 3 options in a row
        columnWrapperStyle={styles.row} // Custom style for rows
        showsVerticalScrollIndicator={false} // Hides the scrollbar
      />

      {/* Styled Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/create-journey/selectDates')}>
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
    flex: 1 / 3, // Ensure each option takes 1/3 of the row's width
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





//Just Dark theme

// import React, { useContext, useEffect, useState } from 'react';
// import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
// import { CreateJourneyContext } from '../../context/CreateJourneyContext';
// import { useNavigation } from 'expo-router';
// import { selectOccasionList } from './../../constants/Options';
// import OptionCard from '../../components/CreateJourney/OptionCard';
// import { useRouter } from 'expo-router';

// export default function SelectImportant() {
//   const { userData, setUserData } = useContext(CreateJourneyContext);
//   const navigation = useNavigation();
//   const [selectImportant, setSelectImportant] = useState();
//   const router = useRouter();

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//       headerTransparent: true,
//       headerTitle: 'Select Occasion',
//     });
//   }, []);

//   useEffect(() => {
//     setUserData({ ...userData, Occasion: selectImportant });
//   }, [selectImportant]);

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>What's the important day about?</Text>
//       <Text style={styles.subHeaderText}>Choose the Most Appropriate one</Text>

//       <FlatList
//         data={selectOccasionList}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => setSelectImportant(item)} style={styles.optionContainer}>
//             <OptionCard option={item} selectImportant={selectImportant} />
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         numColumns={3}
//         columnWrapperStyle={styles.row}
//         showsVerticalScrollIndicator={false}
//       />

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
//     backgroundColor: '#1C1C1C', // Dark theme background
//     height: '100%',
//   },
//   headerText: {
//     margin: 10,
//     fontFamily: 'outfit-bold',
//     fontSize: 35,
//     color: '#FFFFFF', // White text
//   },
//   subHeaderText: {
//     marginTop: 20,
//     fontFamily: 'outfit-semib',
//     fontSize: 20,
//     color: '#AAAAAA', // Light grey for sub-header text
//   },
//   optionContainer: {
//     flexBasis: '30%', // Each item takes up 30% of the row
//     margin: 5, // Add spacing between the items
//     justifyContent: 'center', // Center items in their space
//     alignItems: 'center', // Center items in their space
//   },
//   row: {
//     justifyContent: 'space-evenly', // Ensure items are spread out evenly
//     paddingHorizontal: 10, // Add padding to prevent overflow
//   },
//   continueButton: {
//     backgroundColor: '#FFD700', // Golden accent for the continue button
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 30,
//     shadowColor: '#FFD700',
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     elevation: 10, // Elevated for a floating effect
//   },
//   continueButtonText: {
//     color: 'black',
//     fontFamily: 'outfit-bold',
//     fontSize: 18,
//   },
// });
