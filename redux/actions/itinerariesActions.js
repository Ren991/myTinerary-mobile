import axios from 'axios'
import Swal from 'sweetalert2'

const itinerariesActions = {
    getItineraries: (id) => {
      /* console.log(id) */
      return async (dispatch, getState) => {
        const response = await fetch('https://mytinerary-beccari.herokuapp.com/api/allitineraries/'+id)
        const data = await response.json()
        console.log(data);
        dispatch({type: 'GET_ITINERARIES', payload: data.response})
      }
    },
  
    likeDislike: (id) => {
      const token = localStorage.getItem('token')
      //console.log(token)
      return async () => {
          try {
              let response = await axios.put(`https://mytinerary-beccari.herokuapp.com/api/like/${id}`, {},
              {headers: {
                  Authorization: 'Bearer '+token
                  }
              })
              //console.log(response)
              return response
              
          }catch (error) {
              console.log(error)
          }
      }
  }
  }
  
  export default itinerariesActions