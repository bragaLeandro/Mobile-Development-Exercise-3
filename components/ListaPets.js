import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function ListaPets({ pets }) {

  const styles = {
    container: {
      backgroundColor: "#eeeee4",
      padding: 4.4,
      borderBottom: "1.5px solid",
    },
    title: {
      fontWeight: "bold"
    },
    description: {
      color: "#eeeee4"
    },
    icons: {
      marginLeft: 60
    }
  }
  return (
    <View> {
      Object.values(pets).map(pet => (
        <View key={pet.id} style={styles.container}> 
          <Text style={styles.title}>{pet.name}</Text>
          <Text>
            {pet.race} - {pet.weight} - {pet.birthDate}
            <SimpleLineIcons name="pencil" size={24} color="black" style={styles.icons}/>
            <MaterialCommunityIcons name="delete-outline" size={30}color="black"/>
          </Text>
        </View>
      ))
    } 
    </View>
  )
}