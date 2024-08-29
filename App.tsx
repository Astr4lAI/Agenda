import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Actividades from './components/Actividades';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './components/Inicio';
import { NavigationContainer } from '@react-navigation/native';

const Navegador = createStackNavigator();

export default function App() {
  return (
    <><Actividades /><NavigationContainer>
      <Navegador.Navigator>
        <Navegador.Screen name="Inicio" component={Inicio} />
        <Navegador.Screen name="Actividades" component={Actividades} />
      </Navegador.Navigator>
    </NavigationContainer></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});