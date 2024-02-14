import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const NotesUser = (arg) =>{
  const { title, description, id } = arg.route.params.info;
  const navigation = useNavigation();
  const [note, setNote] = useState(description);
  const [token, setToken] = useState("");
  const maxCharacters = 250;

  
  const getToken = async () =>{
    const token = await AsyncStorage.getItem("token");
    setToken(token);
  }

  const handleTextChange = (e) => {
    if(e.length <= maxCharacters) {
      setNote(e);
    }
  };

  const updateNoteTitle = async (newTitle) => {
    try {
      const token = "your_token_here"; 
      const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/updateNoteTitle/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: newTitle })
      });
    } catch (error) {
      console.error('Error updating note title:', error);
    }
  };

  const updateNoteDescription = async (newDescription) => {
    try {
      const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/updateNoteDescription/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: newDescription })
      });

    } catch (error) {

      console.error('Error updating note description:', error);
    }
  };
  return (
    <View style={style.content}>
      <View style={style.contentTitle}>
        <TouchableOpacity onPress={() => navigation.navigate('NotePage')}>
          <Image style={style.img} source={require('../../../../assets/back.png')} />
        </TouchableOpacity>
        <Text style={style.text}>{title}</Text>
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
      <View style={{ marginTop: 20 }}>
        <Text style={{ color: '#E97451', fontWeight: "bold" }}>{note.length}/{maxCharacters}</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.8)",
        paddingTop: 70
    },
    contentTitle:{
        display: "flex",
        flexDirection: "row",
        gap: 120,
        marginBottom: 40,
    },
    contentText:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

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
        padding: 40,
    },
    img:{
      marginRight: 20,
    }
})
export default NotesUser;