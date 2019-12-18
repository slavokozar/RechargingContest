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

import Scanner from "./Scanner";

export default class ContestScreen2 extends Component {

    constructor() {
        super();

        this.state = {
            scanned_code: '',
            Start_Scanner: false,
        };
    }

    onSuccess = (e) => {
        console.log(e.data);
        // Linking
        //     .openURL(e.data)
        //     .catch(err => console.error('An error occured', err));
    }


    render() {
        let blocks = [
            {
                id: 2,
                name: 'Blok 2',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 3,
                name: 'Blok 3',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 4,
                name: 'Blok 4',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 5,
                name: 'Blok 5',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 6,
                name: 'Blok 6',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 7,
                name: 'Blok 7',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 8,
                name: 'Blok 8',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 9,
                name: 'Blok 9',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 10,
                name: 'Blok 10',
                points: Math.round(Math.random() * 100)
            },
            {
                id: 11,
                name: 'Blok 11',
                points: Math.round(Math.random() * 100)
            }
        ];


        if (this.state.Start_Scanner) {
            return (
                <Scanner
                    handleScanned={(data) => {
                        this.setState({
                            Start_Scanner: false,
                            scanned_code: data
                        })
                    }}
                />
            )
        }


        blocks = blocks.sort((a, b) => (a.points - b.points));

        const standing1st = blocks.shift();
        const standing2nd = blocks.shift();
        const standing3rd = blocks.shift();


        return (

            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>

                    <Text style={{fontSize: 36, color: 'white', textAlign: 'center', marginTop: 16, marginBottom: 16}}>Block
                        Contest</Text>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                Start_Scanner: true
                            })

                        }}
                        style={styles.button}>
                        <Text style={{color: '#FFF', fontSize: 14}}>
                            Open QR Scanner
                        </Text>
                    </TouchableOpacity>
                    <Text style={{color: 'white', textAlign: 'center'}}>{this.state.scanned_code}</Text>


                    <Text style={{
                        fontSize: 36,
                        color: 'white',
                        textAlign: 'center',
                        marginTop: 16,
                        marginBottom: 16
                    }}>Standings</Text>


                    <View style={styles.blockContestWrapper}>
                        <View style={styles.blockContestBlock}>
                            <Text style={styles.blockContestBlockName}>1.</Text>
                        </View>
                        <View style={styles.blockContestBlock}>
                            <View style={styles.blockContestBlockContent}>
                                <Text style={styles.blockContestBlockName}>{standing1st.name}</Text>
                                <Text style={styles.blockContestBlockPoints}>{standing1st.points}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.blockContestWrapper}>
                        <View style={styles.blockContestBlock}>
                            <Text style={styles.blockContestBlockName}>2.</Text>
                        </View>
                        <View style={styles.blockContestBlock}>
                            <View style={styles.blockContestBlockContent}>
                                <Text style={styles.blockContestBlockName}>{standing2nd.name}</Text>
                                <Text style={styles.blockContestBlockPoints}>{standing2nd.points}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.blockContestWrapper}>
                        <View style={styles.blockContestBlock}>
                            <Text style={styles.blockContestBlockName}>3.</Text>
                        </View>
                        <View style={styles.blockContestBlock}>
                            <View style={styles.blockContestBlockContent}>
                                <Text style={styles.blockContestBlockName}>{standing3rd.name}</Text>
                                <Text style={styles.blockContestBlockPoints}>{standing3rd.points}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.blockContestWrapper}>
                        {
                            blocks.map((block, i) => (
                                <View key={i} style={styles.blockContestBlock}>
                                    <View style={styles.blockContestBlockContent}>
                                        <Text style={styles.blockContestBlockName}>{block.name}</Text>
                                        <Text style={styles.blockContestBlockPoints}>{block.points}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>

                    {/*<View>*/}
                    {/*<Text >*/}
                    {/*Zaciname!*/}
                    {/*</Text>*/}
                    {/*</View>*/}

                    {/*<View style={styles.helpContainer}>*/}
                    {/*<TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>*/}
                    {/*<Text style={styles.helpLinkText}>*/}
                    {/*Help, it didn’t automatically reload!*/}
                    {/*</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                </ScrollView>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        color: '#fff',
        backgroundColor: '#000',
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
        aspectRatio: 1.5,
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
        fontSize: 32,
        textAlign: 'center',
        color: '#fff',
    },
    blockContestBlockPoints: {
        fontSize: 20,
        textAlign: 'center',
        color: 'yellow'
    }
});
