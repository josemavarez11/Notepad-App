import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Group from "./Group";
import Nav from "../../Nav";

const GroupPage = () =>{
    return (
        <View style={{backgroundColor: "rgba(255,255,255,0.8)", height: "100%"}}>
            <View style={style.contentBtn}>
                <TouchableOpacity
                    style={style.btn}
                >
                    <Image
                    style={style.img}
                        source={require('../../../../assets/add-group.png')}
                    />
                </TouchableOpacity>

                <Text style={style.text}>Group of Notes</Text>
            </View>
            <View style={style.content}>
                
                <View style={style.contentGroup}>
                    <Group />
                </View>   
            </View>

            <View style={style.Nav}>
                <Nav />
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: "center",
        marginTop: "10%",
        marginLeft: "40%",
        color:"#E97451",
        fontWeight: "bold",
        marginBottom: 20
    },
    content:{
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.8)"        
    },
    Nav:{
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    contentBtn:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: 10
    },
    img:{
        width: 30,
        height: 30,
    },
    btn:{
        backgroundColor: "#FAE0C6",
        width: 60,
        height: 40,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginTop: 40,
        marginLeft: 20,
        padding: 20
    }

})

export default GroupPage;