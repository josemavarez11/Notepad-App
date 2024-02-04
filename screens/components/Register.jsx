import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image} from "react-native";
import Fercho from "./Fercho.js";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleClick = async (e) =>  {
        (e).preventDefault();
        const endpoint = '/auth/register';
        const body = {
            username,
            password,
            email,
        }
        
        const response = await Fercho({ endpoint, method: 'POST', body });
        console.log(response);
    }

    useEffect(() => {}, [])

    return(
        <View style={styles.content}>
            <View style={styles.contentA}>
                <View style={styles.contentAa}>
                    <Text style={styles.title}>Create</Text>
                    <Text style={styles.title}>Account</Text>
                </View>
                <View style={styles.contentAb}>
                    <Image
                        source={require('../../assets/create-recto.png')}
                        style={{width: 100, height:100, position: "relative", left: 120, top: 40}}
                    />
                    <Image
                        source={require('../../assets/create.png')}
                        style={{width: 280, height:280, position: "relative", right: 30, top: 40}}
                    />
                </View>
            </View>
            <View style={styles.contentB}>
                <TextInput 
                    placeholder="Username" 
                    style={styles.input} 
                    placeholderTextColor={'#EB9373'} 
                    onChangeText={e => setUsername(e)}
                />
                <TextInput 
                    placeholder="Email" 
                    style={styles.input} 
                    placeholderTextColor={'#EB9373'} 
                    onChangeText={e => setEmail(e)}
                />
                <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                    placeholderTextColor={'#EB9373'}
                    onChangeText={e => setPassword(e)}
                />
                <TouchableOpacity style={styles.buttonsS} onPress={handleClick}>
                    <Text style={styles.btnTextS}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsL} onPress={Alert}>
                    <Text style={styles.btnTextL}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentA:{
        backgroundColor: "#eb9373",
        width: "100%",
        height: "40%",
        display: "flex",
        flexDirection: "row",
    },
    contentB:{
        width: "100%",
        height: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    title:{
        color: "white",
        marginLeft: 20,
        fontSize: 30,
    },
    sub:{
      color: "white",
      marginLeft: 20,
      fontSize: 18,
    },
    input:{
        width: "80%",
        height: 55,
        borderWidth: 1,
        borderColor: "black",
        margin: 10,
        padding: 15,
        borderRadius: 15,
        borderColor: "#F2C3B2",
        fontSize: 18,
        color: "#E97451",
    },
    buttonsS:{
        width: "80%",
        height: 55,
        borderRadius: 15,
        backgroundColor: "#EB9373",
    },
    buttonsL:{
        width: "80%",
        height: 55,
        borderRadius: 15,
        backgroundColor: "#EFE4D8",
    },

    btnTextS:{
        textAlign: "center",
        marginTop: 15,
        color: "white",
        fontSize: 18,
    },
    btnTextL:{
        textAlign: "center",
        marginTop: 15,
        color: "#EB9373",
        fontSize: 18,
    },
    contentAa:{
      backgroundColor: "#EB9373",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "40%",
    },
    line:{
      backgroundColor: '#EB9373',
      margin: 15,
      marginTop: 30,
      height: 5,
    },
    contentAb:{
    //   backgroundColor: "#EFB888",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      display: "flex",
      justifyContent: "center",
      width: "60%",
    }

})

export default Register;