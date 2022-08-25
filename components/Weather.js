import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast'



export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '' ,
        description: '',
        temp: 0
    })

    return(
        <ImageBackground source={require('../gg.jpg')} style={style.backdrop}>
            <Text></Text>
            
                <Text style={style.titleText}>Zip code is {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            
        </ImageBackground>
        
    )
}

const style = StyleSheet.create({
    backdrop: {
      //flexDirection: 'colum',
       //justifyContent: 'center',
       alignItems: 'center',
        width: '100%',
        height: '100%'
    } ,
    
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'

    } 
    
})