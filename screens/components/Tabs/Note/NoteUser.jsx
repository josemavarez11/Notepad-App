import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotesUser = () =>{
    // const [info, setInfo] = useState([]);
    // const [idNote, setIdNote] = useState("");

    // const IdNote = async() =>{
    //     const idNote = await AsyncStorage.getItem("idnote");
    //     setIdNote(idNote);
    //     console.log(idNote)
    // }

    // useEffect(() => {
    //     IdNote();

    //     // Mientras tanto...
    //     const id = "65bea73e0455a3ba7c1fe7d8";
    //     const fetchData = async () => {
    //         const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/getAllNotes?id=${id}`);
    //         const info = await response.json();
    //         setInfo(info);
    //         // console.log(info)
    //         console.log(info.title)
    //     }
    //     fetchData();
    //     console.log(idNote)
    //     // console.log(note);
    // },[])
    // const note = info.filter((note) => note._id == idNote);


    return(

            <View style={style.content}>
                <View style={style.contentTitle}><Text style={style.text}>Title</Text></View>
                <View style={style.contentText}>
                    <Text style={style.info}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa eius expedita, exercitationem cupiditate cum molestias, non veritatis dignissimos sit quasi dolorem. Temporibus itaque accusantium, excepturi perferendis harum consequuntur culpa?
                    </Text>
                </View>   
            </View>


    )
}

const style = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "red",
    // },
    // text: {
    //     fontSize: 20,
    //     color: "#333"
    // },
    content:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.8)",
        paddingTop: 70
    },
    contentTitle:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginBottom: 40,
    },
    contentText:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
    },
    text:{
        fontSize: 30,
        color: "#E97451",
        fontWeight: "bold",
    },
    info:{
        fontSize: 20,
        color: "#E97451", 
        textAlign: "justify",
        // width: "80%",
        padding: 15,
    }
})
export default NotesUser;