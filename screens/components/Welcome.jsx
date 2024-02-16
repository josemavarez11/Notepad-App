import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";


const Welcome = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.test}>
        <View style={styles.card}>
            <View style={styles.cardImage}>
                <Image
                source={require("../../assets/icon-notepad.png")}
                style={styles.image}
                />
                <Text style={styles.title}>Dynamic</Text>
                <Text style={styles.title}>Notepad</Text>
            </View>
            <View style={styles.page}>
                <Text style={styles.line}></Text>
                <Text style={styles.line}></Text>
                <Text style={styles.line}></Text>
                <Text style={styles.line}></Text>
                <Text style={styles.line}></Text>
            </View>
            <View style={styles.cardBtn}>
                <TouchableOpacity
                style={styles.btn}
                onPress={async ()=>{await navigation.navigate("Login")}}>
                    <Text style={styles.Text}>Login</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                style={styles.btn}
                onPress={async ()=>{navigation.navigate("Register")}}>
                    <Text style={styles.Text}>Sign Up</Text>
                    </TouchableOpacity>
                
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: "#EB9373",
        height: "100%",
        },
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 30,
        marginTop: 100,
        backgroundColor: "#EB9373",
    },
    image: {
        width: 120,
        height: 120,
        marginLeft: 50,
    },
    text: {
        fontSize: 20,
        color: "#161924",
        textAlign: "center",
        marginTop: 10,
    },
    cardImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    page:{
        backgroundColor: "#EFB888",
        width: 312,
        height: 423,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    line: {
        backgroundColor: "#EB9373",
        height: 5,
        margin: 25

    },
    cardBtn:{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#EB9373",
        marginLeft: 20,
    },
    btn:{
        width: 180,
        height: 60,
        borderRadius: 15,
        backgroundColor: "#FAF0E6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Text:{
        color: "#EB9373",
        fontSize: 20,
        fontWeight: "bold"
    },
    title:{
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
});
export default Welcome;