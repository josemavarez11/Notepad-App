import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

const Group = () => {
  const Focus = useIsFocused();
  const navigation = useNavigation();
  const [info, setInfo] = useState([]);
  const [token, setToken] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    setToken(token);
    await getGroups(token);
  };

  const getGroups = async (authToken) => {
    const response = await fetch(
      `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/categories/getAllCategories`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    const info = await response.json();
    setInfo(info);
  };

  const getNotesCategory = async (id) => {
    const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/getNotesByCategory?categoryID=${id}`;
    const response = await fetch(url,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    navigation.navigate("NotesGroup", { data, info });
  };

  const handleDeleteCategoryClick = async (id) => {
    const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/categories/deleteCategory/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if(response.status !== 200) return Alert.alert("Error", `Something went wrong deleting the category`);
  }

  const handleEndEditingTitle = async (id, newCategoryTitle) => {
    const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/categories/updateCategoryName`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        categoryID: id,
        newName: newCategoryTitle,
      }),
    });

    if(response.status !== 200) return Alert.alert("Error", `Something went wrong updating the category`);
  }

  useEffect(() => {
    if (Focus) {
      getToken();
    }
  }, [Focus]);

  return (
    <FlatList
      data={info}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => getNotesCategory(item.id)}>
          <View style={style.contentNote}>
            <View key={item.id} style={style.note}>
              <View style={style.circle}>
                <Image source={require("../../../../assets/icon-group.png")} />
              </View>

              
                <View style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  marginLeft: -20,
                }}>
                  <TextInput 
                  style={style.text}
                  onChangeText={e => setCategoryTitle(e)}
                  onEndEditing={() => handleEndEditingTitle(item.id, categoryTitle)}
                  >
                    {item.name}
                  </TextInput>
                </View>
            </View>

            <View style={style.button}>
                <TouchableOpacity
                  onPress={() => handleDeleteCategoryClick(item.id)}
                >
                    <Image
                      source={require('../../../../assets/delete-icon.png')}
                   />
                </TouchableOpacity>
            </View>

          </View>
          </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ height: "78%" }}
    />
  );
};

const style = StyleSheet.create({
  contentNote: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    marginRight: 10,  
  },
  note: {
    backgroundColor: "#FAF0E8",
    width: "80%",
    height: 140,
    borderRadius: 15,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 45,
    marginLeft: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 62,
    backgroundColor: "#FAE0C6",
    marginLeft: 15,
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 60,
    fontSize: 20,
    color: "#E97451",
    fontWeight: "bold",
  },
  button:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    marginRight: 50,
}
});

export default Group;
