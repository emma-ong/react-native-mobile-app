import {StyleSheet, View, Text} from 'react-native'
import {useEffect} from 'react'
import usePets from "../hooks/usePets"

export default function Pets({term}) {

  const [{data, loading, error}, searchPets] = usePets()

  useEffect(() => {
    searchPets(term)
  }, [term])

  console.log({data: data, loading, error})


  return(

    <View style={styles.container}>
      <Text style={styles.heading}>Adopt an Animal</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
 
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  }
})


