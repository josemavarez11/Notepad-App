import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Constants, statusBarHeight } from "expo-constants";

const NoteGroup = (arg) => {
    const title = arg.route.params.info[0].name;
    const [cateTitle, setCateTitle] = useState(title);
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
        <View style={style.max}>
            <View style={style.a}>
            <TouchableOpacity onPress={() => navigation.navigate('NotePage')}>
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
                                    onPress={() => navigation.navigate("NotePage", {infoData})}
                                    >
                                    <Text style={{ color: "#E97451"}}>{title}</Text>
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