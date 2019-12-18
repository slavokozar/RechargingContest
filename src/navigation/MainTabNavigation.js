import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import SettingsScreen from "../modules/Settings/SettingsScreen";
import ContestScreen from "../modules/Contest/ContestNavigator";

const tabNavigator = createBottomTabNavigator(
    {
        Contest:  ContestScreen,
        Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                console.log(routeName);
                if (routeName === 'Contest') {
                    iconName = 'ios-trophy';
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(tabNavigator);