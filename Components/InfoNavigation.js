
// import React, { useContext } from 'react';
// import { Text, View, Button, StyleSheet, EventEmitter } from 'react-native';
// import { NavigationContext } from "../provider/NavigationProvider";
// import { ThemeContext } from '../App';



// const Navigation = (props) => {
//     const changeColor = (id) => {
//         return props.selected == id ? "#F15A29" : "#8A96AA";
//     }
//     const darkTheme = useContext(ThemeContext);
//     return (
//         <View style={styles.container}>
//             <View style={styles.nav}>
//                 <Text
//                     onPress={() => props.onChange("all")}
//                     style={[styles.text, { color: changeColor("all") }]}>
//                     all
//                 </Text>
//                 <Text
//                     onPress={() => props.onChange("year")}
//                     style={[styles.text, { color: changeColor("year") }]}>
//                     year
//                 </Text>
//                 <Text
//                     onPress={() => props.onChange("month")}
//                     style={[styles.text, { color: changeColor("month") }]}>
//                     month
//                 </Text>
//                 <Text
//                     onPress={() => props.onChange("week")}
//                     style={[styles.text, { color: changeColor("week") }]}>
//                     week
//                 </Text>
//                 <Text
//                     onPress={() => props.onChange("day")}
//                     style={[styles.text, { color: changeColor("day") }]}>
//                     day
//                 </Text>
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#fff',
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "row",
//         // margin: 10,
//         alignSelf: "stretch",
//     },
//     nav: {
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginLeft: 15,
//         marginRight: 15,
//     },
//     text: {
//         fontFamily: "RawlineSemiBold",
//         fontSize: 15,
//         color: "#495162",
//         padding: 10,
//     }
// });


// export default Navigation;