// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import Header from "./src/components/Header"
import Search from "./src/components/Search"
import Categories from "./src/components/Categories"
import Pets from "./src/components/Pets"

export default function App() {
  const [term, setTerm] = useState("Shelters")
  const commonCategories = [
    {
      name: "Pet Stores",
      imageUrl: require("./src/assets/images/stores.png")
    },
    {
      name: "Pet Cafes",
      imageUrl: require("./src/assets/images/cafe.png")
    },
    {
      name: "Pets",
      imageUrl: require("./src/assets/images/pets.png")
    },
  ]

  return (
      <View style={styles.container}>
        <Header />
        <Search 
          setTerm={setTerm}
        />
        <Categories 
          categories={commonCategories} 
          setTerm={setTerm}
          term={term}
        />
        <StatusBar />
        <Pets 
          term={term}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  // container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  //   alignItems: "center",
  //   justifyContent: "center"
  // }
})