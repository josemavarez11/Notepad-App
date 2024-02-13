import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Group = () => {
  const navigation = useNavigation();
  const [info, setInfo] = useState([]);
  const [token, setToken] = useState("");
  // const [info2, setInfo2] = useState("");



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
      // console.log(data);
      navigation.navigate("NotesGroup", { data });
  };

  useEffect(() => {
    getToken();
    // getNotesCategory();
  }, []);

  return (
    <FlatList
      data={info}
      renderItem={({ item }) => (
        <View style={style.contentMax}>
          <View style={style.contentNote}>
            <View key={item.id} style={style.note}>
              <View style={style.circle}>
                <Image source={require("../../../../assets/icon-group.png")} />
              </View>
              {/*  */}
              <TouchableOpacity onPress={() => getNotesCategory(item.id)}>
                <View>
                  <Text style={style.text}>{item.name}</Text>
                </View>
              </TouchableOpacity>
              {/*  */}
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ height: "100%", marginBottom: 100 }}
    />
  );
};

const style = StyleSheet.create({
  contentNote: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
  },
  note: {
    backgroundColor: "#FAF0E8",
    width: "90%",
    height: 160,
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
    marginTop: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 70,
    fontSize: 20,
    color: "#E97451",
    fontWeight: "bold",
  },
});

export default Group;
