import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const NoteGroup = (arg) => {
    const [info, setInfo] = useState([]);
    const navigation = useNavigation();
    const [token, setToken] = useState("");

    const getToken = async () =>{
        const token = await AsyncStorage.getItem("token");
        setToken(token);
    }

    useEffect(() => {
        getToken();
    }, []);

    return (
        <FlatList
            data={arg.route.params.data}
            // id={infoData.id}
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
                                onPress={() => navigation.navigate("NotesUser", {info})}
                                >
                                <Text style={{ color: "#E97451"}}>{infoData.title}</Text>
                               </TouchableOpacity>

                                {/* Boton de delete */}
                            </View>
                            <View style={style.button}>
                                <TouchableOpacity
                                style={style.btn}
                                onPress={() => Alert.alert("Delete")}
                                >
                                <Image
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
    },
    text: {
        fontSize: 20,
        color: "#E97451",
        fontWeight: "bold",
    },
});

export default NoteGroup;