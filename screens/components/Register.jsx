import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image} from "react-native";
import Fercho from "./Fercho.js";
import { useNavigation } from "@react-navigation/native";


const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");

    
    const navigation = useNavigation();

    const handleValidation = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(username ==="" || password === "" || email === "" || password2 === ""){
            Alert.alert("Error","You must fill all the fields",[{
                text: "Ok",
                onPress: () => console.log("Alert closed")
            },
            {
                text: "Cancel",
                
            }])
            return ;
        }

        if(username.length < 5){
            Alert.alert("Username must be at least 5 characters");
            return false;
        }
        if(emailRegex.test(email) === false){
            Alert.alert("Invalid email");
            return false;
        }
        if(password.length < 8){
            Alert.alert("Password must be at least 8 characters");
            return false;
        }
        if (password !== password2){
            Alert.alert("Error","Passwords do not match");}
        else{
            return true;
        }
    }
    const handleClick = async (e) =>  {

        (e).preventDefault();
        const endpoint = '/auth/register';
        const body = {
            username,
            password,
            email,
        }
        try {
            
            const response = await Fercho({ endpoint, method: 'POST', body });
            Alert.alert("Success" ,"Account created successfully")
            navigation.navigate('Login');
        } catch (error) {
            console.log(error.data)
        }    
    
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
                    minLength={5}
                    maxLength={10}
                />
                <TextInput 
                    placeholder="Email" 
                    style={styles.input} 
                    placeholderTextColor={'#EB9373'} 
                    onChangeText={e => setEmail(e)}
                    minLength={10}
                    maxLength={25}
                />
                <TextInput 
                    placeholder="Password" 
                    secureTextEntry={true}
                    style={styles.input} 
                    placeholderTextColor={'#EB9373'}
                    onChangeText={e => setPassword(e)}
                    minLength={8}
                    maxLength={20}
                />
                  <TextInput 
                    placeholder="Confirm Password" 
                    secureTextEntry={true}
                    style={styles.input} 
                    placeholderTextColor={'#EB9373'}
                    onChangeText={e => setPassword2(e)}
                    minLength={8}
                    maxLength={20}
                />
                <TouchableOpacity style={styles.buttonsS} onPress={handleValidation}>
                    <Text style={styles.btnTextS}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsL} onPress={async() =>{await navigation.navigate("Login")}}>
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