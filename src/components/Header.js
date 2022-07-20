import { Text, View, StyleSheet } from "react-native" 

export default function Header() {
  return (
  <View style={styles.container}>
    <Text style={styles.lightHeader}>Select a</Text>
    <Text style={styles.boldHeader}>Pet Visit!</Text>
  </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25
  }, 
  lightHeader: {
    fontSize: 35
  },
  boldHeader: {
    fontWeight: "bold",
    fontSize: 40
  }
})