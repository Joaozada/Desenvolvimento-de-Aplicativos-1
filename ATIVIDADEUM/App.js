import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import insta from './screens/insta';
import perfil from './screens/perfil';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Entrar no Facebook</Text>
      <Button
        title="Enter in Facebook"
        onPress={() => navigation.navigate('login')}
      />

      <Text>Logar no Instagram</Text>
        <Button
          title="Enter in Instagram"
          onPress={() => navigation.navigate('insta')}
        />
        <Text>Página de perfil</Text>
        <Button
          title="Perfil Page"
          onPress={() => navigation.navigate('perfil')}
        />
    </View>
  );
}
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="login"
        component={login}
        options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="insta"
        component={insta}
        options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen 
        name = "perfil"
        component={perfil}
        options={{ cardStyleInterpolator: forFade }}
        />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}