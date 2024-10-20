// import React, { Component, useEffect, useState } from "react";
// import { Text, View } from "react-native";
// import Entypo from "@expo/vector-icons/Entypo";
// import StartNewTripCard from "../../components/MyJourney/StartNewTripCard";
// import { useRouter } from 'expo-router';
// import { collection, doc, getDocs, query, where } from "firebase/firestore";
// import { auth, db } from "../../configs/FirebaseConfig";
// import UserTripList from "../../components/MyJourney/UserTripList";

// export default function MyJourney() {

//     const router = useRouter();

//     const [userJourney, setUserJourney] = useState([]);

//     const user = auth.currentUser;

//     useEffect(()=>{
//       user&&GetMyJourney();
//     }, [user])

//     const GetMyJourney=async()=>{
//       setUserJourney([]);
//       const q  = query(collection(db, 'UsersJourney'), where('userEmail','==', user?.email));
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc)=>{
//         console.log(doc.id, '=>', doc.data())
//         setUserJourney(prev=>[...prev, doc.data()])
//       })
//     }
//   return (
//     <View style={{ padding: 25, paddingTop: 55, backgroundColor: "white", height: '100%' }}>
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignContent: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <Text
//           style={{
//             fontFamily: "outfit-bold",
//             fontSize: 23,
//           }}
//         >
//           My Wellness Journey
//         </Text>
//         <Entypo name="plus" size={28} color="black" />
//       </View>

//         {
//             userJourney?.length==0?
//             <StartNewTripCard onPress={() => router.push('/create-journey/selectImportant')} />
//             :
//             <UserTripList userJourney={userJourney}/>
            
//         }

//     </View>
//   );
// }


//Just dark theme
// import React, { useEffect, useState } from "react";
// import { Text, View } from "react-native";
// import Entypo from "@expo/vector-icons/Entypo";
// import StartNewTripCard from "../../components/MyJourney/StartNewTripCard";
// import { useRouter } from 'expo-router';
// import { collection, query, getDocs, where } from "firebase/firestore";
// import { auth, db } from "../../configs/FirebaseConfig";
// import UserTripList from "../../components/MyJourney/UserTripList";

// export default function MyJourney() {

//     const router = useRouter();

//     const [userJourney, setUserJourney] = useState([]);

//     const user = auth.currentUser;

//     useEffect(()=>{
//       user && GetMyJourney();
//     }, [user])

//     const GetMyJourney=async()=>{
//       setUserJourney([]);
//       const q  = query(collection(db, 'UsersJourney'), where('userEmail','==', user?.email));
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc)=>{
//         console.log(doc.id, '=>', doc.data())
//         setUserJourney(prev=>[...prev, doc.data()])
//       })
//     }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>My Journey</Text>
//         <Entypo name="plus" size={28} color="#FFD700" onPress={() => router.push('/create-journey/selectImportant')} />
//       </View>

//       {
//         userJourney?.length === 0 ? (
//           <StartNewTripCard onPress={() => router.push('/create-journey/selectImportant')} />
//         ) : (
//           <UserTripList userJourney={userJourney} />
//         )
//       }

//     </View>
//   );
// }

// const styles = {
//   container: {
//     padding: 25,
//     paddingTop: 55,
//     backgroundColor: '#121212', // Dark background
//     height: '100%',
//   },
//   header: {
//     display: "flex",
//     flexDirection: "row",
//     alignContent: "center",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   title: {
//     fontFamily: "outfit-bold",
//     fontSize: 23,
//     color: '#FFFFFF', // White text for visibility on dark background
//   }
// };





//Updated code

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import StartNewTripCard from "../../components/MyJourney/StartNewTripCard";
import { useRouter } from 'expo-router';
import { collection, query, getDocs, where } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";
import UserTripList from "../../components/MyJourney/UserTripList";

export default function MyJourney() {

    const router = useRouter();

    const [userJourney, setUserJourney] = useState([]);

    const user = auth.currentUser;

    useEffect(()=>{
      user && GetMyJourney();
    }, [user]);

    const GetMyJourney = async () => {
      setUserJourney([]);
      const q = query(collection(db, 'UsersJourney'), where('userEmail', '==', user?.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        setUserJourney(prev => [...prev, doc.data()]);
      });
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My Journey</Text>
          {/* <Entypo name="plus" size={28} color="#FFD700" onPress={() => router.push('/create-journey/selectImportant')} /> */}
          {/* <Text style={{color: 'white'}}>{user?.fullName}</Text> */}
        </View>

        {
          userJourney?.length === 0 ? (
            <StartNewTripCard onPress={() => router.push('/create-journey/selectImportant')} />
          ) : (
            <UserTripList userJourney={userJourney} />
          )
        }

      </View>
    );
}

const styles = {
  container: {
    padding: 25,
    paddingTop: 55,
    backgroundColor: '#121212',
    height: '100%',
    // textAlign: 'center'
  },
  header: {
    display: "flex",
    flexDirection: "row",
    // alignContent: "center",
    // textAlign: 'center',
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 23,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  }
};


