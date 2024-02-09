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

// 

const initialParagraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam eos, pariatur earum aliquam rerum nobis suscipit quae culpa, perferendis, iure enim impedit cupiditate necessitatibus a qui molestias sint officiis.';
const maxCharacters = 250;

const [note, setNote] = useState(initialParagraph);

const handleTextChange = (text) => {
  if (text.length <= maxCharacters) {
    setNote(text);
  }
};

return (
  <View style={style.content}>
    <View style={style.contentTitle}>
      <Text style={style.text}>Title</Text>
    </View>
    <View style={style.contentText}>
      <TextInput
        style={style.info}
        placeholder="Escribe tu nota aquí"
        multiline={true}
        value={note}
        onChangeText={handleTextChange}
        keyboardType="default"
        numberOfLines={10}
      />

      
    </View>
    <View style={{marginTop: 550}}>
        <Text style={{color:'#E97451', fontWeight: "bold"}}>Caracteres: {note.length}/{maxCharacters}</Text>
      </View>
  </View>
);
};

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
        padding: 20,
    }
})
export default NotesUser;