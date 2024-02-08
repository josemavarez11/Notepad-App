import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

const EditProfile = () =>{
    return (
        <View style={style.content}>
            <View style={style.perfil}>
                <View style={style.cicle}>
                    <Image
                    source={require("../../../assets/user-icon.png")}
                    style={style.img}
                    />
                </View>
                <View style={style.textContent}>
                        <Text style={style.Titletext}>Mario</Text>
                </View>
            </View>
        <TextInput style={style.input}
        placeholderTextColor={'#EB9373'}
        placeholder="new username"/>

        <TextInput style={style.input}
        placeholderTextColor={'#EB9373'}
        placeholder="new email"/>

        <TextInput style={style.input}
        placeholderTextColor={'#EB9373'}
        placeholder="new password"
/>

        <TouchableOpacity style={style.btn}>
            <Text style={style.text}>Save Changes</Text>
        </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    perfil:{
        display: "flex",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    cicle:{
        width: 120,
        height: 120,
        borderRadius: 61,
        backgroundColor: "#E97451",
        marginRight:15,
        marginLeft: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textContent:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
    Titletext:{
        fontSize: 20,
        color: "#E97451",
        fontWeight: "bold"
    },
    content:{
        marginTop: "10%",
        display: "flex",
        flexDirection: "column",
    },
    input:{
        width: 290,
        height: 65,
        backgroundColor: "#FFD1A3",
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        alignSelf: "center",
        marginRight: 30,
        marginBottom:20,
        color: "#E97451",
        fontWeight: "bold",
    },
    btn:{
        backgroundColor: "#E97451",
        padding: 10,
        marginTop: "20%",
        width: 340,
        height: 65,
        alignSelf: "center",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    img:{
        width: 80,
        height: 80,
    }
})

export default EditProfile;