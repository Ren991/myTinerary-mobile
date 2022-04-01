import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/drawer'



export default function App() { 
  const reduxStore = createStore(mainReducer, applyMiddleware(thunk))

  return (

    <Provider store={reduxStore}>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});