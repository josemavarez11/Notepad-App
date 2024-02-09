import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

const EditProfile = () =>{
    return (
        <View style={style.content}>
            <View style={style.perfil}>

                    <Image
                    source={require("../../../assets/user-icon.png")}
                    style={style.img}
                    />
                
                <View style={style.textContent}>
                        <Text style={style.Titletext}>Mario</Text>
                </View>
            </View>

        <TouchableOpacity style={style.btn}>
            <Text style={style.text}>Username</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btn}>
            <Text style={style.text}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
            <Text style={style.text}>Password</Text>
        </TouchableOpacity>

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
        backgroundColor: "#EDB381",
        padding: 10,
        marginTop: "10%",
        width: 250,
        height: 45,
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