/*
First principles

SafeAreaView to take care of iOS and iPadOS users
View (nexted in SafeAreaView) with styling that will explicity mention the StatusBar element to avoid the status bar for Android device users.
*/

import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View>
        <Text>React Native application, blank canvas</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
