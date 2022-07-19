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
import { View, Text, StyleSheet, FlatList } from "react-native"
import Header from "./src/components/Header"
import Search from "./src/components/Search"
import CategoryItem from "./src/components/CategoryItem"



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
        {/* <CategoryItem name="Shelters" imageUrl={require("./src/assets/images/shelter.png")}/> */}
        <FlatList 
          data={commonCategories}
          renderItem={({item, idx})=>{ //extract index from list
            return(
              <CategoryItem  //Props to be used in CatgegoryItem component
                name={item.name} 
                imageUrl={item.imageUrl} 
                index={idx}
                active={item.name === term}
                handlePress={()=> setTerm(item.name)}
                />
            )
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category)=> category.name}
        />
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