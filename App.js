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
import { View, Text, StyleSheet } from "react-native"
import Header from "./src/components/Header"
import Search from "./src/components/Search"
import CategoryItem from "./src/components/CategoryItem"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <CategoryItem name="Shelters" imageUrl={require("./src/assets/images/shelter.png")}/>
      <CategoryItem name="Cafes" imageUrl={require("./src/assets/images/cafe.png")}/>
      <CategoryItem name="Other" imageUrl={require("./src/assets/images/other.png")}/>
      <StatusBar />
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