import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { NativeWindStyleSheet } from 'nativewind';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import MyTabBar from './components/MyTabBar';
import Event from './screens/Event';
import Login from './screens/Login';
NativeWindStyleSheet.setOutput({
  default: "native"
})
const Tab = createBottomTabNavigator();
function App() {
  return (
    <SafeAreaView className="flex-1 w-full">
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Login' tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Event" component={Event} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
