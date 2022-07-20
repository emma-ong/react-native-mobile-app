import {StyleSheet, View, Text, ActivityIndicator, FlatList} from 'react-native'
import {useEffect} from 'react'
import usePets from "../hooks/usePets"
import LocationItem from './LocationItem'

export default function Pets({term}) {

  const [{data, loading, error}, searchPets] = usePets()

  useEffect(() => {
    searchPets(term)
  }, [term])

  console.log({data: data, loading, error})

  if(loading) return <ActivityIndicator size="large" marginVertical={30}/>
  if(error) return (
    <View style={styles.container}>
      <Text style={styles.heading}>Oops...an error occured!</Text>
    </View>
  )

  return(

    <View style={styles.container}>
      <Text style={styles.heading}>Top Locations</Text>
      <FlatList 
        style={styles.flatlist}
        data={data}
        keyExtractor={(category)=> category.id}
        renderItem={({item})=>{ 
            return (
              <LocationItem location={item}/>
            )
      }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    // flex: 1,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },
})


