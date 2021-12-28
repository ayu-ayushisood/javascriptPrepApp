import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import BottomNav from './src/components/BottomNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={[backgroundStyle, { backgroundColor: '#178be7', flex: 1 }]}>
      <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' } />
      <BottomNav />
    </SafeAreaView>
  );
};

export default App;
