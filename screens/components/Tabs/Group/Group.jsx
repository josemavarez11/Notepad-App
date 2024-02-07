import React from "react";
import  Constants  from "expo-constants";
import { View, Text, StyleSheet, FlatList } from "react-native";
import note from "../../../../data/note";

const Group = () =>{
    return (
        <FlatList
            data={note}
            renderItem={({ item }) => (
                <View style={style.contentMax}>
                    <View style={style.contentNote}>
                        <View key={item.id} style={style.note}>
                            <View style={style.circle}></View>
                            <View>
                                <Text style={{color: "#E97451"}}>{item.title}</Text>
                                <Text style={{color:"rgba(233,116,81,0.6)"}}> 186 Character</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{height: "100%", marginBottom: 100}}
        />
    );
}

const style = StyleSheet.create({
    contentMax:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    contentNote:{
        flex: 1,
        justifyContent: "space-around",
        // marginTop: 30,
    },
    note:{
        backgroundColor: "black",
        width: '48%',
        height: 170,
        borderRadius: 15,
        display: "flex",
        justifyContent:"flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15,
    },
    circle:{
        width: 53,
        height: 53,
        borderRadius: 62,
        backgroundColor: "#E97451",
        marginRight:15,
        marginLeft: 7,
    },

})

export default Group;