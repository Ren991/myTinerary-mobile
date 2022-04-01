import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/homeScreen';
import Cities from '../Screens/cities';
//import PlaceStackNavigation from './Stack'
//import UserTabsNavigation from './Tabs'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Cities" component={Cities}/>
            <Drawer.Screen name="Contact" component={HomeScreen}/>
        </Drawer.Navigator>

    );
} 
 
