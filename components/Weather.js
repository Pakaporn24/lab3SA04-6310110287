import React, { useEffect, useState } from "react";
 import { ImageBackground, Text, StyleSheet } from 'react-native';
 import { View } from "react-native";
 import Forecast from "./Forecast";
 import Constants from 'expo-constants';
 

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    }
)

        useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=2cda5deca1b18916a3b6c153e8823f86`) 
    .then((response) => response.json())
    .then((json) => {
                    setForecastInfo({
    main: json.weather[0].main,
                    description: json.weather[0].description,
                     temp: json.main.temp
    }); })
                .catch((error) => {
                console.warn(error);
    }); }
    }, [props.zipCode]) 


    return(
        <ImageBackground source={require('../gg.jpg')} style={style.backdrop}>
            <Text></Text>
            
                <View style={style.highlight}>
                 <Text style={style.titleText}>Zip code is {props.zipCode}.</Text>
                 <Forecast {...forecastInfo}/>
             </View>
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
    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width:"100%", 
        height:"45%", 
        alignItems: 'center'
    },

    titleText: {
        fontSize: 32,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'
    }
}
) 