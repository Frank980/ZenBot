import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Chatbot from '../../components/Bot/Chatbot'

export default function Discover() {
    return (
      <View style={styles.container}>
        <Chatbot/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});