// import React, { Component , useContext, useEffect, useState} from 'react'
// import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
// import { useNavigation } from 'expo-router';
// import CalendarPicker from "react-native-calendar-picker";
// import moment from 'moment';
// import { CreateJourneyContext } from '../../context/CreateJourneyContext';
// import { useRouter } from 'expo-router';

// export default function selectDates() {
//     const navigation = useNavigation();
//     const [startDate, setStartDate] = useState();
//     const [endDate, setEndDate] = useState();
//     const { userData, setUserData } = useContext(CreateJourneyContext);
//     const router = useRouter();

//     useEffect(() => {
//         navigation.setOptions({
//           headerShown: true,
//           headerTransparent: true,
//           headerTitle: 'Select Date of the Occassion',
//         });
//       }, []);

//       const onDateChange=(date, type)=>{
//         console.log(date, type)
//         if(type == 'START_DATE'){
//             setStartDate(moment(date))
//         }
//         else{
//             setEndDate(moment(date))
//         }
//       }

//      const onDateSelectionContinue=()=>{
//         if(!startDate&&!endDate){
//             ToastAndroid.show('Please select occassion date', ToastAndroid.LONG)
//         }
//         const totNumDays = endDate.diff(startDate, 'days');
//         console.log(totNumDays)
//         setUserData({ ...userData, startDate: startDate, endDate: endDate, totNumDays:totNumDays });
//         router.push('/create-journey/selectImportance');
//      }
//     return (
//       <View>
//         <Text> Occasion date </Text>

//         <View style={{marginTop: 20}}>
//         <CalendarPicker onDateChange={onDateChange} allowRangeSelection={true} minDate={new Date()}
//             selectedRangeStyle={{backgroundColor: 'black'}}
//             selectedDayTextStyle={{color: 'white'}}
//         />
//         </View>

//         <TouchableOpacity>
//             <Text onPress={onDateSelectionContinue}>Continue</Text>
//         </TouchableOpacity>
        
//       </View>
//     )
// }



//Bright Theme
import React, { useContext, useEffect, useState } from 'react';
import { Text, ToastAndroid, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { CreateJourneyContext } from '../../context/CreateJourneyContext';
import { useRouter } from 'expo-router';

export default function SelectDates() {
    const navigation = useNavigation();
    const [endDate, setEndDate] = useState(null);
    const { userData, setUserData } = useContext(CreateJourneyContext);
    const router = useRouter();
    const startDate = moment(); // Fixed start date as current date

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Date of the Occasion',
        });
    }, []);

    const onDateChange = (date, type) => {
        if (type === 'START_DATE') {
            setEndDate(moment(date));
        }
    };

    const onDateSelectionContinue = () => {
        if (!endDate) {
            ToastAndroid.show('Please select the end date for the occasion', ToastAndroid.LONG);
            return;
        }
        const totNumDays = endDate.diff(startDate, 'days');
        console.log("Start Date:", startDate.format('YYYY-MM-DD'), "End Date:", endDate.format('YYYY-MM-DD'), "Total Days:", totNumDays);

        setUserData({ ...userData, startDate: startDate, endDate: endDate, totNumDays });
        router.push('/create-journey/selectWorried');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Occasion Date</Text>
            <Text style={styles.subText}>Start Date: {startDate.format('MMMM Do YYYY')}</Text>
            <View style={styles.calendarContainer}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    allowRangeSelection={false} // Disable range selection
                    minDate={new Date()}
                    selectedDayColor="#4CAF50"
                    selectedDayTextColor="#fff"
                />
            </View>
            <TouchableOpacity style={styles.continueButton} onPress={onDateSelectionContinue}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
    subText: {
        fontSize: 16,
        color: '#555',
    },
    calendarContainer: {
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    continueButton: {
        marginTop: 30,
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});




//Just dark theme

// import React, { useContext, useEffect, useState } from 'react';
// import { Text, ToastAndroid, TouchableOpacity, View, StyleSheet } from 'react-native';
// import { useNavigation } from 'expo-router';
// import CalendarPicker from 'react-native-calendar-picker';
// import moment from 'moment';
// import { CreateJourneyContext } from '../../context/CreateJourneyContext';
// import { useRouter } from 'expo-router';

// export default function SelectDates() {
//     const navigation = useNavigation();
//     const [endDate, setEndDate] = useState(null);
//     const { userData, setUserData } = useContext(CreateJourneyContext);
//     const router = useRouter();
//     const startDate = moment(); // Fixed start date as current date

//     useEffect(() => {
//         navigation.setOptions({
//             headerShown: true,
//             headerTransparent: true,
//             headerTitle: '',
//         });
//     }, []);

//     const onDateChange = (date, type) => {
//         if (type === 'START_DATE') {
//             setEndDate(moment(date));
//         }
//     };

//     const onDateSelectionContinue = () => {
//         if (!endDate) {
//             ToastAndroid.show('Please select the end date for the occasion', ToastAndroid.LONG);
//             return;
//         }
//         const totNumDays = endDate.diff(startDate, 'days');
//         console.log("Start Date:", startDate.format('YYYY-MM-DD'), "End Date:", endDate.format('YYYY-MM-DD'), "Total Days:", totNumDays);

//         setUserData({ ...userData, startDate: startDate, endDate: endDate, totNumDays });
//         router.push('/create-journey/selectWorried');
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.headerText}>Occasion Date</Text>
//             <Text style={styles.subText}>Start Date: {startDate.format('MMMM Do YYYY')}</Text>
//             <View style={styles.calendarContainer}>
//                 <CalendarPicker
//                     onDateChange={onDateChange}
//                     allowRangeSelection={false} // Disable range selection
//                     minDate={new Date()}
//                     selectedDayColor="#FFD700" // Golden accent
//                     selectedDayTextColor="#fff"
//                     textStyle={styles.calendarText}
//                     dayLabelsWrapper={styles.dayLabelsWrapper} // Day labels styling
//                     todayBackgroundColor="#4CAF50" // Highlight today's date
//                     todayTextStyle={{ color: '#fff' }} // White text for today's date
//                     nextComponent={<Text style={styles.arrow}>{'>'}</Text>}
//                     previousComponent={<Text style={styles.arrow}>{'<'}</Text>}
//                     customDatesStyles={{ dateStyle: { color: '#fff' } }} // Make dates white
//                 />
//             </View>

//             {/* Motivational Quote */}
//             <Text style={styles.quote}>
//                 "The best way to predict the future is to create it." – Peter Drucker
//             </Text>

//             <TouchableOpacity style={styles.continueButton} onPress={onDateSelectionContinue}>
//                 <Text style={styles.continueButtonText}>Continue</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1C1C1C', // Dark background
//         alignItems: 'center',
//         padding: 20,
//         paddingTop: 40
//     },
//     headerText: {
//         fontSize: 26,
//         fontWeight: 'bold',
//         color: '#FFD700', // Golden color for headers
//         marginVertical: 10,
//     },
//     subText: {
//         fontSize: 16,
//         color: '#AAAAAA', // Light gray for subtext
//         marginBottom: 20,
//         marginVertical: 40
//     },
// calendarContainer: {
//     marginTop: 20,
//     borderRadius: 15, // Rounded corners
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: '#444', // Subtle dark border
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     elevation: 10,
//     backgroundColor: '#2C2C2C', // Slightly lighter background inside the calendar
//     width: 400, // Adjust width to make it smaller
//     height: 350, // Adjust height to make it smaller
// },
//     calendarText: {
//         color: '#fff', // White text for the calendar
//         fontFamily: 'outfit-regular', // You can change this to your font
//     },
//     dayLabelsWrapper: {
//         borderBottomWidth: 0, // Remove bottom border from day labels
//         backgroundColor: '#2C2C2C', // Match background color
//     },
//     arrow: {
//         fontSize: 24,
//         color: '#FFD700', // Golden arrow icons for next/previous
//     },
//     continueButton: {
//         marginTop: 30,
//         backgroundColor: '#FFD700', // Golden accent for the button
//         paddingVertical: 15,
//         paddingHorizontal: 30,
//         borderRadius: 10,
//         shadowColor: '#FFD700',
//         shadowOpacity: 0.8,
//         shadowRadius: 10,
//         elevation: 10, // Add shadow effect for depth
//     },
//     continueButtonText: {
//         color: '#000', // Black text on the golden button
//         fontSize: 16,
//         fontWeight: '600',
//     },
//     quote: {
//         fontSize: 16,
//         fontStyle: 'italic',
//         color: '#AAAAAA', // Light gray for the quote
//         marginTop: 20,
//         textAlign: 'center',
//         paddingHorizontal: 10,
//         paddingVertical: 20
//     },
// });

