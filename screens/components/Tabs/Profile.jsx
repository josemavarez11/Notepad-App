import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Nav from "../Nav";



const Profile = () =>{
    const n = useNavigation();
    return (

        <View style={{backgroundColor: "rgba(255,255,255,0.8)", height: "100%"}}>
        <View style={style.content}>
            <Text style={style.text}>Profile</Text>

            <View style={style.perfil}>
               
                    <Image
                    source={require("../../../assets/user-icon.png")}
                    style={style.img}
                    />
                
                    <View style={style.textContent}>
                        <Text style={style.Titletext}>Mario</Text>
                    </View>
            </View>

            <TouchableOpacity
            onPress={() => n.navigate("Edit Profile")}
            style={style.btn}
            >
                <Text style={style.btnText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => n.navigate("Delete Account")}
            style={style.btn}
            >
                <Text style={style.btnText}>Delete Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => n.navigate("Log Out")}
            style={style.btn}
            >
                <Text style={style.btnText}>Log Out</Text>
            </TouchableOpacity>
        </View>
        <Nav />
        </View>
    );
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
    btn:{
        backgroundColor: "#FAF0E6",
        padding: 10,
        // marginTop: "20%",
        width: 340,
        height: 65,
        alignSelf: "center",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: "#E97451",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    content:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    cicle:{
        width: 150,
        height: 150,
        borderRadius: 61,
        backgroundColor: "#E97451",
        marginRight:15,
        marginLeft: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
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
    subTitletext:{
        fontSize: 15,
        color: "rgba(237, 179,129, 0.5)",
        fontWeight: "bold"
    },
    img:{
        width:100,
        height:100,
    }
})

export default Profile