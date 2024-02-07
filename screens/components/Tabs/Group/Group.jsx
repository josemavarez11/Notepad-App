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
            console.log(info)
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
                            <View>
                                <Text style={{color: "#E97451"}}>{info.name}</Text>
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
        backgroundColor: "#FAE0C6",
        marginRight:15,
        marginLeft: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        height:26,
        width:26
    }

})

export default Group;