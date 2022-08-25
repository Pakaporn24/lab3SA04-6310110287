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