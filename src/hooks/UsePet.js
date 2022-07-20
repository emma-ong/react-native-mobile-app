import {useState} from "react"
import yelp from "../api/yelp"

export default () => {

  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null
  })

  const searchPet = async (id) => { //uses id instead of tearm 
    //when searching, loading state becomes true
    setResult({
      data: null,
      loading: true,
      error: null
    })
    //Look for search term 
    try {
      const response = await yelp.get(`/${id}`, {
      })
      //if successful 
      setResult({
        data: response.data,
        loading: false,
        error: null
      })
    } 
    catch (error) {

      //if unsuccessful 
      setResult({
        data: null,
        loading: false,
        error: error
      })
    }
  }
  //return values below in an array to have the same structure of useState
  return [result, searchPet]
}