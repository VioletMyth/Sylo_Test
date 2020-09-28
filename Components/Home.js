import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Header from './Header';
import Navigation from './Navigation';
import CryptoList from './CryptoList';
import { ThemeContext } from '../App';


const Home = ({navigation}) => {
    const [selection, setSelection] = useState("month");
    const darkTheme = useContext(ThemeContext);

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: darkTheme ? '#fff' : "black",
        justifyContent: "center",
        alignItems: "center",
      },
      heading: {
        paddingTop: 50,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center",
      },
      list: {
        alignSelf: "stretch",
      }
    });
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Header />
                <Navigation onChange={(value) => { setSelection(value); }} selected={selection} />
            </View>
            <ScrollView style={styles.list}>
                <CryptoList selected={selection} redirect={navigation}/>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}


export default Home;