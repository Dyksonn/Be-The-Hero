import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Incidents from "./pages/Incidents";
import Detail from "./pages/Detail";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={StackStyles}>
        <Stack.Screen name="Incidents" component={Incidents} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const StackStyles = {
  headerShown: false
};

export default Routes;
