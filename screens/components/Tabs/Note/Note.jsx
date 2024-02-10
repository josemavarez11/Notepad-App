import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Fercho from "../../Fercho";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Note = () => {
    const [info, setInfo] = useState([]);
    const navigation = useNavigation();
    // const [token, setToken] = useState("");
    // const [idnote, setIdnote] = useState("");

    // const getToken = async () =>{
    //     const token = await AsyncStorage.getItem("token");
    //     setToken(token);
    // }

    // const idSaveNote = async (id) =>{
    //     const idNote = await AsyncStorage.setItem("idnote", id);
    //     // setIdnote(id);
    //     navigation.navigate("NotesUser")
    // }

    const createNote = async (data) => {
        // Lógica para enviar la data a la API y crear una nueva nota
        // Por ejemplo:
        // const response = await fetch('https://example.com/api/notes', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });
        // const newNote = await response.json();
        // Actualizar el estado 'info' con la nueva nota
        // setInfo([...info, newNote]);
    }

    const deleteNote = async (id) => {
        // Lógica para enviar la solicitud de eliminación de la nota con el ID proporcionado a la API
        // Por ejemplo:
        // const response = await fetch(`https://example.com/api/notes/${id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //     }
        // });
        // Verificar la respuesta y actualizar el estado 'info' eliminando la nota con el ID proporcionado
        // setInfo(info.filter(note => note.id !== id));
    }


    // // Mientras tanto...
    // const id = "65b678fca87f7c60ae2df5ad";
    
    useEffect(() => {
        const fetchData = async () => {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWI2NzhmY2E4N2Y3YzYwYWUyZGY1YWQiLCJpYXQiOjE3MDc1MzA4OTgsImV4cCI6MTcwNzUzNDQ5OH0.ujMkNGtewegtPSizU3szWBrk3MonXYLY3O5SriwSdzM'
            const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/getAllNotes`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${token}`,
                }
            });
            const info = await response.json();
            // console.log(info)
            setInfo(info);
        }
        // getToken();
        fetchData();
    }, []);

    return (
        <FlatList
            data={info}
            renderItem={({ item: info}) => (
               
                    
                    <View style={style.contentNote}>
                        <View key={info.id} style={style.note}>

                            <View style={style.circle}>
                                <Image
                                    style={style.image}
                                    source={require('../../../../assets/note.png')}
                                />
                            </View>

                            <View style={style.contentBtn}>
                                <TouchableOpacity
                                onPress={() => navigation.navigate("NotesUser")}
                                >
                                <Text style={{ color: "#E97451"}}>{info.title}</Text>
                               </TouchableOpacity>

                                {/* Boton de delete */}
                            </View>
                            <View style={style.button}>
                                <TouchableOpacity
                                style={style.btn}
                                onPress={() => Alert.alert("Delete")}
                                >
                                <Image
                                style={{color:  "red"}}
                                    source={require('../../../../assets/delete-icon.png')}
                                    />
                                </TouchableOpacity>
                               </View>
                        </View>
                    </View>
                    
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
