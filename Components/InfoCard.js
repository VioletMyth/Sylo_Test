import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { ThemeContext } from '../App';
import * as shape from 'd3-shape';
import 'intl';
import 'intl/locale-data/jsonp/en';

const InfoCard = (props) => {
    const Gradient = ({ index }) => (
        <Defs key={index}>
            <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'#F15A29'} stopOpacity={0.6} />
                <Stop offset={'30%'} stopColor={'#F15A29'} stopOpacity={0} />
            </LinearGradient>
        </Defs>
    )
    console.log(props)
    const changeScreen = () => {
        console.log(props.data.navigation.getParam("rate"))
        props.data.navigation.replace('Home')
    }
    const darkTheme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            borderRadius: 15,
            borderColor: darkTheme ? "#F6F6F6" : "#161616",
            borderWidth: 2,
            margin: 20,
            paddingBottom: 5,
        },
        title: {
            justifyContent: "center",
            alignItems: "center",
        },
        info: {
            marginLeft: 20,
        },
        infoText: {
            fontFamily: "RawlineMedium",
            fontSize: 15,
            color: "#8A96AA",
            padding: 10,
        },
        rate: {
            fontFamily: "RawlineSemiBold",
            fontSize: 18,
            color: darkTheme ? "#495162" : "#F6F6F6",
        },
        font: {
            fontFamily: "RawlineSemiBold",
            fontSize: 15,
            color: "#495162",
        },
        infoContainer: {
            flex: 1,
            flexDirection: "row",
            margin: 12,
        }
    });
    var nf = new Intl.NumberFormat();
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.rate}>${props.data.navigation.getParam("rate").toFixed(2)}</Text>
                    <Text style={[styles.font, { color: props.data.navigation.getParam("maxHistory").rate - props.data.navigation.getParam("minHistory").rate < 0 ? "red" : "#33BB5D", fontSize: 12 }]}>
                        {(((props.data.navigation.getParam("maxHistory").rate - props.data.navigation.getParam("minHistory").rate) /
                            props.data.navigation.getParam("maxHistory").rate) * 100).toFixed(2)}%
                (${(props.data.navigation.getParam("maxHistory").rate - props.data.navigation.getParam("minHistory").rate).toFixed(5)})</Text>
                </View>
                <View>
                    <AreaChart
                        style={{ height: 200, opacity: 0.6, }}
                        data={props.data.navigation.getParam("historic")}
                        contentInset={{ top: 30, bottom: 30 }}
                        curve={shape.curveNatural}
                        svg={{ fill: 'url(#gradient)', stroke: '#F15A29', strokeWidth: "2px" }}
                    >
                        <Gradient />
                    </AreaChart>
                </View>
            </View>
            <View>
                <Text style={{ textAlign: "center", fontFamily: "RawlineMedium", color: darkTheme ? "#495162" : "#F6F6F6", fontSize: 15, lineHeight: 21 }}>Information</Text>
                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.infoText}>Symbol:</Text>
                        <Text style={styles.infoText}>Market Cap:</Text>
                        <Text style={styles.infoText}>24h Volume:</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>{props.data.navigation.getParam("currInfo").symbol}</Text>
                        <Text style={styles.infoText}>${props.data.navigation.getParam("market_cap").toLocaleString('en-US', { maximumFractionDigits: 2 })
                            + " " + props.data.navigation.getParam("fiat_symbol")}</Text>
                        <Text style={styles.infoText}>${props.data.navigation.getParam("volume_24h").toLocaleString('en-US', { maximumFractionDigits: 2 })
                            + " " + props.data.navigation.getParam("fiat_symbol")}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default InfoCard;