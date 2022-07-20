import {StyleSheet, View, Text, ActivityIndicator, FlatList} from 'react-native'
import {useEffect} from 'react'
import usePets from "../hooks/usePets"
import LocationItem from './LocationItem'

export default function Pets({term}) {

  const [{data, loading, error}, searchPets] = usePets()

  useEffect(() => {
    searchPets(term)
  }, [term])

  // console.log({data: data, loading, error})

  if(loading) return <ActivityIndicator size="large" marginVertical={30}/>
  if(error) return (
    <View style={styles.container}>
      <Text style={styles.heading}>Oops...an error occured!</Text>
    </View>
  )
  return(

    <View style={styles.container}>
      <Text style={styles.header}>Top Locations</Text>

      <FlatList 
        data={data}
        keyExtractor={(category)=> category.id}
        renderItem={({item}) => (
          <LocationItem location={item}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "57%",
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10
  },
})


