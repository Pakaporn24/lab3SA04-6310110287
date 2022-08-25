import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import Forecast from './Forecast'


export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-' ,
        description: '-',
        temp: 0
    })

    return(
        <ImageBackground source={require('../gg.jpg')} style={style.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Text>main</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
        
    )
}
const style = StyleSheet.create({
    backdrop: {
       flexDirection: 'column',
       alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})