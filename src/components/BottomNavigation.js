import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import QuestionAnswerComponent from './QuestionAnswerComponent';
import styles from '../stylesheet/style';

let json = require(`../staticData/javascript.json`);

const ReactjsComponent = () => {
  return (
    <View style={styles.centerAligned}>
      <Text>You're in Reactjs!</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View style={styles.centerAligned}>
      <Text>Lorem Ipsum Doler Sit Amet</Text>
    </View>
  );
};

const ReduxComponent = () => {
  return (
    <View style={styles.centerAligned}>
      <Text>You're in Redux!</Text>
    </View>
  );
};

const ReactNativeComponent = () => {
  return (
    <View style={styles.centerAligned}>
      <Text>You're in React native!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Javascript"
        screenOptions={{
          tabBarActiveTintColor: '#ec008c',
        }}>
        <Tab.Screen
          name="Javascript"
          // component={QuestionAnswerComponent}
          options={{
            tabBarLabel: 'JS',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="language-javascript"
                color={'pink'}
                size={20}
              />
            ),
          }}
        >
          {(props) => <QuestionAnswerComponent questionsAndAnswers={json.questionsAndAnswers}/>}
        </Tab.Screen>
        <Tab.Screen
          name="Reactjs"
          component={ReactjsComponent}
          options={{
            tabBarLabel: 'React',
            tabBarIcon: () => (
              <MaterialCommunityIcons 
                name="react" 
                color={'#FD0292'} 
                size={20} 
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <MaterialCommunityIcons 
                name="home" 
                color={'#FD0292'} 
                size={20} 
              />
            ),
          }}
        />
        <Tab.Screen
          name="Redux"
          component={ReduxComponent}
          options={{
            tabBarLabel: 'Redux',
            tabBarIcon: () => (
              <FontistoIcons 
                name="redux" 
                color={'#FD0292'} 
                size={20} 
              />
            ),
          }}
        />
        <Tab.Screen
          name="React Native"
          component={ReactNativeComponent}
          options={{
            tabBarLabel: 'React Native',
            tabBarIcon: () => (
              <MaterialCommunityIcons 
                name="react" 
                color={'#FD0292'} 
                size={20} 
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
