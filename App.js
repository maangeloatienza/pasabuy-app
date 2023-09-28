import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import { colors } from './styles/colors';
import { PAGES } from './pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={PAGES.LOGIN}
        >
          <Stack.Screen
            name="Login"
            component={PAGES.LOGIN}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="SignUp"
            component={PAGES.SIGNUP}
            options={{title: 'Sign Up'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['primary-bg-color'],
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
});
