import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>

    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    justifyContent: 'center',
  },
});
