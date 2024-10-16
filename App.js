/*
First principles

SafeAreaView to take care of iOS and iPadOS users
View (nexted in SafeAreaView) with styling that will explicity mention the StatusBar element to avoid the status bar for Android device users.

The fragment <> </> allows us to render two elements, like the SafeAreaView and StatusBar, side by side without having to wrap it in another specific container.
*/

import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeContainer}>

        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>

        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>

      </SafeAreaView>

      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  // render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later. paddings reflect the physical limitation of the screen, such as rounded corners or camera notches. To use, wrap your top level view with a SafeAreaView with a flex: 1 style applied to it. You may also want to use a background color that matches your application's design.
  safeContainer: {
    flex: 1,
    //For Android devices only...
    marginTop: StatusBar.currentHeight,
  },
  //This container will take up as much space as required based on the number of View elements inside of it. This is acheived by omitting the 'flex' attribute.
  searchContainer: {
    backgroundColor: 'green',
    padding: 20,
  },
  //This container will take up the rest of the remaining space allowed by its parent container, which the SafeAreaView in this case. This is acheived by applying a 'flex' of 1 to it.
  listContainer: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 20,
  },
});
