import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriasScreen from '../screens/CategoriasScreen';
import PersonajesScreen from '../screens/PersonajesScreen';
import AjustesScreen from '../screens/AjustesScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categorias" component={CategoriasScreen} />
      <Tab.Screen name="Personajes" component={PersonajesScreen} />
      <Tab.Screen name="Ajustes" component={AjustesScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
