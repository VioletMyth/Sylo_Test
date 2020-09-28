
import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../App';

const InfoHeader = (props) => {
  const changeScreen = () => {
    props.icon_address.navigation.replace('Home')
  }
  const darkTheme = useContext(ThemeContext)
  const styles = StyleSheet.create({
    title: {
      fontFamily: "RawlineMedium",
      fontSize: 18,
      color: darkTheme ? "#495162" : "#F6F6F6",
    },
  
    tinyLogo: {
      height: 30,
      width: 30,
      margin: 10
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "center",
      flex: 1,
      alignItems: "center",
    },
    backIcon: {
      flex: 1
    }
  })

  return (
    <View style={{
      flexDirection: "row",
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      margin: 20,
    }}>
      <View>
        <Ionicons name="ios-arrow-back" size={30} color="black" onPress={changeScreen}/>
      </View>
      <View style={styles.titleContainer}>
        <Image
          style={styles.tinyLogo}
          source={{uri:props.icon_address.navigation.getParam("currInfo").icon_address}}
        />
        {console.log(props)}
        <Text style={styles.title}>{props.icon_address.navigation.getParam("name")}</Text>
      </View>
    </View>
  );
}



export default InfoHeader;