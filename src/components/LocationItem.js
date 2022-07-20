import { StyleSheet, Text, View, Image } from 'react-native';
import { elevation } from '../common/styles';

export default function LocationItem({location}) {
console.log(location.name, location.image_url)
  return (
    <View style={[styles.elevation, styles.container]}>
      <Image  style={styles.image} source={!location.image_url? require("../assets/images/pets.png"):{uri: location.image_url}}/>
      <View style={styles.container2}>
          <Text style={styles.text}>{location.name}</Text>
          <View>
              <Text>{location.rating}</Text>
              <Text>{location.is_closed ? "🔴 Closed now" : "🟢 Open now"}</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  container2: {
    marginLeft: 5,
    marginRight: 100,
    
  },
  text: {
    fontWeight: "bold",
  }
})