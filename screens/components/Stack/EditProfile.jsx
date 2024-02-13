import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image, Modal, TextInput} from "react-native";
import {useState, useEffect} from "react";

const EditProfile = () =>{
    const [viewUser, setViewUser] = useState(false);
    const [viewEmail, setViewEmail] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);

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


{/* Modal de Username */}
        <TouchableOpacity 
        style={style.btn}
        onPress={() => setViewUser(true)}
        >
            <Text style={style.text}>Username</Text>
        </TouchableOpacity>

        <Modal
            animationType="slide"
            onDismiss={() => console.log("close")}
            onShow={() => console.log("show")}
            transparent
            visible={viewUser}
        >
            <View
                style={{flex: 1, backgroundColor: "rgba(1,1,1, 0.5)", justifyContent: "center", alignItems: "center"}}
            >

                <View
                    style={{height: "30%", width: "90%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: 20, borderRadius: 15, padding: 10, borderColor: "#F2C3B2", borderWidth: 1}}
                >
                    <TextInput 
                    placeholder="New Username" 
                    style={style.input} 
                    placeholderTextColor={'#EB9373'}
                    onChangeText={() => console.log("change")}
                    minLength={5}
                />

                    <TouchableOpacity
                    style={style.btn}
                    onPress={() => setViewUser(false)}
                    >
                        <Text style={style.textt}>Save Changes</Text>
                    </TouchableOpacity>

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

        <TouchableOpacity style={style.btn}
        onPress={() => setViewEmail(true)}>
            <Text style={style.text}>Email</Text>
        </TouchableOpacity>

        <Modal
            animationType="slide"
            onDismiss={() => console.log("close")}
            onShow={() => console.log("show")}
            transparent
            visible={viewEmail}
        >
            <View
                style={{flex: 1, backgroundColor: "rgba(1,1,1, 0.5)", justifyContent: "center", alignItems: "center"}}
            >

                <View
                    style={{height: "30%", width: "90%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: 20, borderRadius: 15, padding: 10, borderColor: "#F2C3B2", borderWidth: 1}}
                >
                    <TextInput 
                    placeholder="New Email" 
                    style={style.input} 
                    placeholderTextColor={'#EB9373'}
                    onChangeText={() => console.log("change")}
                    minLength={5}
                />

                    <TouchableOpacity
                    style={style.btn}
                    onPress={() => setViewEmail(false)}
                    >
                        <Text style={style.textt}>Save Changes</Text>
                    </TouchableOpacity>

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
        <TouchableOpacity style={style.btn}
        onPress={() => setViewPassword(true)}
        >
            <Text style={style.text}>Password</Text>
        </TouchableOpacity>


        <Modal
            animationType="slide"
            onDismiss={() => console.log("close")}
            onShow={() => console.log("show")}
            transparent
            visible={viewPassword}
        >
            <View
                style={{flex: 1, backgroundColor: "rgba(1,1,1, 0.5)", justifyContent: "center", alignItems: "center"}}
            >

                <View
                    style={{height: "30%", width: "90%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: 20, borderRadius: 15, padding: 10, borderColor: "#F2C3B2", borderWidth: 1}}
                >
                    <TextInput 
                    placeholder="New Password" 
                    style={style.input} 
                    placeholderTextColor={'#EB9373'}
                    onChangeText={() => console.log("change")}
                    minLength={5}
                />

                    <TouchableOpacity
                    style={style.btnn}
                    onPress={() => setViewPassword(false)}
                    >
                        <Text style={style.textt}>Save Changes</Text>
                    </TouchableOpacity>

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
    },
    textt:{
        color: "white",
        fontSize: 20,
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
    }
})

export default EditProfile;