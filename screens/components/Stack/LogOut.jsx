import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const LogOut = () =>{
    const navigation = useNavigation();
    const removeToken = async () =>{
        await AsyncStorage.removeItem("token");
        alert("Goodbye");
        navigation.navigate("Login");
    }

    return (
        <View style={style.content}>
            <TouchableOpacity
            style={style.btn}
            onPress={removeToken}
            >
                <Text style={{color:'#ffffff', fontWeight: "bold"}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}


const style = StyleSheet.create({
    btn:{
        backgroundColor: "#E97451",
        width: 200,
        height: 80,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 50
    },
    content:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200
    },
})
export default LogOut