import React from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
import Note from "./Note";
import Constants  from "expo-constants";

const NotePage = () =>{
    return (
        <View>
            <Text style={style.text}>Notes</Text>
            <View style={style.content}>
                <View style={style.contentBar}>
                    <TextInput 
                        placeholder="Search . . ." 
                        style={style.input} 
                        placeholderTextColor={'rgba(233,116,81,0.5)'}
                    />
                </View>
                    <Note />
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
        marginBottom: Constants.statusBarHeight
    },
    contentBar:{
        marginBottom: 30,
    
    },
})

export default NotePage;
