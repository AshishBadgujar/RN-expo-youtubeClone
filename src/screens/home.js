import React from 'react'
import { View, Text,FlatList } from 'react-native'
import Header from '../components/header'
import Card from '../components/card'
import {useSelector} from 'react-redux'

export default function HomeScreen() {
    const cardData=useSelector(state=>{
        return state.cardData
    })
    return (
        <View style={{
            flex:1
        }}>
           <Header/>
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
        </View>
    )
}
