// import { Tabs } from 'expo-router'
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Fontisto from '@expo/vector-icons/Fontisto';
// // import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// export default function TabLayout() {
//     return (
//             <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: 'black' ,tabBarActiveBackgroundColor: '#895'}}>
//                 <Tabs.Screen name="myjourney" 
//                 options={{   tabBarLabel: 'My Map',  tabBarIcon:({color})=><MaterialCommunityIcons name="ladder" size={24} color="black" />}}/>
//                 <Tabs.Screen name="discover"
//                     options={{   tabBarLabel: 'My Map',  tabBarIcon:({color})=><Fontisto name="search" size={24} color="black" />}}
//                 />
//                 <Tabs.Screen name="profile"
//                     options={{   tabBarLabel: 'Profile',  tabBarIcon:({color})=><MaterialCommunityIcons name="face-man-profile" size={24} color="black" />}}
//                 />
//             </Tabs>
//     )
// }


//Just Dark theme

import { Tabs } from 'expo-router';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FFD700',  // Bright gold for active icons
                tabBarInactiveTintColor: '#888',   // Gray for inactive icons
                tabBarStyle: {
                    backgroundColor: '#1c1c1e',    // Dark background for tab bar
                    borderTopColor: '#333',        // Border color for separation
                },
                // keyboardHidesTabBar: false,
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tabs.Screen 
                name="myjourney" 
                options={{ 
                    tabBarLabel: 'To-do', 
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="schedule" size={24} color={color} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="discover"
                options={{ 
                    tabBarLabel: 'Chat', 
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="wechat" size={24} color={color} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="profile"
                options={{ 
                    tabBarLabel: 'Profile', 
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="face-man-profile" size={24} color={color} />
                    ),
                }} 
            />
        </Tabs>
    );
}
