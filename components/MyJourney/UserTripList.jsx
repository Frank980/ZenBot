// import moment from 'moment'
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default function UserTripList({userJourney}) {
//     const LatestTrip=JSON.parse(userJourney[0].journeyData)
//     return (
//       <View>
//         <View>
//             <Text>{userJourney[0].journeyPlan.date}</Text>
//         </View>
//         <Text>{moment(LatestTrip.startDate).format('DD | MM | YYYY')}</Text>

//         <View style={{display: 'flex', flexDirection: 'row'}}>
//         <Text>{LatestTrip.Occasion.title}</Text>
//         <Text>{LatestTrip.Occasion.icon}</Text>
//         </View>

//         <Text>{userJourney[0].journeyPlan.goals[0]}</Text>
//         <Text>{userJourney[0].journeyPlan.schedule['Day 1']}</Text>

//       </View>
//     )
// }

// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import { ScrollView, Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// // Enable LayoutAnimation on Android
// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// export default function UserTripList({ userJourney }) {
//     const LatestTrip = JSON.parse(userJourney[0].journeyData);
//     const schedule = userJourney[0].journeyPlan.schedule;

//     // State for tracking which day is expanded
//     const [expandedDay, setExpandedDay] = useState(null);

//     // Function to toggle expanded state of a day with animation
//     const toggleDay = (day) => {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//         setExpandedDay(expandedDay === day ? null : day);
//     };

//     // Function to render activities for each time period (Morning, Afternoon, Evening)
//     const renderActivities = (timePeriod) => {
//         if (Array.isArray(timePeriod)) {
//             return timePeriod.map((activityData, index) => (
//                 <View key={index} style={styles.activityContainer}>
//                     <Icon name="run" size={20} color="#3498db" style={styles.icon} />
//                     <View style={styles.activityTextContainer}>
//                         <Text style={styles.activityTitle}>Activity: {activityData.activity}</Text>
//                         <Text style={styles.activityDescription}>Description: {activityData.description}</Text>
//                     </View>
//                 </View>
//             ));
//         } else {
//             return <Text style={styles.noActivitiesText}>No activities available</Text>;
//         }
//     };

//     // Render the schedule for each day with toggle functionality
//     const renderScheduleForDay = (daySchedule, day) => {
//         const isExpanded = expandedDay === day;

//         return (
//             <View key={day} style={styles.dayContainer}>
//                 <TouchableOpacity onPress={() => toggleDay(day)} style={styles.dayHeaderContainer}>
//                     <Icon name="calendar-today" size={25} color="#fff" style={styles.dayIcon} />
//                     <Text style={styles.dayHeader}>Day {day}</Text>
//                     <Icon name={isExpanded ? "chevron-up" : "chevron-down"} size={25} color="#fff" />
//                 </TouchableOpacity>

//                 {isExpanded && (
//                     <View style={styles.activitiesContainer}>
//                         <Text style={styles.timePeriod}>Morning Activities:</Text>
//                         {renderActivities(daySchedule.Morning)}

//                         <Text style={styles.timePeriod}>Afternoon Activities:</Text>
//                         {renderActivities(daySchedule.Afternoon)}

//                         <Text style={styles.timePeriod}>Evening Activities:</Text>
//                         {renderActivities(daySchedule.Evening)}
//                     </View>
//                 )}
//             </View>
//         );
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.dateText}>Trip Date: {userJourney[0].journeyPlan.date}</Text>
//                 <Text style={styles.tripStartDate}>
//                     <Icon name="calendar" size={20} color="#fff" /> {moment(LatestTrip.startDate).format('DD | MM | YYYY')}
//                 </Text>
//             </View>

//             <View style={styles.occasionContainer}>
//                 <Text style={styles.occasionTitle}>{LatestTrip.Occasion.title}</Text>
//                 <Icon name="star" size={30} color="#f1c40f" />
//             </View>

//             <Text style={styles.goalsTitle}>Goals:</Text>
//             <Text style={styles.goalText}>{userJourney[0].journeyPlan.goals[0]}</Text>

//             {/* Render each day in the schedule */}
//             {Object.keys(schedule).map((day, index) => (
//                 renderScheduleForDay(schedule[day], index + 1)
//             ))}
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: '#ecf0f1',
//     },
//     header: {
//         marginBottom: 16,
//         backgroundColor: '#2ecc71',
//         padding: 16,
//         borderRadius: 8,
//     },
//     dateText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     tripStartDate: {
//         fontSize: 16,
//         color: '#fff',
//     },
//     occasionContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     occasionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#34495e',
//     },
//     goalsTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
//         color: '#e74c3c',
//     },
//     goalText: {
//         fontSize: 16,
//         marginBottom: 16,
//         color: '#2c3e50',
//     },
//     dayContainer: {
//         marginBottom: 24,
//         backgroundColor: '#3498db',
//         borderRadius: 8,
//     },
//     dayHeaderContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//         backgroundColor: '#2980b9',
//         borderTopLeftRadius: 8,
//         borderTopRightRadius: 8,
//     },
//     dayHeader: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     dayIcon: {
//         marginRight: 10,
//     },
//     activitiesContainer: {
//         backgroundColor: '#ecf0f1',
//         padding: 16,
//         borderBottomLeftRadius: 8,
//         borderBottomRightRadius: 8,
//     },
//     timePeriod: {
//         fontSize: 18,
//         fontWeight: '600',
//         marginBottom: 8,
//         color: '#34495e',
//     },
//     activityContainer: {
//         marginBottom: 12,
//         padding: 8,
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     activityTextContainer: {
//         flex: 1, // Ensures that the text takes up space and doesn't overflow
//     },
//     activityTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#2980b9',
//     },
//     activityDescription: {
//         fontSize: 14,
//         color: '#7f8c8d',
//     },
//     noActivitiesText: {
//         fontSize: 14,
//         fontStyle: 'italic',
//         color: '#e74c3c',
//     },
// });

//Perfect working code

// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import { ScrollView, Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// // Enable LayoutAnimation on Android
// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// export default function UserTripList({ userJourney }) {
//     const LatestTrip = JSON.parse(userJourney[0].journeyData);
//     const schedule = userJourney[0].journeyPlan.schedule;

//     // State for tracking which day is expanded
//     const [expandedDay, setExpandedDay] = useState(null);

//     // Function to toggle expanded state of a day with animation
//     const toggleDay = (day) => {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//         setExpandedDay(expandedDay === day ? null : day);
//     };

//     // Function to render activities for each time period (Morning, Afternoon, Evening)
//     const renderActivities = (timePeriod) => {
//         if (Array.isArray(timePeriod)) {
//             return timePeriod.map((activityData, index) => (
//                 <View key={index} style={styles.activityContainer}>
//                     <Icon name="run" size={20} color="#3498db" style={styles.icon} />
//                     <View style={styles.activityTextContainer}>
//                         <Text style={styles.activityTitle}>Activity: {activityData.activity}</Text>
//                         <Text style={styles.activityDescription}>Description: {activityData.description}</Text>
//                     </View>
//                 </View>
//             ));
//         } else {
//             return <Text style={styles.noActivitiesText}>No activities available</Text>;
//         }
//     };

//     // Render the schedule for each day with toggle functionality
//     const renderScheduleForDay = (daySchedule, day) => {
//         const isExpanded = expandedDay === day;

//         return (
//             <View key={day} style={styles.dayContainer}>
//                 <TouchableOpacity onPress={() => toggleDay(day)} style={styles.dayHeaderContainer}>
//                     <Icon name="calendar-today" size={25} color="#fff" style={styles.dayIcon} />
//                     <Text style={styles.dayHeader}>Day {day}</Text>
//                     <Icon name={isExpanded ? "chevron-up" : "chevron-down"} size={25} color="#fff" />
//                 </TouchableOpacity>

//                 {isExpanded && (
//                     <View style={styles.activitiesContainer}>
//                         <Text style={styles.timePeriod}>Morning Activities:</Text>
//                         {renderActivities(daySchedule.Morning)}

//                         <Text style={styles.timePeriod}>Afternoon Activities:</Text>
//                         {renderActivities(daySchedule.Afternoon)}

//                         <Text style={styles.timePeriod}>Evening Activities:</Text>
//                         {renderActivities(daySchedule.Evening)}
//                     </View>
//                 )}
//             </View>
//         );
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//             <View style={styles.header}>
//                 <Text style={styles.dateText}>Trip Date: {userJourney[0].journeyPlan.date}</Text>
//                 <Text style={styles.tripStartDate}>
//                     <Icon name="calendar" size={20} color="#fff" /> {moment(LatestTrip.startDate).format('DD | MM | YYYY')}
//                 </Text>
//             </View>

//             <View style={styles.occasionContainer}>
//                 <Text style={styles.occasionTitle}>{LatestTrip.Occasion.title}</Text>
//                 <Icon name="star" size={30} color="#f1c40f" />
//             </View>

//             <Text style={styles.goalsTitle}>Goals:</Text>
//             <Text style={styles.goalText}>{userJourney[0].journeyPlan.goals[0]}</Text>

//             {/* Render each day in the schedule */}
//             {Object.keys(schedule).map((day, index) => (
//                 renderScheduleForDay(schedule[day], day)
//             ))}
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: '#ecf0f1',
//         flexGrow: 1,
//     },
//     header: {
//         marginBottom: 16,
//         backgroundColor: '#2ecc71',
//         padding: 16,
//         borderRadius: 8,
//     },
//     dateText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     tripStartDate: {
//         fontSize: 16,
//         color: '#fff',
//     },
//     occasionContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     occasionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#34495e',
//     },
//     goalsTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
//         color: '#e74c3c',
//     },
//     goalText: {
//         fontSize: 16,
//         marginBottom: 16,
//         color: '#2c3e50',
//     },
//     dayContainer: {
//         marginBottom: 24,
//         backgroundColor: '#3498db',
//         borderRadius: 8,
//     },
//     dayHeaderContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//         backgroundColor: '#2980b9',
//         borderTopLeftRadius: 8,
//         borderTopRightRadius: 8,
//     },
//     dayHeader: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     dayIcon: {
//         marginRight: 10,
//     },
//     activitiesContainer: {
//         backgroundColor: '#ecf0f1',
//         padding: 16,
//         borderBottomLeftRadius: 8,
//         borderBottomRightRadius: 8,
//     },
//     timePeriod: {
//         fontSize: 18,
//         fontWeight: '600',
//         marginBottom: 8,
//         color: '#34495e',
//     },
//     activityContainer: {
//         marginBottom: 12,
//         padding: 8,
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     activityTextContainer: {
//         flex: 1,
//     },
//     activityTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#2980b9',
//     },
//     activityDescription: {
//         fontSize: 14,
//         color: '#7f8c8d',
//     },
//     noActivitiesText: {
//         fontSize: 14,
//         fontStyle: 'italic',
//         color: '#e74c3c',
//     },
// });

//Dates are displayed in order

// import React, { useState } from 'react';
// import moment from 'moment';
// import { ScrollView, Text, View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// export default function UserTripList({ userJourney }) {
//     const LatestTrip = JSON.parse(userJourney[0].journeyData);
//     const schedule = userJourney[0].journeyPlan.schedule;

//     const [expandedDay, setExpandedDay] = useState(null);

//     // Sort schedule by day in ascending order
//     const sortedSchedule = Object.keys(schedule).sort((a, b) => {
//         const dateA = moment(a, 'YYYY-MM-DD');
//         const dateB = moment(b, 'YYYY-MM-DD');
//         return dateA - dateB;
//     });

//     const toggleDay = (day) => {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//         setExpandedDay(expandedDay === day ? null : day);
//     };

//     const renderActivities = (timePeriod) => {
//         if (Array.isArray(timePeriod)) {
//             return timePeriod.map((activityData, index) => (
//                 <View key={index} style={styles.activityContainer}>
//                     <Icon name="run" size={20} color="#2c3e50" style={styles.icon} />
//                     <View style={styles.activityTextContainer}>
//                         <Text style={styles.activityTitle}>Activity: {activityData.activity}</Text>
//                         <Text style={styles.activityDescription}>Description: {activityData.description}</Text>
//                     </View>
//                 </View>
//             ));
//         } else {
//             return <Text style={styles.noActivitiesText}>No activities available</Text>;
//         }
//     };

//     const renderScheduleForDay = (daySchedule, day) => {
//         const isExpanded = expandedDay === day;
//         return (
//             <View key={day} style={styles.dayContainer}>
//                 <TouchableOpacity onPress={() => toggleDay(day)} style={styles.dayHeaderContainer}>
//                     <Icon name="calendar-today" size={25} color="#222" style={styles.dayIcon} />
//                     <Text style={styles.dayHeader}>{day}</Text>
//                     <Icon name={isExpanded ? "chevron-up" : "chevron-down"} size={25} color="#222" />
//                 </TouchableOpacity>
//                 {isExpanded && (
//                     <View style={styles.activitiesContainer}>
//                         <Text style={styles.timePeriod}>Morning Activities:</Text>
//                         {renderActivities(daySchedule.Morning)}
//                         <Text style={styles.timePeriod}>Afternoon Activities:</Text>
//                         {renderActivities(daySchedule.Afternoon)}
//                         <Text style={styles.timePeriod}>Evening Activities:</Text>
//                         {renderActivities(daySchedule.Evening)}
//                     </View>
//                 )}
//             </View>
//         );
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//             <View style={styles.header}>
//             <Text style={styles.dateText}>Number of Days: {LatestTrip.totNumDays}</Text>

//                 <Text style={styles.tripStartDate}>
//                     <Icon name="calendar" size={20} color="#fff" /> {moment(LatestTrip.startDate).format('DD | MM | YYYY')}
//                 </Text>
//             </View>

//             <View style={styles.occasionContainer}>
//                 <Text style={styles.occasionTitle}>{LatestTrip.Occasion.title}</Text>
//                 <Icon name="star" size={30} color="#f1c40f" />
//             </View>

//             <Text style={styles.goalsTitle}>Goals:</Text>
//             <Text style={styles.goalText}>{userJourney[0].journeyPlan.goals[0]}</Text>
//             <Text style={styles.goalText}>{userJourney[0].journeyPlan.goals[1]}</Text>
//             <Text style={styles.goalText}>{userJourney[0].journeyPlan.goals[2]}</Text>

//             {sortedSchedule.map((day, index) => renderScheduleForDay(schedule[day], day))}
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         backgroundColor: '#000',
//         flexGrow: 1,
//     },
//     header: {
//         marginBottom: 16,
//         backgroundColor: '#4b6584',
//         padding: 16,
//         borderRadius: 8,
//     },
//     dateText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     tripStartDate: {
//         fontSize: 16,
//         color: '#fff',
//     },
//     occasionContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     occasionTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#4b6584',
//     },
//     goalsTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
//         color: '#eb3b5a',
//         fontFamily: 'outfit-bold',
//     },
//     goalText: {
//         fontSize: 16,
//         marginBottom: 16,
//         fontFamily: 'outfit-semib',

//         color: '#999999',
//     },
//     dayContainer: {
//         marginBottom: 24,
//         backgroundColor: '#000',
//         borderRadius: 8,
//     },
//     dayHeaderContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//         backgroundColor: '#777',
//         borderTopLeftRadius: 8,
//         borderTopRightRadius: 8,
//     },
//     dayHeader: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#999',
//         fontFamily: 'outfit-bold',
//     },
//     activitiesContainer: {
//         backgroundColor: '#333',
//         padding: 16,
//         borderBottomLeftRadius: 8,
//         borderBottomRightRadius: 8,
//     },
//     timePeriod: {
//         fontSize: 18,
//         fontWeight: '600',
//         marginBottom: 8,
//         color: '#BB86FC',
//     },
//     activityContainer: {
//         marginBottom: 12,
//         padding: 12,
//         backgroundColor: '#000',
//         borderRadius: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 6,
//         elevation: 2,
//     },
//     activityTextContainer: {
//         flex: 1,
//     },
//     activityTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#3867d6',
//     },
//     activityDescription: {
//         fontSize: 14,
//         color: '#778ca3',
//     },
//     noActivitiesText: {
//         fontSize: 14,
//         fontStyle: 'italic',
//         color: '#eb3b5a',
//     },
// });

//First Change

import React, { useState } from "react";
import moment from "moment";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Vibration,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Checkbox from 'expo-checkbox';
import LottieView from "lottie-react-native";
// import * as Haptics from 'expo-haptics';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function UserTripList({ userJourney }) {
  if (!userJourney || userJourney.length === 0) {
    return <Text style={styles.noDataText}>No journey data available</Text>;
  }

  const latestJourney = userJourney[0];
  const { journeyData, journeyPlan } = latestJourney;
  const wellnessPlan = journeyPlan?.["today's_wellness_plan"];
  const activities = wellnessPlan?.activities;



  if (!journeyData || !wellnessPlan || !activities) {
    return (
      <Text style={styles.noDataText}>Wellness plan data is not available</Text>
    );
  }

  const latestTrip = JSON.parse(journeyData);
  const schedule = journeyPlan.schedule;

  const [expandedDay, setExpandedDay] = useState(null);

  const sortedSchedule = Object.keys(schedule || {}).sort((a, b) => {
    const dateA = moment(a, "YYYY-MM-DD");
    const dateB = moment(b, "YYYY-MM-DD");
    return dateA - dateB;
  });




  const toggleDay = (day) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedDay(expandedDay === day ? null : day);
  };

  const [checkedState, setCheckedState] = useState(
    new Array(activities.length).fill(false) // Initialize an array to store the checkbox state
  );
  
  const handleCheckboxChange = (index) => {
    // Create a new array with the updated checked state for the specific checkbox
    const updatedCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };


  const renderActivities = (timePeriod) => {
    if (!timePeriod || !Array.isArray(timePeriod)) {
      return (
        <Text style={styles.noActivitiesText}>No activities available</Text>
      );
    }
    return timePeriod.map((activityData, index) => (
      <View key={index} style={styles.activityContainer}>
        <Icon name="run" size={20} color="#2c3e50" style={styles.icon} />
        <View style={styles.activityTextContainer}>
          <Text style={styles.activityTitle}>
            Activity: {activityData.activity}
          </Text>
          <Text style={styles.activityDescription}>
            Rationale: {activityData.rationale}
          </Text>
        </View>
      </View>
    ));
  };

  const renderScheduleForDay = (daySchedule, day) => {
    const isExpanded = expandedDay === day;
    return (
      <View key={day} style={styles.dayContainer}>
        <TouchableOpacity
          onPress={() => toggleDay(day)}
          style={styles.dayHeaderContainer}
        >
          <Icon
            name="calendar-today"
            size={25}
            color="#222"
            style={styles.dayIcon}
          />
          <Text style={styles.dayHeader}>{day}</Text>
          <Icon
            name={isExpanded ? "chevron-up" : "chevron-down"}
            size={25}
            color="#222"
          />
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.activitiesContainer}>
            <Text style={styles.timePeriod}>Morning Activities:</Text>
            {renderActivities(daySchedule?.Morning)}
            <Text style={styles.timePeriod}>Afternoon Activities:</Text>
            {renderActivities(daySchedule?.Afternoon)}
            <Text style={styles.timePeriod}>Evening Activities:</Text>
            {renderActivities(daySchedule?.Evening)}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.occasionContainer}>
        <Text style={styles.occasionTitle}>{latestTrip.desc}</Text>
        <Icon name="star" size={30} color="#f1c40f" />
      </View>
      <LottieView
        source={require("../../assets/images/anim2.json")}
        autoPlay
        loop
        style={styles.image2}
      />
      <Text style={styles.goalsTitle}>Today's Wellness Plan:</Text>
      
      {activities.map((activity, index) => (
        <View key={index} style={styles.activityContainer}>
        <View style={{display: 'flex'}}>
        <Checkbox
            style={styles.checkbox}
            value={checkedState[index]} // Use the corresponding checked state for each checkbox
            onValueChange={() => handleCheckboxChange(index)} // Update the correct index in the array
          />
          <Text  style={[styles.activityTitle, checkedState[index] && styles.activityTitleStrikethrough,]}>

            {activity.activity}
          </Text>
          </View>
          <Text style={styles.activityDescription}>
            Rationale: {activity.rationale}
          </Text>
        </View>
      ))}

    


      {sortedSchedule.map((day, index) =>
        renderScheduleForDay(schedule[day], day)
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Existing styles
  wellnessTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#bb86fc",
  },
  container: {
    padding: 20,
    backgroundColor: "#000",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },

  occasionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  occasionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4b6584",
  },
  activityTitleStrikethrough: {
    textDecorationLine: "line-through", // Apply strikethrough
    color: "#aaa", // Optional: Change the color to indicate completion
  },
  goalsTitle: {
    fontSize: 17,
    // fontWeight: 'bold',
    marginBottom: 8,
    textAlign: "center",
    color: "#eb3b5a",
    // fontFamily: 'outfit-bold',
    fontFamily: "Robo2",
  },
  goalText: {
    fontSize: 16,
    marginBottom: 16,
    fontFamily: "outfit-semib",

    color: "#999999",
  },
  
  activityContainer: {
    marginBottom: 12,
    padding: 17,
    backgroundColor: "#000",
    borderRadius: 8,
    // alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image2: {
    width: '100%',
    height: 150,
    // position: 'absolute',
    // backgroundColor: '#1B263B',
    zIndex: 2,
    // margin: 60,
    // marginTop: 180
    // marginBottom: 100
  },
  activityTextContainer: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  activityTitle: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: "#3867d6",
    fontFamily: "Robo",
  },
  activityDescription: {
    fontSize: 14,
    color: "#778ca3",
    fontFamily: "Robo",
  },
  noActivitiesText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#eb3b5a",
  },
  checkbox: {
    height: 25,
    width: 25,
    borderColor: "black", // Matches with your primary color
    borderRadius: 4, // Rounded corners for a modern look
    backgroundColor: "#8DD2CD", // Default background when unchecked
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    // marginHorizontal: 5
    // marginRight: 10, // Add spacing between checkbox and text
  },

});





































// Changing

// import React, { useState } from 'react';
// import { ScrollView, Text, View, StyleSheet, CheckBox } from 'react-native';

// export default function UserTripList({ userJourney }) {
//     const [checkedItems, setCheckedItems] = useState({});

//     // Function to handle checkbox toggle
//     const toggleCheckbox = (journeyIndex, itemKey, subItemKey) => {
//         setCheckedItems((prev) => ({
//             ...prev,
//             [journeyIndex]: {
//                 ...prev[journeyIndex],
//                 [itemKey]: {
//                     ...prev[journeyIndex]?.[itemKey],
//                     [subItemKey]: !prev[journeyIndex]?.[itemKey]?.[subItemKey],
//                 },
//             },
//         }));
//     };

//     // Render items in arrays, such as "avoidance.items"
//     const renderArrayItems = (array, journeyIndex, itemKey) => {
//         return array.map((item, index) => (
//             <View key={index} style={styles.subItemContainer}>
//                 <CheckBox
//                     value={checkedItems[journeyIndex]?.[itemKey]?.[index] || false}
//                     onValueChange={() => toggleCheckbox(journeyIndex, itemKey, index)}
//                 />
//                 <Text style={styles.subItemText}>{item}</Text>
//             </View>
//         ));
//     };

//     // Render nested objects such as "habit_building" or "gentle_exercise"
//     const renderNestedObject = (nestedObject, journeyIndex, itemKey) => {
//         return Object.keys(nestedObject).map((key) => (
//             <View key={key} style={styles.nestedItemContainer}>
//                 <Text style={styles.nestedItemHeader}>{key}:</Text>
//                 <Text style={styles.nestedItemText}>{nestedObject[key]}</Text>
//             </View>
//         ));
//     };

//     // Render the main items under "today's_mental_wellness_plan"
//     const renderPlanItems = (plan, journeyIndex) => {
//         if (!plan) return null; // Check if plan is defined

//         return Object.keys(plan).map((key) => {
//             const item = plan[key];
//             return (
//                 <View key={key} style={styles.itemContainer}>
//                     <Text style={styles.itemHeader}>{key}</Text>
//                     {Array.isArray(item.items) ? renderArrayItems(item.items, journeyIndex, key) : null}
//                     {typeof item === 'object' && !Array.isArray(item) ? renderNestedObject(item, journeyIndex, key) : null}
//                 </View>
//             );
//         });
//     };

//     // Main rendering of user journeys
//     return (
//         <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//             {userJourney.map((journey, journeyIndex) => {
//                 const journeyPlan = journey.journey?.JourneyPlan;
//                 const wellnessPlan = journeyPlan?.["today's_mental_wellness_plan"];

//                 if (!journeyPlan || !wellnessPlan) {
//                     // If journeyPlan or today's_mental_wellness_plan is not defined, display a message
//                     return (
//                         <View key={journeyIndex} style={styles.journeyContainer}>
//                             <Text style={styles.journeyHeader}>Journey ID: {journey.docId}</Text>
//                             <Text style={styles.errorText}>No mental wellness plan available.</Text>
//                         </View>
//                     );
//                 }

//                 return (
//                     <View key={journeyIndex} style={styles.journeyContainer}>
//                         <Text style={styles.journeyHeader}>Journey ID: {journey.docId}</Text>
//                         {renderPlanItems(wellnessPlan, journeyIndex)}
//                     </View>
//                 );
//             })}
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         backgroundColor: '#000',
//         flexGrow: 1,
//     },
//     journeyContainer: {
//         marginBottom: 16,
//         backgroundColor: '#1c1c1c',
//         borderRadius: 8,
//         padding: 16,
//     },
//     journeyHeader: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     errorText: {
//         fontSize: 14,
//         color: '#f54242',
//     },
//     itemContainer: {
//         marginBottom: 12,
//         backgroundColor: '#333',
//         borderRadius: 8,
//         padding: 12,
//     },
//     itemHeader: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#BB86FC',
//         marginBottom: 8,
//     },
//     subItemContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 8,
//     },
//     subItemText: {
//         fontSize: 14,
//         color: '#fff',
//         marginLeft: 8,
//     },
//     nestedItemContainer: {
//         marginBottom: 8,
//     },
//     nestedItemHeader: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         color: '#f1c40f',
//     },
//     nestedItemText: {
//         fontSize: 14,
//         color: '#fff',
//         marginLeft: 8,
//     },
// });
