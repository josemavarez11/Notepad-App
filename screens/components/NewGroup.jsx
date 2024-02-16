import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewGroup = (arg) =>{
    const navigation = useNavigation();
//   const { title, description, id } = arg.route.params.info;
    const [token, setToken] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDescription, setNoteDescription] = useState("");

  const getToken = async () =>{
    const token = await AsyncStorage.getItem("token");
    setToken(token);
  }

  const handleBackButtonClick = async () => {
    if (noteTitle.length === 0 && noteDescription.length === 0) return navigation.navigate('NotePage');
    if (noteTitle.length === 0) return Alert.alert('Your new note requires a title!');

    const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/createNote`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: noteTitle,
        description: noteDescription
      })
    });

    if (response.status !== 201) {
      Alert.alert('Error', 'There was an error creating your note.');
      return navigation.navigate('NotePage');
    }
   
    navigation.navigate('NotePage');
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={style.content}>
      <View style={style.contentTitle}>
        <TouchableOpacity onPress={handleBackButtonClick}>
          <Image style={style.img} source={require('../../assets/back.png')} />
        </TouchableOpacity>
        <TextInput
            style={style.text}
            placeholder="Title"
            // value={''}
            // onChangeText={''}
            onChangeText={e => setNoteTitle(e)} 
            keyboardType="default"
            maxLength={28}
        />
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
        width: "90%",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    contentText:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
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
        padding: 40,
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
export default NewGroup;