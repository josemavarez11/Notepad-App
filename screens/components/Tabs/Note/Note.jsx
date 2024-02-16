import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Pop from "../../Pop";


const Note = () => {
    const Focus = useIsFocused();
    const [info, setInfo] = useState([]);
    const navigation = useNavigation();
    const [token, setToken] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const getToken = async () =>{
        const token = await AsyncStorage.getItem("token");
        setToken(token);
        await getNotes(token);
    }

    const getNotes = async(authToken) =>{
            const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/getAllNotes`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                }
            })
            const info = await response.json();
            setInfo(info);
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
        setInfo(info.filter((note) => note.id !== id));
        } catch (error) {
            console.log(error);
            alert("Something went wrong deleting the note.")
        }
        setModalVisible(false);
        // navigation.navigate("NotePage");
    }

    useEffect(() => {
        if (Focus){
            getToken();
        }
    }, [Focus]);

    return (
        <View>
        <FlatList
            data={info}
            id={info.id}
            renderItem={({ item: info}) => (
               
                    <TouchableOpacity
                    onPress={() => navigation.navigate("NotesUser", {info})}
                    >
                    <View style={style.contentNote}>
                        <View key={info.id} style={style.note}>

                            <View style={style.circle}>
                                <Image
                                    style={style.image}
                                    source={require('../../../../assets/note.png')}
                                />
                            </View>

                            
                            <View style={style.contentBtn}>
                                <View><Text style={{ color: "#E97451"}}>{info.title}</Text></View>
                                
                            </View>
                            
                            <View style={style.button}>
                                <TouchableOpacity
                                onPress={() => setModalVisible(true)} 
                                >
                              <AntDesign name="ellipsis1" size={35} color="#E97451" />
                                    
                                </TouchableOpacity>
                                <Modal
                                transparent
                                visible={modalVisible}
                                animationType="slide"
                                >
                                    <View style={{
                                        flex: 1,
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                    }}>
                                        
                                        <View style={{
                                            height: '25%',
                                            width: '100%',
                                            backgroundColor: "rgba(255,255,255,1)",
                                            borderTopEndRadius: 50,
                                            borderTopStartRadius: 50,
                                        }}>
                                            <TouchableOpacity style={{marginLeft: 380, marginTop: 20}}
                                                onPress={() => setModalVisible(false)}
                                            >
                                                <Feather name="x" size={24} color="#E97451" />
                                            </TouchableOpacity>
                                        <View style={style.c}>
                                            <TouchableOpacity
                                                onPress={() => handleDeleteNote(info.id)}
                                            >
                                                <Text style={style.txt}>Add To Category</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                // style={style.btns}
                                                onPress={() => setModalVisible(false)}
                                            >
                                                <Text style={style.txt}>Add Priority</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                // style={style.btns}
                                                onPress={() => setModalVisible(false)}
                                            >
                                                <Text style={style.txtD}>Delete Note</Text>
                                            </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                               </View>
                        </View>
                        </View>
                            
                    </TouchableOpacity>

                
            )}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}r
            style={{ height: "100%" }}
        />
        
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
        // padding: 5,
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
    image: {
        height: 26,
        width: 26,
    },
    contentBtn:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
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
    btns:{
        backgroundColor: "#FAE0C6",
        padding: 10,
        width: 150,
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
    },
    c:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2%",
        gap: 35,
    },
    txt:{
        fontSize: 15,
        color: "#E97451",
    },
    txtD:{
        fontSize: 15,
        color: "red",
    }

});

export default Note;
