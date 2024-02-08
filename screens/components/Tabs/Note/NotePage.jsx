import React from "react";
import { View, Text, StyleSheet, TextInput, Image} from "react-native";
import Note from "./Note";
import Constants  from "expo-constants";
import Nav from "../../Nav";

const NotePage = () =>{
    return (
        <View style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
            <Text style={style.text}>Notes</Text>
            <View style={style.content}>
                <View style={style.contentBar}>
                </View>
                    <Note />
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
        marginLeft: "60%",
        color:"#E97451",
        fontWeight: "bold"
    },
    input:{
        backgroundColor: "rgba(237, 179,129, 0.4)",
        width: 327,
        height: 45,
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 10,
        fontSize: 20
    },
    content:{
        display: "flex",
        flexDirection: "column",
        marginBottom: Constants.statusBarHeight + 150
    },
    contentBar:{
        marginBottom: 30,
    
    },
    contentNote: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    note: {
        backgroundColor: "#FAF0E8",
        width: 360,
        height: 70,
        borderRadius: 15,
        padding: 5,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    circle: {
        width: 53,
        height: 53,
        borderRadius: 62,
        backgroundColor: "#FAE0C6",
        marginRight: 15,
        marginLeft: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    // scroll:{
    //     marginBottom: 100
    // },
    contentMax:{
        marginBottom: 10,
    },
    image:{
        height:26,
        width:26,
        // backgroundColor: "white"
    }
});

export default NotePage;
