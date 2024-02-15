import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput} from "react-native";
import Group from "./Group";
import Nav from "../../Nav";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const GroupPage = () =>{
    const [viewModal, setViewModal] = useState(false);
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: "rgba(255,255,255,0.8)", height: "100%"}}>
            <View style={style.contentBtn}>
                <TouchableOpacity
                    style={style.btn}
                    onPress={() => setViewModal(true)}
                >
                    <Image
                    style={style.img}
                        source={require('../../../../assets/add-group.png')}
                    />
                </TouchableOpacity>

                <Modal
                animationType="slide"
                transparent
                visible={viewModal}
            >

                <View
                    style={{flex: 1, backgroundColor: "rgba(1,1,1, 0.5)", justifyContent: "center", alignItems: "center"}}
                >
                    <View
                        style={{height: "40%", width: "90%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: 20, borderRadius: 15, padding: 10, borderColor: "#F2C3B2", borderWidth: 1}}
                    >
                        <TextInput //aplicar validación de longitud
                            placeholder="New Group Note" 
                            style={style.input} 
                            placeholderTextColor={'#EB9373'}
                            onChangeText={e => setUsernameBox(e)}
                            minLength={5}
                        />

                        <View style={style.contentBtnPlus}>

                        <TouchableOpacity
                                style={style.btnModal}
                                onPress={() => alert("Group Created")}
                            >
                                <Text style={style.textt}>Create</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.btnModal}
                                onPress={() => setViewModal(false)}
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

                <Text style={style.text}>Group of Notes</Text>
            </View>
            <View style={style.content}>
                
                <View style={style.contentGroup}>
                    <Group />
                </View>   
            </View>

            <View style={style.Nav}>
                <Nav />
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: "center",
        marginTop: "10%",
        marginLeft: "40%",
        color:"#E97451",
        fontWeight: "bold",
        marginBottom: 20
    },
    content:{
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.8)"        
    },
    Nav:{
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    contentBtn:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: 10
    },
    img:{
        width: 30,
        height: 30,
    },
    btn:{
        backgroundColor: "#FAE0C6",
        width: 60,
        height: 40,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginTop: 40,
        marginLeft: 20,
        padding: 20
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
    contentBtnPlus:{
        display: "flex",
        flexDirection: "row",
        gap: 10
    },
    btnModal:{
        backgroundColor: "#EDB381",
        padding: 10,
        marginTop: "10%",
        width: 140,
        height: 55,
        alignSelf: "center",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },   
    textt:{
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },

})

export default GroupPage;