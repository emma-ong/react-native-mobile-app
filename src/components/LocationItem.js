import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { elevation } from '../common/styles';
import {withNavigation} from "react-navigation"

function LocationItem({location, navigation}) {
  return (
    //Pets now has access to data in id object
    <TouchableOpacity
      onPress={(() => navigation.navigate("Pets", {id: location.id}))}
    >
    <View style={[styles.elevation, styles.container]}>
      <Image  style={styles.image} source={!location.image_url? require("../assets/images/pets.png"):{uri: location.image_url}}/>
      <View style={styles.infoContainer}>
          <Text style={styles.header}>{location.name}</Text>
          <View style={styles.info}>
              <Text style={styles.rating}>Rating: {location.rating}</Text>
              <Text style={styles.city}>{location.location.city}</Text>
          </View>
      </View>
    </View>
    </TouchableOpacity>
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
  infoContainer: {
    flex:1,
    paddingHorizontal: 10,
    
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  city:{
    color: "blue"
  }

})

//gives access to navigation inside of prop
export default withNavigation(LocationItem)