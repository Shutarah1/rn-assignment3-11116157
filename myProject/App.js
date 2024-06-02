import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const categoryImages = {
  'coding.png': require('./assets/coding.png'),
  'Reading.png': require('./assets/Reading.png'),
  'Dance.png': require('./assets/Dance.png'),
  'exercise.png': require('./assets/exercise.png'),
  'Praying.png': require('./assets/Praying.png'),
  'jogging.png': require('./assets/jogging.png'),
  'cooking.png': require('./assets/cooking.png'),
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require('./assets/Profile.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}> 
          <Image source={require('./assets/filter.jpg')} style={styles.filterIcon} /> 
        </TouchableOpacity>
      </View>