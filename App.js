import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './src/app/store';
import Header from './src/components/Header';
import LoginModal from './src/features/login/LoginModal';
import CategoriasScreen from './src/screens/CategoriasScreen';
import PersonajesScreen from './src/screens/PersonajesScreen';
import AjustesScreen from './src/screens/AjustesScreen';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Categorias" component={CategoriasScreen}/>
                    <Tab.Screen name="Personajes" component={PersonajesScreen}/>
                    <Tab.Screen name="Ajustes" component={AjustesScreen}/>
                </Tab.Navigator>
                <Header title="Mi App"/>
                <LoginModal/>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
