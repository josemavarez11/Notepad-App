import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";


const Group = () =>{
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const token =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWI2NzhmY2E4N2Y3YzYwYWUyZGY1YWQiLCJpYXQiOjE3MDc1MzA4OTgsImV4cCI6MTcwNzUzNDQ5OH0.ujMkNGtewegtPSizU3szWBrk3MonXYLY3O5SriwSdzM'
            const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/categories/getAllCategories`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${token}`,
                },
            });
            const info = await response.json();
            console.log(info)
            setInfo(info);
            // console.log(response)

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
                                <Text style={style.text}>{info.name}</Text>
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
    contentNote:{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        gap: 10,
        marginTop: 10
    },
    note:{
        backgroundColor: "#FAF0E8",
        width: "90%",
        height: 160,
        borderRadius: 15,
        display: "flex",
        justifyContent:"flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
        gap: 45,
        // marginTop: 50
        marginLeft: 20,
    },
    circle:{
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
    text:{
        marginTop:70,
        fontSize: 20,
        color: "#E97451",
        fontWeight: "bold",
        // marginLeft: 10,
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "column",
        // gap: 5,
        // padding: 5,
    }

})

export default Group;