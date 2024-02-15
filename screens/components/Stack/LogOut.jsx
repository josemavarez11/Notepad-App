import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const LogOut = () =>{
    const navigation = useNavigation();
    const removeToken = async () =>{
        await AsyncStorage.removeItem("token");
        navigation.navigate("Login");
    }

    return (
        <View style={style.contentNote}>
            <Text style={style.text}>Are you sure you want to sign out?</Text>
            <TouchableOpacity
                style={style.btn}
                onPress={() => removeToken()}
            >
                <Text style={style.textt}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
}


const style = StyleSheet.create({
    contentNote: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        marginTop: 50
    },
    text:{
        fontSize: 15,
        color: "red",
        fontWeight: "bold",
        textAlign: "center",
        width: "80%",
    },
    btn:{
        width: "80%",
        height: 55,
        borderRadius: 15,
        backgroundColor: "#EB9373",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textt:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default LogOut