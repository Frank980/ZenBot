import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Profile() {
    return (
      <View style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
        <Text style={{fontSize: 20, fontFamily: 'Robo', textAlign: 'center', color: 'white'}}>Under Construction</Text>
      </View>
    )
}


// import React from 'react';
// import { View, Text } from 'react-native';
// import { Video } from 'expo-av';  // Import Video component from expo-av
// import { StyleSheet } from 'react-native';

// export default function Profile() {
//   return (
//     <View style={styles.container}>
//       <Video
//         source={require('../../assets/videos/GuidedMed.mp4')}  // Replace with your video path
//         style={styles.video}
//         useNativeControls  // To show default video controls (play, pause, etc.)
//         resizeMode="contain"  // Resize the video to fit the screen
//         isLooping  // Makes the video loop
//       />
//       <Text style={styles.text}>Under Construction</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   video: {
//     width: '100%',
//     height: 300,  // Adjust the height as needed
//   },
//   text: {
//     fontSize: 20,
//     fontFamily: 'Robo',  // Ensure the font is loaded in your project
//     textAlign: 'center',
//     color: 'white',
//     marginTop: 20,
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { Camera, useCameraDevices, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';
// import { detectFaces } from 'vision-camera-face-detector';  // Assuming you're using a face detection plugin
// import 'react-native-reanimated';  // Required for worklets

// export default function Profile() {
//   // Request camera permission
//   const { hasPermission, requestPermission } = useCameraPermission();
//   const devices = useCameraDevices();
//   const device = devices.back;  // Using back camera for face detection
//   const [facesDetected, setFacesDetected] = useState([]);

//   useEffect(() => {
//     // Request permission on component mount
//     if (!hasPermission) {
//       requestPermission();
//     }
//   }, [hasPermission]);

//   // Frame Processor for detecting faces
//   const frameProcessor = useFrameProcessor((frame) => {
//     'worklet';
//     const faces = detectFaces(frame);
//     setFacesDetected(faces);  // Update the state with detected faces
//     if (faces.length > 0) {
//       console.log(`Detected ${faces.length} face(s)`);
//     }
//   }, []);

//   // Render a message if permission is denied
//   if (!hasPermission) {
//     return <View><Text>Camera permission is required to use this feature.</Text></View>;
//   }

//   if (!device) {
//     return <View><Text>No camera device available</Text></View>;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//         frameProcessor={frameProcessor}
//         frameProcessorFps={30}  // Process frames at 30 FPS
//       />
//       {facesDetected.length > 0 && (
//         <View style={styles.overlay}>
//           <Text>{facesDetected.length} face(s) detected</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   overlay: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     padding: 10,
//     borderRadius: 5,
//   },
// });
