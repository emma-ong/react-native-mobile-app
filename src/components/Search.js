import { Text, View, StyleSheet, TextInput } from "react-native" 
import { FontAwesome } from "@expo/vector-icons"
import { elevation } from "../common/styles"

export default function Search() {
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25}/> 
      <TextInput style={styles.input} placeholder="Shelter, breeds"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {width: 5, height: 5},
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  }
})