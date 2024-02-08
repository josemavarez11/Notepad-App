import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Nav = () =>{
    const navigation = useNavigation();
    return (
        <View style={style.content}>

            <TouchableOpacity
            style={style.btn}
            onPress={() => navigation.navigate("Group")}
            >
                <Text style={style.text}>Group</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={style.btn}
            onPress={() => navigation.navigate("NotePage")}
            >
                <Text style={style.text}>Note</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={style.btn}
            onPress={() => navigation.navigate("Profile")}
            >
                <Text style={style.text}>Profile</Text>
            </TouchableOpacity>

        </View>
    );
}

const style = StyleSheet.create({
    content:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#FAF0E6',
        height: 70,
        width: 320,
        position: "absolute",
        bottom: 0,
        left: 0,
        marginBottom: 50,
        marginLeft: 55,
        borderRadius: 15
    },
    btn:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 50,
    },
    text:{
        color: "#EDB381",
        fontWeight: "bold"
    }
})
export default Nav;