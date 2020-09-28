
import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from '../App';


const Header = () => {
  const darkTheme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    search: {
      flex: 1,
      alignItems:"flex-end",
      marginRight: 10,
     
    },
    title: {
      fontFamily: "RawlineMedium",
      fontSize: 18,
      color: darkTheme ? "#495162" : "#F6F6F6",
    },
    titleBox:{
      flex: 1,
      alignItems:"center",
    }
  })
  return (
    <View style={{
      flex: 1,
      flexDirection: "row",
      alignSelf: "stretch",
      justifyContent: "space-evenly",
      alignItems: "center",
      margin: 20,
    }}>
      <View style={{flex:1}}>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Tracker</Text>
      </View>
      <View style={styles.search}>
        <MaterialCommunityIcons name="magnify" size={24} color="#495162" />
      </View>
    </View>
  );
}



export default Header;