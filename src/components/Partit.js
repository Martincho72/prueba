import React from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

const Partit = (props) => {
    return (
        <View style={estils.tarjeta}>
            <Text style={estils.textosEquips}> {props.e1} - {props.e2}</Text>
            <Text style={estils.textoResultats}> {props.r1} - {props.r2} </Text>
        </View>
    );
}

const estils = StyleSheet.create({
    textosEquips: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textoResultats:{
        fontSize: 24,
        color: 'red',
        textAlign: 'center',
    },
    tarjeta: {
        backgroundColor: '#BEEE62',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        padding: 5,
        margin:5,
    }
});

export default Partit;