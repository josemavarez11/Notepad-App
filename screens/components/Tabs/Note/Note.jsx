import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import note from "../../../../data/note";

const Note = () => {
    return (
        <FlatList
            data={note}
            renderItem={({ item }) => (
                <View style={style.contentMax}>
                <View style={style.contentNote}>
                    <View key={item.id} style={style.note}>
                        <View style={style.circle}></View>
                        <View>
                            <Text style={{ color: "#E97451" }}>{item.title}</Text>
                            <Text style={{ color: "rgba(233,116,81,0.6)" }}> 186 Character</Text>
                        </View>
                    </View>
                </View>
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{height: "100%"}}
        />
    );
};

const style = StyleSheet.create({
    contentNote: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    note: {
        backgroundColor: "#FAF0E8",
        width: 360,
        height: 70,
        borderRadius: 15,
        padding: 5,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
    circle: {
        width: 53,
        height: 53,
        borderRadius: 62,
        backgroundColor: "#E97451",
        marginRight: 15,
        marginLeft: 7,
    },
    // scroll:{
    //     marginBottom: 100
    // },
    contentMax:{
        marginBottom: 10,
    }
});

export default Note;