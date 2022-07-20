import { StatusBar } from "expo-status-bar"
import { View, StyleSheet } from "react-native"
import { useState } from "react"
import Categories from "../components/Categories"
import Header from "../components/Header"
import Pets from "../components/Pets"
import Search from "../components/Search"

export default function HomeScreen () {

  const [term, setTerm] = useState("Shelters")
  const commonCategories = [
    {
      name: "Pet Stores",
      imageUrl: require("../assets/images/stores.png")
    },
    {
      name: "Pet Cafes",
      imageUrl: require("../assets/images/cafe.png")
    },
    {
      name: "Pets",
      imageUrl: require("../assets/images/pets.png")
    },
  ]
  
  return (
    <View style={styles.container}>
        <Header />
        <Search setTerm={setTerm}/>
        <Categories 
          categories={commonCategories} 
          setTerm={setTerm}
          term={term}
        />
        <StatusBar />
        <Pets term={term}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(253,253,253)",
    flex: 1,
  }
})