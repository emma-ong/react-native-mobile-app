import {useState} from "react"
import yelp from "../api/yelp"

export default () => {

  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null
  })

  const searchPets = async (term) => {
    //when searching, loading state becomes true
    setResults({
      data: null,
      loading: true,
      error: null
    })
    //Look for search term 
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 1,
          term,
          location: "Kuala Lumpur"
        }
      })
      //if successful 
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null
      })
    } 
    catch (error) {
      //if unsuccessful 
      setResults({
        data: null,
        loading: false,
        error: error
      })
    }
  }
  //return values below in an array to have the same structure of useState
  return [results, searchPets]
}