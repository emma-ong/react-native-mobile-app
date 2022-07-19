import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native" 
import { elevation } from "../common/styles"

export default function CategoryItem({name, imageUrl, index, active, handlePress}) {
  return(
  <TouchableOpacity onPress={handlePress}>
    {/* If items > 3, use this to align items  */}
     {/* <View style={[styles.container, styles.elevation, index === 0 ? {marginLeft: 25} : {marginLeft: 25}]}>  */}
      <View style={[
          styles.container, 
          styles.elevation,
          active 
          ? {backgroundColor: "rgb(241,186,87)"} 
          : {backgroundColor: "white"}
          ]}
      >
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginLeft: 25,
    // backgroundColor: "rgb(241,186,87)",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {width: 5, height: 5},
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold"
  }
})