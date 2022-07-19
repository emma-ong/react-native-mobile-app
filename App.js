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
      name: "Shelters",
      imageUrl: require("./src/assets/images/shelter.png")
    },
    {
      name: "Pet Cafes",
      imageUrl: require("./src/assets/images/cafe.png")
    },
    {
      name: "Other",
      imageUrl: require("./src/assets/images/other.png")
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
        <Pets />
      </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center"
  // }
})