import axios from "axios"

const activitiesActions = {
  
    getActivities: (id) => {
          
      return async (dispatch, getState) => {
        
        
            try{
              const res = await axios.get("https://mytinerary-beccari.herokuapp.com/api/allActivities/"+id)
            //console.log(res); 
           // dispatch({ type: 'GET_ACTIVITIES', payload: res.data.response})
          return {
            success:true,
            response:res.data.response
          }
            }catch (err){
              return{
                succes:false,
                response:err.message
              }
            }
             
   
    }
  
    }
  }
  
  export default activitiesActions