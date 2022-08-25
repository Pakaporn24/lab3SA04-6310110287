import React from 'react'
import { View, Text,  StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text></Text>

            <Text style={style.Text}>main</Text>
             <Text style={style.Text}>{props.main}</Text>
             <Text style={style.Text}>description</Text>
             <Text style={style.Text}>{props.description}</Text>

            <View style = {{
                flexDirection: "row",
                justifyContent: 'center'
            }}>

                <Text style={style.normal}>{props.temp}</Text>
                <Text style={style.normal}> °C</Text>

            </View>
        
        </View>
    );
}


    const style =  StyleSheet.create(
    {
        normal: {
            textAlign: 'center',
            fontSize: 50,
            fontWeight: "bold",
            color: 'white',
        },

        Text: {
            fontSize: 25, 
             fontWeight: "bold", 
             color: 'white', 
             textAlign: 'center',
             lineHeight: 50

        } 
    }
)
