import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showModal, hideModal, login, logout} from '../features/actions';
import {useFonts} from 'expo-font';

const Header = ({title}) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const username = useSelector(state => state.auth.username);
    const [fontsLoaded] = useFonts({'Oswald': require('../../assets/fonts/Oswald-VariableFont_wght.ttf')});
    if (!fontsLoaded) 
        return null;
    
    const handleLoginPress = () => {
        if (!isAuthenticated) {
            dispatch(showModal());
        } else {
            dispatch(logout());
        }
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleLoginPress}>
                <Text style={styles.headerButton}>{isAuthenticated
                        ? 'LOG OUT'
                        : 'LOGIN'}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            {isAuthenticated && <Text style={styles.userText}>{`Usuario: ${username}`}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 15
    },
    headerText: {
        color: 'white',
        fontFamily: 'Oswald',
        fontSize: 20
    },
    headerButton: {
        color: 'white',
        fontFamily: 'Oswald',
        fontSize: 16,
        marginRight: 10
    },
    userText: {
        color: 'white',
        fontFamily: 'Oswald',
        fontSize: 16
    }
});

export default Header;
