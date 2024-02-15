import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotesUser = (arg) =>{
  const { title, description, id } = arg.route.params.info;
  const navigation = useNavigation();
  const [note, setNote] = useState(description);
  const [noteTitle, setNoteTitle] = useState(title);
  const [token, setToken] = useState("");
  const maxCharacters = 250;

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    setToken(token);
  }

  const handleBackButtonClick = async () => {
    if(note === description && noteTitle === title) return navigation.navigate('NotePage');;
    
    if(note !== description ){
      const urlUpdateNoteDescription = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/updateNoteDescription`
      const response = await fetch(urlUpdateNoteDescription, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ noteID: id, newDescription: note })
      });

      if(response.status !== 200){
        navigation.navigate('NotePage');
        Alert.alert("Error", `Something went wrong updating note ${noteTitle}`);
      }

      return navigation.navigate('NotePage');
    }
    
    if(noteTitle !== title ){
      const urlUpdateNoteTitle = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/updateNoteTitle`
      const response = await fetch(urlUpdateNoteTitle, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ noteID: id, newTitle: noteTitle })
      });

      if(response.status !== 200){
        navigation.navigate('NotePage');
        Alert.alert("Error", `Something went wrong updating title of ${title}`);
      }

      return navigation.navigate('NotePage');
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={style.content}>
      <View style={style.contentTitle}>
        <TouchableOpacity onPress={handleBackButtonClick}>
          <Image style={style.img} source={require('../../../../assets/back.png')} />
        </TouchableOpacity>
        <TextInput
          style={style.text}
          value={noteTitle}
          onChangeText={(e) => {
            setNoteTitle(e);
          }}
          keyboardType="default"
        />
      </View>
      <View style={style.contentText}>
        <TextInput
          style={style.info}
          placeholder="Escribe tu nota aquí"
          multiline={true}
          value={note}
          onChangeText={(e) => {
            if(e.length <= maxCharacters) setNote(e);
          }}
          maxLength={maxCharacters}
          keyboardType="default"
          numberOfLines={10}
        />
      </View>
      <View style={style.contador}>
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
        justifyContent: 'space-between',
        marginBottom: 30,
        width: '90%',
    },
    contentText:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // backgroundColor: 'red',
        height: '85%',
        width: '90%',

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
        padding: 10,
    },
    img:{
      marginRight: 20,
    },
    contador:{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "90%",
      marginTop: 10,
      // backgroundColor: 'black' 
    }
})
export default NotesUser;