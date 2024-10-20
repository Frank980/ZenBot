// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default function OptionCard({option, selectImportant}) {
//     return (
//       <View style={[{padding: 15, }, selectImportant==option.title&&{borderWidth: 2}]}>
//         <Text style={{fontSize: 16, fontFamily: 'outfit-semib'}}> {option?.title} </Text>
//         <Text style={{fontSize: 16, fontFamily: 'outfit-regular'}}> {option?.desc} </Text>
//         <Text style={{fontSize: 16, fontFamily: 'outfit-regular'}}> {option?.icon} </Text>
//       </View>
//     )
// }









//White theme


import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default function OptionCard({ option, selectImportant }) {
  const isSelected = selectImportant?.id === option?.id;

  // Create an animated scale value
  const scaleValue = new Animated.Value(isSelected ? 1.1 : 1);

  // Animate scale on selection
  Animated.spring(scaleValue, {
    toValue: isSelected ? 1.1 : 1,
    friction: 4,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }, isSelected && styles.selectedCard]}>
      <Text style={styles.icon}>{option?.icon}</Text>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {option?.title}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 100, // Fixed width to prevent multi-line titles
    alignItems: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    // Adding shadow for a cool effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  selectedCard: {
    borderColor: '#3498db',
    borderWidth: 2,
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 14, // Slightly smaller to fit better
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    width: '100%',
  },
});
















//Just Dark theme

// import React from 'react';
// import { Text, View, StyleSheet, Animated } from 'react-native';

// export default function OptionCard({ option, selectImportant }) {
//   const isSelected = selectImportant?.id === option?.id;

//   // Create an animated scale value
//   const scaleValue = new Animated.Value(isSelected ? 1.1 : 1);

//   // Animate scale on selection
//   Animated.spring(scaleValue, {
//     toValue: isSelected ? 1.1 : 1,
//     friction: 4,
//     useNativeDriver: true,
//   }).start();

//   return (
//     <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }, isSelected && styles.selectedCard]}>
//       <Text style={styles.icon}>{option?.icon}</Text>
//       <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
//         {option?.title}
//       </Text>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     width: 100, // Fixed width to prevent multi-line titles
//     alignItems: 'center',
//     padding: 15,
//     margin: 10,
//     borderRadius: 80,
//     backgroundColor: '#2C2C2C', // Dark background color for the card
//     justifyContent: 'center',
//     // Shadow for dark mode
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 8,
//   },
//   selectedCard: {
//     borderColor: '#00BFFF', // Light cyan/teal border for selected card
//     borderWidth: 2,
//   },
//   icon: {
//     fontSize: 30,
//     marginBottom: 10,
//     color: '#FFFFFF', // White icon for contrast in dark mode
//   },
//   title: {
//     fontSize: 14, // Slightly smaller to fit better
//     fontFamily: 'outfit-bold',
//     textAlign: 'center',
//     width: '100%',
//     color: '#CCCCCC', // Light grey text color for titles
//   },
// });


