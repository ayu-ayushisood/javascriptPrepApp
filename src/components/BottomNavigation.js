import * as React from 'react';
import {
	Text,
	View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You're in Home!</Text>
    </View>
  );
}

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You're in Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
		</NavigationContainer>

	);
}

export default BottomNavigation; 