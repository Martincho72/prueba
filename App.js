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
  Text,
  View,
} from 'react-native';

import Partit from './src/components/Partit';

/** A la funció App, dins del return crearem la notra pantalla */
const App = () => {
  return (
    <View>
      <StatusBar/>
      <ScrollView>
        <View>
          <Text style={estils.titol}> Resultados Liga 24-25 </Text>
          <Image source={require("./src/assests/img/vini.jpg")}></Image>
          <Partit e1='Valencia cf' e2='Betis' r1={5} r2={0}></Partit>
          <Partit e1='Osasuna' e2='Oviedo' r1={2} r2={3}></Partit>
          <Partit e1='Real Madrid' e2='FC Barcelona' r1={4} r2={4}></Partit>
          <Partit e1='Los Pacos' e2='Ramones de Girona' r1={1} r2={0}></Partit>
          <Partit e1='Getafe FC' e2='Picassenteros FC' r1={3} r2={4}></Partit>

        </View>
      </ScrollView>
    </View>
  );
}

/** En aquesta secció, crearem els estils a aplicar als nostres components */
const estils = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titol: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  descripcio: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;