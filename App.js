/*
First principles

SafeAreaView to take care of iOS and iPadOS users
View (nexted in SafeAreaView) with styling that will explicity mention the StatusBar element to avoid the status bar for Android device users.

The fragment <> </> allows us to render two elements, like the SafeAreaView and StatusBar, side by side without having to wrap it in another specific container.
*/
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {

  const [searchQuery, setSearchQuery ] = useState('');

  return (
    <>

      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />
    </>
  );
}


