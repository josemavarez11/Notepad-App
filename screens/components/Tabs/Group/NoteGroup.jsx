import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const NoteGroup = (arg) => {
    const Focus = useIsFocused();
    const title = arg.route.params.info[0].name;
    const [cateTitle, setCateTitle] = useState(title);
    const navigation = useNavigation();
    const [token, setToken] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const getToken = async () =>{
        const token = await AsyncStorage.getItem("token");
        setToken(token);
    }

    handleDeleteNote = async (id) => {
        try {
            const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/deleteNote/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`
            }
        });
        setModalVisible(false);
        setInfo(info.filter((note) => note.id !== id));
        } catch (error) {
            console.log(error);
            alert("Something went wrong deleting the note.")
        }
    }

    useEffect(() => {
        if(Focus){
        getToken();
    }
    }, [Focus]);

    return (
        <View style={style.max}>
            <View style={style.a}>
            <TouchableOpacity onPress={() => navigation.navigate('Group')}>
                <Image style={style.img} source={require('../../../../assets/back.png')} />
            </TouchableOpacity>
            <TextInput
            style={style.text}
            value={cateTitle}
            onChangeText={(e) => {
                setCateTitle(e);
            }}
            keyboardType="default"
            maxLength={28}
            />
            </View>
        <View style={style.b}>
        <FlatList
            data={arg.route.params.data}
            renderItem={({ item: infoData}) => (
                        <View style={style.contentNote}>
                            <View style={style.note}>

                                <View style={style.circle}>
                                    <Image
                                        style={style.image}
                                        source={require('../../../../assets/note.png')}
                                    />
                                </View>

                                <View style={style.contentBtn}>
                                    <TouchableOpacity
                                    onPress={() => navigation.navigate("NotesUser", {infoData})}
                                    >
                                    <Text style={{ color: "#E97451"}}>{title}</Text>
                                </TouchableOpacity>

                                    {/* Boton de delete */}
                                </View>
                                <View style={style.button}>
                                    <TouchableOpacity
                                    style={style.btn}
                                    onPress={() => setModalVisible(true)}
                                    >
                                        <AntDesign name="ellipsis1" size={40} color="#E97451" />
                                    </TouchableOpacity>
                                    <Modal
                                        animationType="fade"
                                        transparent
                                        visible={modalVisible}
                                    >
                                        <View
                                            style={{
                                                flex:1,
                                                justifyContent: 'flex-end',
                                                alignItems: 'center',
                                                backgroundColor: "rgba(1,1,1,0.5)",
                                            }}>
                                                <View style={{
                                                    height: '25%',
                                                    width: '100%',
                                                    backgroundColor: '#FAF0E8',
                                                    borderTopLeftRadius: 50,
                                                    borderTopRightRadius: 50,
                                                }}>
                                                    <View
                                                    style={{
                                                        height: 45,
                                                        width: '100%',
                                                        display: 'flex',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'flex-start',
                                                        flexDirection: 'row',
                                                    }}>
                                                                                                           <TouchableOpacity
                                                        style={{marginRight: 25, marginTop: 20}}
                                                        onPress={() => setModalVisible(false)}
                                                    >
                                                    <Feather name="x" size={30} color="#E97451" />
                                                    </TouchableOpacity> 
                                                    </View>
                                                    <View style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        gap: 25,
                                                        marginTop: 20,
                                                    }}>
                                                        <TouchableOpacity
                                                            // style={{marginRight: 25, marginTop: 20}}
                                                            onPress={() => handleDeleteNote()}
                                                        >
                                                        <Text style={{color: "#E97451", fontSize: 20}}>Priority</Text>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity>
                                                            <Text style={{color: "red", fontSize: 20}}>Delete</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                        </View>

                                    </Modal>
                                </View>
                            </View>
                        </View>
            )}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={style.list}
        />
        </View>
    </View>
    );
};

const style = StyleSheet.create({
    contentNote: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    note: {
        backgroundColor: "#FAF0E8",
        width: 360,
        height: 70,
        borderRadius: 15,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    circle: {
        width: 53,
        height: 53,
        borderRadius: 62,
        backgroundColor: "#FAE0C6",
        marginRight: 15,
        marginLeft: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
        marginRight: 20,
    },
    text: {
        fontSize: 30,
        color: "#E97451",
        fontWeight: "bold",
    },
    max:{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",

    },
    list:{
        marginTop: "5%"
    },
    a:{
        height: "10%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",        
    },
    b:{
        height: "90%"
    }
});

export default NoteGroup;