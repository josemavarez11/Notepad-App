import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";


const Group = () =>{
    const [info, setInfo] = useState([]);

    // Mientras tanto...
    const id = "65bea272875d3fc8b5de3d55";
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/categories/getAllCategories?id=${id}`);
            const info = await response.json();
            setInfo(info);
            // console.log(info)
        }
        fetchData();
    }, []);
    return (
        <FlatList
            data={info}
            renderItem={({ item: info }) => (
                <View style={style.contentMax}>
                    <View style={style.contentNote}>
                        <View key={info.id} style={style.note}>
                            <View style={style.circle}>
                                <Image
                                source={require('../../../../assets/icon-group.png')}
                                />
                            </View>
                            <View style={style.text}>
                                <Text style={{color: "#E97451"}}>{info.name}</Text>
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
    // contentMax:{
    //     display: "flex",
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    // },
    contentNote:{
        // flex: 1,
        // justifyContent: "space-around",
        marginTop: 20,
    },
    note:{
        backgroundColor: "black",
        width: 170,
        height: 160,
        borderRadius: 15,
        display: "flex",
        justifyContent:"flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 15,
        // marginTop: 50
        marginLeft: 15,
    },
    circle:{
        width: 53,
        height: 53,
        borderRadius: 62,
        backgroundColor: "#FAE0C6",
        marginLeft: 15,
        marginTop: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
        padding: 5,
    }

})

export default Group;