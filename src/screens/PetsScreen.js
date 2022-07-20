import { View, Text, ActivityIndicator, Image, FlatList, StyleSheet, Dimensions } from "react-native"
import { useEffect } from "react"
import UsePet from "../hooks/UsePet"
//By default, screens have a navigation prop 
export default function PetsScreen ({navigation}){
  const [{data, loading, error}, searchPet] = UsePet()
  const id = navigation.getParam("id")
  const dimensions = Dimensions.get("window") //gets actual dimensions of device's window
  const imageWidth = dimensions.width
  const imageHeight = Math.round(dimensions.width*9)/16

  useEffect(() => {
    
    searchPet(id)
  }, [])

  if(loading) return <ActivityIndicator size="large" marginVertical={30}/>
  if(error) return (
    <View style={styles.container}>
      <Text>Oops...we have found an error!</Text>
    </View>
  )
   
  return(
    <View>
      { data && 
      <FlatList 
       data={data.photos}
       keyExtractor={(photo)=> photo} //each photo should have unique url so just return photo 
       renderItem={({item}) => ( 
         <Image style={{height: imageHeight, width: imageWidth}} source={{uri: item}}/> 
      )} 
     />}
    </View>
  )
}

