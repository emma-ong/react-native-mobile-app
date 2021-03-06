import { FlatList } from "react-native"
import CategoryItem from "./CategoryItem"
import yelp from "../api/yelp"

export default function Categories({categories, term, setTerm }) {

  const searchPets = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 15,
        term: "Pets",
        location: "Kuala Lumpur"
      }
    })
    console.log(response)
  }
searchPets()

  return (
    // <CategoryItem name="Shelters" imageUrl={require("./src/assets/images/shelter.png")}/>
    <FlatList 
    data={categories}
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

  )

}