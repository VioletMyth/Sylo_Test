import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Navigation from './Navigation';
import InfoCard from './InfoCard';
import InfoHeader from './InfoHeader';
import { ThemeContext } from '../App';

const Information = (props) => {
    const [selection, setSelection] = useState("month");
    const darkTheme = useContext(ThemeContext);
    return (
        <View style={{
            flex: 1,
            paddingTop: 50,
            backgroundColor: darkTheme ? "#fff" : "black",
        }}><View>
            <InfoHeader icon_address={props} />
            <Navigation onChange={(value) => { setSelection(value); }} selected={selection} />
        </View>
            <InfoCard data={props} />
        </View>
    );
}

export default Information;