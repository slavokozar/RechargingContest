import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
    View,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';


export default class SettingsScreen extends Component {

    constructor() {
        super();

        this.state = {
            scanned_code: '',
            Start_Scanner: false,
        };
    }


    render() {

        return (

            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../../assets/images/recharging_logo.jpg')}
                            style={styles.logoImage}
                        />

                    </View>
                    <Text style={{fontSize: 36, color: 'white', textAlign: 'center'}}>Settings</Text>


                </ScrollView>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        color: '#fff',
        backgroundColor: '#000',
        paddingTop: 24,
    },

    logoContainer: {
        width: '33%',
        aspectRatio: 1,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        marginBottom: 20,
    },
    logoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    blockContestWrapper: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    blockContestBlock: {
        width: '50%',
        padding: 10,
        aspectRatio: 1,
    },

    blockContestBlockContent: {
        width: '100%',
        height: '100%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    blockContestBlockName: {
        fontSize: 50,
        textAlign: 'center',
        color: '#fff',
    },
    blockContestBlockPoints: {
        fontSize: 20,
        textAlign: 'center',
        color: 'yellow'
    }
});
