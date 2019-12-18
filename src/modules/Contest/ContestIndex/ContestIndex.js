import React, {Component, useEffect, useState} from 'react';
import {View, Text, Button} from "react-native";

export default function ContestIndex( props ) {
    const [contests, setContests] = useState( {
        data: null,
        loading: false
    } );

    // console.log(props.navigation);
    // props.navigation.setParams(
    //     {
    //         header: null
    //     }
    // );


    useEffect( () => {
        if ( contests.loading || contests.error || contests.data ) return;

        setContests({
            data: null,
            error: null,
            loading: true,
        })

        fetch('http://skino.sk/contests.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                setContests({
                    data: responseJson,
                    error: null,
                    loading: false,
                })
            })
            .catch((error) => {
                setContests({
                    data: null,
                    error: 'error',
                    loading: false,
                })
            });
    } );


    return (
        <View>
            <Text>Recent contests</Text>

            {
                contests.data && (
                    contests.data.map((contest, i) => (
                        <View>
                            <Text>{contest.name}</Text>
                            <Button
                                title="Open"
                                onPress={() =>props.navigation.navigate('Show', {name: contest.name})}
                            />
                        </View>
                    ))
                )
            }
        </View>
    );
}