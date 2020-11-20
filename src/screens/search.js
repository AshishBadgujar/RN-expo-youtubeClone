import React,{useState} from 'react'
import { View, TextInput,FlatList, ActivityIndicator } from 'react-native'
import { Ionicons} from '@expo/vector-icons'
import MiniCard from '../components/miniCard'
import axios from 'axios'
import Constant from 'expo-constants';
import {useSelector, useDispatch} from 'react-redux'
import { useTheme } from '@react-navigation/native'
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyAVe_uUNf0qIo3jL-2cMzSEEM2z9HzELgI

export default function Search({navigation}) {
    const {colors}=useTheme()
    const dispatch =useDispatch()
    const [value,setValue]=useState('')
    const [isLoading,setLoading]=useState(false)
   
    const fetchData=()=>{
        setLoading(true)
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyAVe_uUNf0qIo3jL-2cMzSEEM2z9HzELgI`)
        .then(res=>{
            console.log(res.data)
            setLoading(false)
            dispatch({type:"add",payload:res.data.items})
        })
    }
    const miniCardData=useSelector(state=>{
        return state.cardData
    })
    return (
        <View style={{flex:1}}>
            <View style={{
                padding:5,
                flexDirection:"row",
                justifyContent:"space-around",
                elevation:4,
                backgroundColor:colors.headerColor,
                marginTop:Constant.statusBarHeight,
            }}>
                <Ionicons name="md-arrow-back" size={32} 
                    onPress={()=>navigation.goBack()}
                    color={colors.iconColor}
                />
                <TextInput 
                    style={{
                        width:"70%",
                        backgroundColor:"#e6e6e6"}}
                    value={value}
                    onChangeText={(text)=>setValue(text)}
                />
                <Ionicons 
                name="md-send" 
                size={32}
                onPress={()=>fetchData()}
                color={colors.iconColor}
                />
            </View>
            
             { isLoading ? <ActivityIndicator style={{marginTop:10}} size="large" /> : null }
           
            <FlatList
                data={miniCardData}
                renderItem={({item})=>{
                    return <MiniCard 
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}
            />
        </View>
    )
}
