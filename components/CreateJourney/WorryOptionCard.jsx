// import React from 'react';
// import { Text, View, StyleSheet, Animated } from 'react-native';

// export default function WorryOptionCard({ option, selectWorry }) {
//   const isSelected = selectWorry?.id === option?.id;

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
//     borderRadius: 10,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     // Adding shadow for a cool effect
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   selectedCard: {
//     borderColor: '#3498db',
//     borderWidth: 2,
//   },
//   icon: {
//     fontSize: 30,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 14, // Slightly smaller to fit better
//     fontFamily: 'outfit-bold',
//     textAlign: 'center',
//     width: '100%',
//   },
// });



//Light Theme
import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default function WorryOptionCard({ option, selectWorry }) {
  const isSelected = selectWorry; // This now checks if the worry is selected directly
  const scaleValue = useRef(new Animated.Value(1)).current; // Create a ref for the scale value

  // Use effect to animate scale on selection change
  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: isSelected ? 1.1 : 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, [isSelected]); // Dependency on isSelected

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
    width: 200, // Fixed width to prevent multi-line titles
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











//Dark theme

// import React, { useEffect, useRef } from 'react';
// import { Text, View, StyleSheet, Animated } from 'react-native';

// export default function WorryOptionCard({ option, selectWorry }) {
//   const isSelected = selectWorry; // This now checks if the worry is selected directly
//   const scaleValue = useRef(new Animated.Value(1)).current; // Create a ref for the scale value

//   // Use effect to animate scale on selection change
//   useEffect(() => {
//     Animated.spring(scaleValue, {
//       toValue: isSelected ? 1.1 : 1,
//       friction: 4,
//       useNativeDriver: true,
//     }).start();
//   }, [isSelected]); // Dependency on isSelected

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
//     width: 100,
//     alignItems: 'center',
//     padding: 15,
//     margin: 10,
//     borderRadius: 10,
//     backgroundColor: '#333333', // Dark card background
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   selectedCard: {
//     borderColor: '#FFD700', // Golden border for selected card
//     borderWidth: 2,
//   },
//   icon: {
//     fontSize: 30,
//     marginBottom: 10,
//     color: '#FFD700', // Golden icons
//   },
//   title: {
//     fontSize: 14,
//     fontFamily: 'outfit-bold',
//     textAlign: 'center',
//     width: '100%',
//     color: '#FFFFFF', // White text for dark theme
//   },
// });
