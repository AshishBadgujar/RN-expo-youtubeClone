import React from 'react'
import { View, Text,FlatList } from 'react-native'
import Header from '../components/header'
import Card from '../components/card'
import {useSelector} from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'


const LittleCard=({name})=>{
    return(
        <View style={{
            backgroundColor:"red",
            width:170,
            height:50,
            borderRadius:5,
            marginTop:10
        }}>
            <Text style={{
                textAlign:"center",
                color:"white",
                fontSize:22,
                marginTop:6,
            }}>{name}</Text>
        </View>
    )
}

export default function Explore() {
    const cardData=useSelector(state=>{
        return state.cardData
    })
    return (
        <View style={{flex:1}}>
            <Header/>
        <ScrollView>
            <View style={{
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"space-around"
                }}>
                <LittleCard name="Gaming"/>
                <LittleCard name="Trending"/>
                <LittleCard name="Music"/>
                <LittleCard name="News"/>
                <LittleCard name="Movies"/>
                <LittleCard name="Fashion"/>
            </View>
            <Text style={{
                margin:8,
                fontSize:22,
                borderBottomWidth:1
            }}>Treanding Videos</Text>
            <FlatList 
               data={cardData}
               renderItem={({item})=>{
                    return <Card 
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />
               }}
                keyExtractor={item=>item.id.videoId}
           />
        </ScrollView>
        </View>
    )
}
