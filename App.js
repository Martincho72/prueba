/**
 * Exemple d'una App amb  React Native
 *
 * @author Manel Viel
 * @version 1.0  [octubre 2024]
 * @summary Aquest model el podeu utilitzar en els vostres projectes de DIN
 */

/** IMPORTEM les llibreries necessàries */
import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { PaperProvider, Text, TextInput } from 'react-native-paper';
import Partit from './src/components/Partit';

const elements = ["Email", "Nom"];

const estil = 'florida';

const nom = (textAMostrar, estilo) => {
  return (
    <Text style={estilo}>{textAMostrar}</Text>
  );
}

const dades = (arrayDades) => {
  return (
    arrayDades.map((element, indexElement) => (
      <TextInput style={estil} key={indexElement} label={element}></TextInput>
    ))
  );
}

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <PaperProvider>
      {nom("Juan Martín Barrachina Alfonso", estils.titol)}
      <View style={estil === 'florida' ? estils.florida : estils.upv}>
        {dades(elements)}
      </View>
    </PaperProvider>
  );
}

/** En aquesta secció, crearem els estils a aplicar als nostres components */
const estils = StyleSheet.create({
  titol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;