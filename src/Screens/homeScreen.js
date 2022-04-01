import * as React from "react";

import {Button, View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity} from "react-native";
const image = { uri: "https://fondosmil.com/fondo/28064.jpg" };//backgroundImage
import { connect } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";


function HomeScreen(props) {
  console.log(props.cities);
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
        <Text
          style={{
            marginTop: 30,
            color: "white",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Welcome To My Tineraryy
        </Text>
        <Image
          source={{
            uri: "https://mytinerary-beccari.herokuapp.com/static/media/logo.1e3990731f1ad88d522d.png",
          }}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text
          style={{marginTop: 10,color: "white",fontSize: 20,textAlign: "center",width: 260,
          marginLeft: "auto",marginRight: "auto",
          }}
        >
          The opportunity to travel is now, check the destinations we have for
          you
        </Text>

        <TouchableOpacity
            onPress={() => props.navigation.navigate('Cities')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={{alignItems:"center",justifyContent:"center",marginTop:30, backgroundColor:"white",width:100,height:50,borderRadius:20,marginLeft:"auto",marginRight:"auto"}}
        >
            <Text style={{color:"blue"}}>Cities</Text>
        </TouchableOpacity>
         {/* <Button
        
         onPress={() => props.navigation.navigate('Cities')}
        title="Cities" 
        style={styles.button}
      /> */}

        {props.cities?.map((city) => {
          return (
            <Image
              key={city._id}
              source={{
                uri: "https://mytinerary-beccari.herokuapp.com/imagenes/{city.image}"
              }}
              style={{ width: 200, height: 20 }}
            />
          );

         
        })}
      </ImageBackground>
    </View>
  );
}

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesR.cities,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    button: {
        
        marginBottom: 10,

    }
});
