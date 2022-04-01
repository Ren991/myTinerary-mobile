import axios from "axios"
//Por medio del dispatch las acciones llegan al reducer
const cityActions= {
    getCities: () => {
        //Redux no permite que las acciones sean asincronas por eso hacemos una funcion dentro de otra funcion.
        return async (dispatch, getState) =>{
             fetch("https://mytinerary-beccari.herokuapp.com/api/allcities")
            .then (response=> response.json())
            .then(data=>dispatch({type:"GET_CITIES", payload: data.response})    )
          
           
            //Type :nombre de la accion , Payload:la carga que le mandamos al tipo de accion
        }
    },

    getOneCitie:(id)=>{
    
        return async(dispatch,getState)=>{
         let respuesta
           try {await fetch("https://mytinerary-beccari.herokuapp.com/api/allcities/"+id)
           .then (response=>response.json())
           .then(response=> respuesta= response.respuesta)
            
           return (respuesta) }
           catch(err) {
               console.log(err);
           }
        }
    },

    filterCities: (inputValue) => {
        return (dispatch, getState) =>{
            dispatch({type: "FILTER_CITIES", payload: inputValue })
        }
    }
}
export default cityActions