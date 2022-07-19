import {StyleSheet, View, Text} from 'react-native'

export default function Pets() {
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


