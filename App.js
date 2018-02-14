import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {red, white, green, blue, purple } from './utils/colors'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import HomeView from './components/HomeView'
import AddBucket from './components/AddBucket'
import ItemList from './components/ItemList'
import AddItem from './components/AddItem'
import {Constants } from 'expo'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStore } from 'redux'


//adds a status bar at the top where the carrier, battery, all resides.
//keeps the color constant throughout all pages of the app
function MyStatusBar ({ backgroundColor, ...props}){
  return (
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar  backgroundColor={backgroundColor} {...props}> </StatusBar>
    </View>
  )
}

const Tabs = TabNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='home' size={30} color={tintColor}/>
    }
  },
  AddBucket: {
    screen: AddBucket,
    navigationOptions: {
      tabBarLabel: 'New Bucket',
      tabBarIcon: ({tintColor}) => <FontAwesome name='bitbucket' size={30} color={tintColor}/>
    }
  }
}, {
    tabBarOptions:{
      activeTintColor:green,
      style: {
        height: 56,
        backgroundColor: white,
      }
    }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  ItemList: {
    screen: ItemList,
    navigationOptions: {
      title: 'Items',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  AddItem: {
    screen: AddItem,
    navigationOptions: {
      title: 'Add Item',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green
      }
    }
  },
  

})


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}} > 
          <MyStatusBar backgroundColor={purple} barStyle='light-content'/>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
