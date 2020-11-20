import React from 'react'
import { View, Text } from 'react-native'
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import {useNavigation, useTheme} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
    const navigation=useNavigation()
    const {colors}=useTheme()
    const myColor=colors.iconColor
    const dispatch=useDispatch()
    const currTheme=useSelector(state=>{
        return state.myDarkMode
    })
    return (
        <View style={{
            marginTop:Constant.statusBarHeight,
            height:45,
            backgroundColor:colors.headerColor,
            flexDirection:"row",
            justifyContent:"space-between",
            elevation:4,
        }}>
            <View style={{
                flexDirection:"row",
                margin:5,
            }}>
                <AntDesign 
                style={{
                    marginLeft:10
                }}
                name="youtube" size={32} color="red"/>
                <Text style={{
                    fontSize:22,
                    marginLeft:5,
                    fontWeight:"bold",
                    color:myColor,
                }}>Youtube</Text>
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-around",
                width:150,
                marginTop:5
            }}>
                <Ionicons name="md-videocam" size={32} color={myColor} />
                <Ionicons name="md-search" size={32} color={myColor} 
                    onPress={()=>navigation.navigate('search')}
                />
                <MaterialIcons name="account-circle" size={32} color={myColor}
                    onPress={()=>dispatch({type:"change_theme",payload:!currTheme})}
                 />
            </View>
        </View>
    )
}
