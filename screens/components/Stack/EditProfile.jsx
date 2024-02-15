import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image, Modal, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState, useEffect} from "react";
import { Alert } from "react-native-web";

const EditProfile = () =>{
    const [viewUser, setViewUser] = useState(false);
    const [viewEmail, setViewEmail] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);

    const[ usernameBox, setUsernameBox] = useState("");
    const[ emailBox, setEmailBox] = useState("");
    const[ passwordBox, setPasswordBox] = useState("");

    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");

    const getToken = async () => {
        const token = await AsyncStorage.getItem("token");
        setToken(token);
    };

    const getUsername = async () => {
        const username = await AsyncStorage.getItem("username");
        setUsername(username);
    }

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
        else{
            return true;
        }
    }
    const handleUsernameSave = async () => {
        handleValidation();
        if(usernameBox === "") {
            setViewUser(false);
            return Alert.alert("Username is required");
        }

        try {
            const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/users/updateUsername`
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ newUsername: usernameBox })
            })
            const data = await response.json();
            console.log(data);
            setUsernameBox("");
            setViewUser(false);
        } catch (error) {
            //alertar que no se pudo cambiar el username
            //puede ser por falta de conexión a internet
            return console.error(error);
        }


    }

    const handleEmailSave = async () => {
        handleValidation();
        if(emailBox === "") {
            setViewEmail(false);
            return console.log("Email is required"); //hacer otra cosa que no sea un console log
        }
        
        try {
            const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/users/updateEmail`
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ newEmail: emailBox })
            });
            const data = await response.json();
            console.log(data);
    
            setEmailBox("");
            setViewEmail(false);
        } catch (error) {
            //alertar que no se pudo cambiar el email
            //puede ser por falta de conexión a internet
            console.error(error);
        }

    }

    const handlePasswordSave = async () => {
        handleValidation();
        if(passwordBox === "") {
            setViewPassword(false);
            return console.log("Password is required"); //hacer otra cosa que no sea un console log
        }

        try {
            const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/users/updatePassword`;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ newPassword: passwordBox })
            });
            const data = await response.json();
            console.log(data);
    
            setPasswordBox("");
            setViewPassword(false);
        } catch (error) {
            //alertar que no se pudo cambiar el password
            //puede ser por falta de conexión a internet
            console.error(error);
        }
        
    }

    useEffect(() => {
        getToken();
        getUsername();
    }, []);

    return (
        <View style={style.content}>
            <View style={style.perfil}>
                <Image
                    source={require("../../../assets/user-icon.png")}
                    style={style.img}
                />
                <View style={style.textContent}>
                    <Text style={style.Titletext}>Pedro</Text>
                    {/* <Text style={style.Titletext}>{username}</Text> */}
                </View>
            </View>


            {/* Modal de Username */}
            <TouchableOpacity 
                style={style.btn}
                onPress={() => setViewUser(true)}
            >
                <Text style={style.text}>Username</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                // onDismiss={() => console.log("close")}
                // onShow={() => console.log("show")}
                transparent
                visible={viewUser}
            >

                <View
                    style={{flex: 1, backgroundColor: "rgba(1,1,1, 0.5)", justifyContent: "center", alignItems: "center"}}
                >
                    <View
                        style={{height: "40%", width: "90%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: 20, borderRadius: 15, padding: 10, borderColor: "#F2C3B2", borderWidth: 1}}
                    >
                        <TextInput //aplicar validación de longitud
                            placeholder="New Username" 
                            style={style.input} 
                            placeholderTextColor={'#EB9373'}
                            onChangeText={e => setUsernameBox(e)}
                            minLength={5}
                        />

                        <View style={style.contentBtnPlus}>

                        <TouchableOpacity
                                style={style.btn}
                                onPress={handleUsernameSave}
                            >
                                <Text style={style.textt}>Save Changes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.btn}
                                onPress={() => setViewUser(false)}
                            >
                                <Text style={style.textt}>Cancel</Text>
                            </TouchableOpacity>


                        </View>

                        <View
                            style={{
                                height: 45,
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "flex-end",
                                justifyContent: "center"
                            }}
                        >
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Modal de Username */}

            {/* Modal de Email */}
            <TouchableOpacity style={style.btn} onPress={() => setViewEmail(true)}>
                <Text style={style.text}>Email</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                // onDismiss={() => console.log("close")}
                // onShow={() => console.log("show")}
                transparent
                visible={viewEmail}
            >
                <View
                    style={{flex: 1, backgroundColor: "rgba(1,1,1, 0.5)", justifyContent: "center", alignItems: "center"}}
                >

                    <View
                        style={{height: "40%", width: "90%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: 20, borderRadius: 15, padding: 10, borderColor: "#F2C3B2", borderWidth: 1}}
                    >
                        <TextInput //aplicar validación de longitud y solo correos validos
                            placeholder="New Email" 
                            style={style.input} 
                            placeholderTextColor={'#EB9373'}
                            onChangeText={e => setEmailBox(e)}
                            minLength={5}
                        />

                        <View style={style.contentBtnPlus}>

                        <TouchableOpacity
                            style={style.btn}
                            onPress={handleEmailSave}
                        >
                            <Text style={style.textt}>Save Changes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={style.btn}
                            onPress={() => setViewEmail(false)}
                        >
                            <Text style={style.textt}>Cancel</Text>
                        </TouchableOpacity>

                        </View>
                       

                        <View
                            style={{
                                height: 45,
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "flex-end",
                                justifyContent: "center"
                            }}
                        >
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Modal de Email */}

            {/* Modal de Password */}
            <TouchableOpacity style={style.btn} onPress={() => setViewPassword(true)}>
                <Text style={style.text}>Password</Text>
            </TouchableOpacity>


            <Modal
                animationType="slide"
                // onDismiss={() => console.log("close")}
                // onShow={() => console.log("show")}
                transparent
                visible={viewPassword}
            >
                <View
                    style={{flex: 1, backgroundColor: "rgba(1,1,1, 0.5)", justifyContent: "center", alignItems: "center"}}
                >

                    <View
                        style={{height: "40%", width: "90%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: 20, borderRadius: 15, padding: 10, borderColor: "#F2C3B2", borderWidth: 1}}
                    >
                        <TextInput //aplicar validación de longitud
                            placeholder="New Password" 
                            style={style.input} 
                            placeholderTextColor={'#EB9373'}
                            onChangeText={e => setPasswordBox(e)}
                            minLength={5}
                        />

                            <View style={style.contentBtnPlus}>
                                <TouchableOpacity
                                style={style.btn}
                                onPress={handlePasswordSave}
                                >
                                <Text style={style.textt}>Save Changes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={style.btn}
                                onPress={() => setViewPassword(false)}
                                >
                                <Text style={style.textt}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        <View
                            style={{
                                height: 45,
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "flex-end",
                                justifyContent: "center"
                            }}
                        >
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Modal de Password */}
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
        width: "80%",
        height: 55,
        borderWidth: 1,
        borderColor: "black",
        margin: 10,
        paddingLeft: 20,
        borderRadius: 15,
        borderColor: "#F2C3B2",
        fontSize: 18,
        color: "#E97451",
        marginTop: "20%"
    },
    btn:{
        backgroundColor: "#EDB381",
        padding: 10,
        marginTop: "10%",
        width: 150,
        height: 55,
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
    },
    textt:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    btnn:{
        backgroundColor: "#EDB381",
        padding: 10,
        marginTop: "10%",
        width: 250,
        height: 60,
        alignSelf: "center",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    contentBtnPlus:{
        display: "flex",
        flexDirection: "row",
        gap: 10
    }
})

export default EditProfile;