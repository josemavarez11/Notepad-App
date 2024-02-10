import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Delete = () =>{
    const navigation = useNavigation();

    const handleDelete = () =>{
        Alert.alert("Your account has been deleted",
        [
            {
                text: "Ok",
                onPress: () => navigation.navigate("Login")
            }
        ])
    }
    return (
        <View style={style.contentNote}>
            <Text style={style.text}>I want to inform you that if you decide to delete your account, you will lose all your notes and note groups associated with it. This action is irreversible, and you will not be able to recover the information once the account is deleted.</Text>
            <TouchableOpacity
                style={style.btn}
                onPress={() => handleDelete()}
            >
                <Text style={style.textt}>Delete</Text>
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

export default Delete