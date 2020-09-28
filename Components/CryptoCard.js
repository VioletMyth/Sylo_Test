import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { ThemeContext } from '../App';

const CryptoCard = (props) => {
    const [data, setData] = useState({ "0": 0 });
    const [minHistory, setMinHistory] = useState({});
    const [maxHistory, setMaxHistory] = useState({});
    const [history, setHistory] = useState([]);
    const [rate, setRate] = useState(0);
    const [isPressed, setisPressed] = useState(false);
    const darkTheme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 15,
            borderColor: darkTheme ? "#F6F6F6" : "#161616",
            borderWidth: 2,
            margin: 10,
        },
        tinyLogo: {
            width: 36,
            height: 36,
            margin: 10,
        },
        graph: {
            opacity: 0.6,
            height: 80,
        },
        info: {
            flex: 1,
            flexDirection: "row"
        },
        name: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        numbers: {
            flex: 1,
            alignItems: "flex-end",
            margin: 10,
        },
        changes: {
            flex: 1,
            flexDirection: "row",
        },
        font: {
            fontFamily: "RawlineSemiBold",
            fontSize: 15,
            color: darkTheme ? "#495162" : "#F6F6F6"
        }
    });

    useEffect(() => {
        fetch('https://assets-api.sylo.io/v2/asset/id/' + props.data.id + "/rate?fiat=NZD&period=" + props.chosen + "&type=historic").then((response) => response.json()).then((data) => {
            setData(data)
            let maxDate = data.history.reduce((max, date) => max.date > date.date ? max : date);
            let minDate = data.history.reduce((min, date) => min.date < date.date ? min : date);
            setMinHistory(minDate)
            setMaxHistory(maxDate)
            let dataArray = []
            data.history.forEach(function (dateData) {
                dataArray.push(dateData.rate)
            })
            setHistory(dataArray)
            setRate(data.rate)
        });
    }, [props.chosen]);

    const onPress = () => {
        if (isPressed == false) {
            setData(data.historic = history);
            setData(data.minHistory = minHistory);
            setData(data.maxHistory = maxHistory);
            setData(data.name = props.data.name);
            setData(data.currInfo = props.data);
            props.redirect.navigate('Information', data);
            console.log(props);
        }
        else {
            props.redirect.navigate('Information', data);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.info}>
                    <View style={styles.name}>
                        <Image
                            style={styles.tinyLogo}
                            source={{ uri: props.data.icon_address }}
                        />
                        <Text style={[styles.font, { fontSize: 15 }]}>{props.data.name}</Text>
                    </View>
                    <View style={styles.numbers}>
                        <Text style={styles.font}>${rate.toFixed(2)}</Text>
                        <View style={styles.changes}>
                            <Text style={[styles.font, { color: maxHistory.rate - minHistory.rate < 0 ? "red" : "#33BB5D", fontSize: 12 }]}>
                                {(((maxHistory.rate - minHistory.rate) / maxHistory.rate) * 100).toFixed(2)}% (${(maxHistory.rate - minHistory.rate).toFixed(5)})</Text>
                        </View>
                    </View>
                </View>
                <LineChart
                    style={styles.graph}
                    data={history}
                    svg={{ stroke: '#F15A29', strokeWidth: 3 }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}

                >
                </LineChart>
            </TouchableOpacity>
        </View>
    );
}


export default CryptoCard;