import React from 'react'
import { View, Text,Image,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function MiniCard({ videoId,title,channel }) {
    const navigation =useNavigation()
    const {colors}=useTheme()
    const textcolor=colors.iconColor
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("videoPlayer",{videoId:videoId,title:title})} >
        <View style={{
            flexDirection:"row",
            elevation:4,
            padding:5,
            marginBottom:2}}>
             <Image 
                source={{uri:`https://i.ytimg.com/vi/${videoId}/default.jpg`}}
                style={{
                    width:"45%",
                    height:100,
                    marginRight:10,
                }}
            />
            <View>
                    <Text style={{
                        fontSize:17,
                        width:Dimensions.get("screen").width/2,
                        color:textcolor
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={3}
                    >{title}</Text>
                    <Text style={{color:textcolor}}>{channel}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}
