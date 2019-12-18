import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'

import MainTabNavigation from "./src/navigation/MainTabNavigation";
import {StatusBar} from "react-native-web";

import {general} from './src/styles/general';
import GeneralStatusBarColor from "react-native-general-statusbar";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false
        }
    }


    async loadResourcesAsync() {
        await Promise.all([
            Asset.loadAsync([
                require('./assets/images/recharging_logo.jpg')
            ])
        ]);
    }


    render() {
        // return (
        //     <Navigation/>
        // );

        console.log(this.state);

        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onFinish={() => this.setState({isReady: true})}
                    onError={console.warn}
                />
            );
        } else {
            console.log('loaded', Platform.OS);
            // return (
            //     <StatusBar backgroundColor="#000000" barStyle="light-content" />
            // );

            return (
                <View style={general.screen}>
                    <GeneralStatusBarColor
                        backgroundColor="#000000"
                        barStyle="light-content"
                    />
                    {/*<StatusBar translucent backgroundColor="#00ff00" barStyle="light-content" />*/}
                    <MainTabNavigation/>
                </View>

            );
        }
    }
}
