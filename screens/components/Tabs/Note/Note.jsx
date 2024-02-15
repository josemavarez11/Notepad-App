import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Note = () => {
    const [info, setInfo] = useState([]);
    const navigation = useNavigation();
    const [token, setToken] = useState("");

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
        const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/deleteNote/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`
            }
        });
        
        if(response.status !== 200) return Alert.alert("Error", "Something went wrong deleting the note.");
    }

    useEffect(() => {
            getToken();
    }, []);

    return (
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
                               

                                {/* Boton de delete */}
                            </View>
                            
                            <View style={style.button}>
                                <TouchableOpacity
                                style={style.btn}
                                onPress={() => handleDeleteNote(info.id)}
                                >
                                <Image
                                    source={require('../../../../assets/delete-icon.png')}
                                    />
                                </TouchableOpacity>
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
    btn:{
        // marginLeft: 30,
        // backgroundColor: "red",
        // width: 40,
        // height: 40,
        // position: "relative",
    },
    contentBtn:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "blue",
        marginRight: 20,
    },
    button:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        position: "absolute",
        right: 0,
        marginRight: 20,
    }
});

export default Note;
