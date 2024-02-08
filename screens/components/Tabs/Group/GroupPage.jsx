import React from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
import Group from "./Group";
import Constants  from "expo-constants";
import Nav from "../../Nav";

const GroupPage = () =>{
    return (
        <View style={{backgroundColor: "rgba(255,255,255,0.8)", height: "100%"}}>
            <Text style={style.text}>Group of Notes</Text>
            <View style={style.content}>
                
                <View>
                    <Group />
                </View>   
            </View>

            <View style={style.Nav}>
                <Nav />
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: "center",
        marginTop: "10%",
        marginLeft: "40%",
        color:"#E97451",
        fontWeight: "bold"
    },
    content:{
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.8)"
        // display: "flex",
        // flexDirection: "row",
        // marginBottom: Constants.statusBarHeight + 150
        
    },
    Nav:{
        position: "absolute",
        bottom: 0,
        left: 0,
        // marginBottom: 2,
        // marginLeft: 55,
    }
})

export default GroupPage;