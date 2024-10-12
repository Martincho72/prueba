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
import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import Partit from './src/components/Partit';

const elements = ["Email", "Nom"];

const moduls2Dam = [
  { nom: 'DIN', professor: 'Manel', hores: 120 },
  { nom: 'ADA', professor: 'Roberto', hores: 120 },
  { nom: 'PMDM', professor: 'Paco', hores: 100 },
  { nom: 'PSP', professor: 'Roberto', hores: 60 },
  { nom: 'SGE', professor: 'Belén', hores: 100 },
  { nom: 'Anglés', professor: 'Caterina', hores: 40 },
  { nom: 'EIE', professor: 'Ana', hores: 60 },
  ];
  

const estil = 'florida';

const isAdmin = true;

const moduls = (arrayDades) => {
  return(
    arrayDades.map((element, indexElement) => (
      <View key={indexElement} style={{backgroundColor:indexElement%2==0?"#F48FB1":"#F8BBD0"}}>
    <Text>{indexElement+1}</Text>
    <Text>{element.nom}</Text>
    <Text>{element.professor}</Text>
    <Text>{element.hores}</Text>
    </View>
    ))
  );
}

const nom = (textAMostrar, estilo) => {
  return (
    <Text style={estilo}>{textAMostrar}</Text>
  );
}

const dades = (arrayDades) => {
  return (
    arrayDades.map((element, indexElement) => (
      <TextInput placeholderTextColor={colorPlaceHolder()} style={estil} key={indexElement} label={element}></TextInput>
    ))
  );
}

const colorPlaceHolder = () => {
return estil === 'florida' ? 'white': 'orange';
}

const colorEstils = () => {
  return estil === 'florida' ? estils.florida : estils.upv;
}

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <PaperProvider>
      {nom("Juan Martín Barrachina Alfonso", estils.titol)}
      <View style={colorEstils()}>
        {dades(elements)}
      </View>
      <Button  icon={'format-list-bulleted'} style={estils.boto} display={isAdmin?'flex':'none'} labelStyle={{color: 'white',}} >Informes</Button>
      <View>
        {moduls(moduls2Dam)}
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
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  boto: {
    backgroundColor: 'purple',
  }
});

export default App;