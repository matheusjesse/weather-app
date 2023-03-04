import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Welcome}
            options={{title: 'Welcome'}}
          />
      </Stack.Navigator>     
    </NavigationContainer>
  );
}