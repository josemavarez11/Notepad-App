import React from "react";
import { View, Text, StyleSheet} from "react-native";
// import Group from "./Group";
import Nav from "../../Nav";
import NoteGroup from "./NoteGroup";

const ContentGroup = () =>{
    return (
        <View style={{backgroundColor: "rgba(255,255,255,0.8)", height: "100%"}}>
            <Text style={style.text}>Categories</Text>
            <View style={style.content}>
                
                <View style={style.contentGroup}>
                    <NoteGroup />
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
        fontWeight: "bold",
        marginBottom: 20
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

export default ContentGroup;