import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {AddPost, AppScreens} from 'screens';

const Stack = createStackNavigator();

export type AddPostStackParamList = {
  AddPost: undefined;
};

export type AddPostStackNavigationProps =
  StackNavigationProp<AddPostStackParamList>;

export const AddPostNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
        gestureEnabled: false,
        animationTypeForReplace: 'pop',
      }}>
      <Stack.Screen name={AppScreens.AddPost} component={AddPost} />
    </Stack.Navigator>
  );
};
