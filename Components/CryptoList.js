import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Card from './CryptoCard';

const CryptoList = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://assets-api.sylo.io/v2/all?take=50').then((response) => response.json().then((data) => {
            setData(data)
        })
        );
    }, [props.selected]);
    const responsive = (
        data.map((currency) => (
            <Card data={currency} chosen={props.selected} redirect={props.redirect}/>
        ))
    )
    return (
        <View style={{
            flex: 1,
        }}>
            {responsive}
        </View>
    );
}

export default CryptoList;