import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";

export type IStackRoutes = {
  Welcome: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<IStackRoutes>();

const StackRoutes = (): JSX.Element => {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Welcome" component={Welcome} />
    </Navigator>
  );
};

export default StackRoutes;