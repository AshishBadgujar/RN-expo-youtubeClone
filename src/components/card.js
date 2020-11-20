import React from 'react'
import { View, Text,Image,Dimensions } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';

export default function Card({ videoId,title,channel }) {
    const navigation =useNavigation()
    const {colors}=useTheme()
    const textColor=colors.iconColor
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("videoPlayer",{videoId:videoId,title:title})} >
        <View style={{
            marginBottom:10,
        }}>
            <Image 
                source={{uri:`https://i.ytimg.com/vi/${videoId}/default.jpg`}}
                style={{
                    width:"100%",
                    height:200,
                }}
            />
            <View style={{
                flexDirection:"row",
                margin:5,
            }}>
                <MaterialIcons name="account-circle" size={40} color={textColor} />
                <View style={{
                    marginLeft:10
                }}>
                    <Text style={{
                        fontSize:20,
                        width:Dimensions.get("screen").width-50,
                        color:textColor
                    }}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >{title}</Text>
                    <Text style={{color:textColor}}>{channel}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}
