import * as React from "react";

import {Button, View,Text,StyleSheet,Image,ImageBackground,ScrollView, TouchableOpacity} from "react-native";
const image = { uri: "https://fondosmil.com/fondo/28064.jpg" };//backgroundImage
import { connect } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";
 

function Cities(props) {
  console.log(props);
  React.useEffect(() => {
    props.getCities();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 800,
      }}
    >
      <ImageBackground source={image} style={{ flex: 2 }}>
      <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={{alignItems:"center",justifyContent:"center",marginTop:30, backgroundColor:"white",width:100,height:50,borderRadius:20,marginLeft:"auto",marginRight:"auto",marginBottom:3}}
        >
            <Text style={{color:"blue",marginBottom:3}}>Home</Text>
        </TouchableOpacity>
      
        

      
        <ScrollView>
        { 
        (props.citiesFiltered.length!==0)? props.citiesFiltered.map((city) => {
            console.log(city.image)
           
          return (
            <TouchableOpacity>
           <View style={{marginTop:20,marginBottom:20, borderWidth: 5,borderColor:"white",backgroundColor:"violet",width:320,marginLeft:"auto",marginRight:"auto",borderRadius:20}}>
           <Text key={city._id} style={{textAlign:'center',fontSize:25,marginTop:20,color:"white"}}>{city.name}</Text>
           <Image  source={{uri:`https://mytinerary-beccari.herokuapp.com/imagenes/${city.image}`}} style={{width:300,height:300,marginRight:"auto",marginLeft:"auto",borderRadius:30,marginBottom:10}}/>
          
           </View>
           </TouchableOpacity>
          );

         
        }):
            <Text>No hay cities</Text>
         }

        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = (state) => {
    return {
      allCities: state.citiesR.cities,
      citiesFiltered: state.citiesR.citiesFiltered,
    };
  };
  
  const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filterCities: citiesActions.filterCities,
  };
export default connect(mapStateToProps, mapDispatchToProps)(Cities);