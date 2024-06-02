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
      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
        {[
          'Mobile App Development', 'Web Development', 'Push Ups', 'Exercise', 'Study',
          'Data Structures', 'Software Engineering', 'Info Modelling', 'Projects',
          'Cyber Security', 'Canva', 'UI/UX', 'Mock-Up Text', 'Timetable', 'After School Activities'
        ].map((task, index) => (
          <TouchableOpacity key={index} style={styles.taskCard}>
            <Text style={styles.taskText}>{task}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(225,213,201)',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  tasks: {
    fontSize: 18,
    color: '#000',
  },
  profileButton: {
    padding: 10,
    borderRadius: 25,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 18,
  },
  filterButton: {
    marginLeft: 15,
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 25,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  horizontalScroll: {
    flexGrow: 0,
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: 150,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 20,
  },
  categoryImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    color: '#888',
  },
  ongoingTasks: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  taskCard: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
  },
  taskText: {
    fontSize: 18,
  },
});
