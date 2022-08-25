import React from 'react'
import { Text } from 'react-native'


export default function Weather(props){
    return(
        <Text>{props.zipCode}</Text>
    )
}