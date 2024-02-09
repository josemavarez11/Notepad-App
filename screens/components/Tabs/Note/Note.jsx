import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import note from "../../../../data/note";

const Note = () => {
    const [info, setInfo] = useState([]);
    const navigation = useNavigation();
    const [token, setToken] = useState("");
    // const [idnote, setIdnote] = useState("");

    const getToken = async () =>{
        const token = await AsyncStorage.getItem("token");
        setToken(token);
    }

    const idSaveNote = async (id) =>{
        const idNote = await AsyncStorage.setItem("idnote", id);
        // setIdnote(id);
        navigation.navigate("NotesUser")
    }


    // Mientras tanto...
    const id = "65bea73e0455a3ba7c1fe7d8";
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/getAllNotes?id=${id}`);
            const info = await response.json();
            setInfo(info);
            // console.log(info)
        }
        getToken();
        fetchData();
    }, []);

    return (
        <FlatList
            data={info}
            renderItem={({ item: info}) => (
                <View style={style.contentMax}>
                    
                    <View style={style.contentNote}>
                        <View key={info.id} style={style.note}>
                            <View style={style.circle}>
                                <Image
                                    style={style.image}
                                    source={require('../../../../assets/note.png')}
                                />
                            </View>

                            <View>
                                <TouchableOpacity
                                onPress={() => idSaveNote(info.id)}
                                >
                                <Text style={{ color: "#E97451" }}>{info.title}</Text>
                                <Text style={{ color: "rgba(233,116,81,0.6)" }}> 186 Character</Text>
                               </TouchableOpacity>
                            </View>
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
    },
    note: {
        backgroundColor: "#FAF0E8",
        width: 360,
        height: 70,
        borderRadius: 15,
        padding: 5,
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
    contentMax: {
        marginBottom: 10,
    },
    image: {
        height: 26,
        width: 26,
    }
});

export default Note;
