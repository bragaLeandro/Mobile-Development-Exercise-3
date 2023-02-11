import React from 'react';
import {View, Text} from 'react-native'
import ListaPets from './components/ListaPets'

const pets = [
  {
  id: 1,
  name: "Davi",
  race: "Yorkshire",
  weight: "6kg",
  birthDate: "21/09/2017",
  ownerName: "Leandro"
  },
  {
  id: 2,
  name: "Davi",
  race: "Salsicha",
  weight: "7kg",
  birthDate: "21/09/2019",
  ownerName: "Thomaz"
  },
  {
  id: 2,
  name: "Bobby",
  race: "Poodle",
  weight: "4kg",
  birthDate: "10/03/2015",
  ownerName: "Ana"
},
{
  id: 3,
  name: "Max",
  race: "Golden",
  weight: "30kg",
  birthDate: "05/01/2019",
  ownerName: "Larissa"
},
{
  id: 4,
  name: "Luna",
  race: "Persian",
  weight: "3kg",
  birthDate: "12/07/2018",
  ownerName: "Pedro"
},
{
  id: 5,
  name: "Rocky",
  race: "Bulldog",
  weight: "20kg",
  birthDate: "15/11/2016",
  ownerName: "Daniela"
},
{
  id: 6,
  name: "Gizmo",
  race: "Siamese",
  weight: "5kg",
  birthDate: "24/08/2020",
  ownerName: "Fabio"
},
{
  id: 5,
  name: "Lucky",
  race: "Pitbull",
  weight: "18kg",
  birthDate: "19/01/2019",
  ownerName: "Fred"
},

]

function App() {
  return(
    <ListaPets pets={pets}/>
  )

}

export default App;