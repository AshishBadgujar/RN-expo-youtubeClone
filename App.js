import React from 'react';
import HomeScreen from './src/screens/Home';
import Search from './src/screens/search'
import {NavigationContainer,DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideoPlayer from './src/screens/videoPlayer';
import Subscribe from './src/screens/subscribe';
import Explore from './src/screens/explore';
import {MaterialIcons} from '@expo/vector-icons'
import {Provider, useSelector} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import { Reducer } from './src/reducers/reducer';
import { themeReducer } from './src/reducers/themeReducer';

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#333",
    iconColor:"#ffff"
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"#ffff",
    iconColor:"#333"
  }
}

const rootReducer=combineReducers({
  cardData:Reducer,
  myDarkMode:themeReducer
})
const store=createStore(rootReducer)
const Stack=createStackNavigator()
const Tabs=createBottomTabNavigator()

const RootHome=()=>{
  return(
    <Tabs.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({color,size})=>{
        let iconName;
        if(route.name==='home'){
          iconName='home';
        }else if(route.name==='explore'){
          iconName='explore';
        }else if(route.name==='subscribe'){
          iconName='subscriptions';
        }

        return <MaterialIcons name={iconName} size={size} color={color}/>
      },
    })}
    tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: '#333',
        }}
    >
      <Tabs.Screen name="home" component={HomeScreen}/>
      <Tabs.Screen name="explore" component={Explore}/>
      <Tabs.Screen name="subscribe" component={Subscribe}/>
    </Tabs.Navigator>
  )
}

export default ()=>{
  return(
    <Provider store={store}>
        <Navigation/>
    </Provider>
  )
}


export function Navigation() {
  let currTheme=useSelector(state=>{
    return state.myDarkMode
  })
  return (
    <Provider store={store}>

    <NavigationContainer theme={currTheme?customDarkTheme:customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome}/>
        <Stack.Screen name="search" component={Search}/>
        <Stack.Screen name="videoPlayer" component={VideoPlayer}/>
      </Stack.Navigator>
    </NavigationContainer>
     
    </Provider>
  );
}

