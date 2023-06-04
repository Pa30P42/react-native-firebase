import React, {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../screens/Auth';
import HomeScreen from '../screens/Home';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const onAuthStateChanged = (currentUser: FirebaseAuthTypes.User) => {
    setUser(currentUser);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <RootStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <RootStack.Screen name=" " component={HomeScreen} />
      ) : (
        <RootStack.Screen name="Auth" component={Auth} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
