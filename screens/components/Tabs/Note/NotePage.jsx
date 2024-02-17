import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from "react-native";
import Note from "./Note";
import Constants  from "expo-constants";
import Nav from "../../Nav";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from '@expo/vector-icons';
import { useState } from "react";

const NotePage = () =>{
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
            <View style={style.contentBtn}>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: 15,
                    marginLeft: 20,
                
                }}>
                    <TouchableOpacity
                        style={style.btn}
                        onPress={() => navigation.navigate('NewNote')}
                    >
                        <Image
                            source={require('../../../../assets/add-note.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.btn}
                        onPress={() => setModalVisible(true)}
                    >
                        <AntDesign name="filter" size={24} color="#E97451" />
                    </TouchableOpacity>
                    
                    <Modal
                                                        animationType="fade"
                                                        transparent
                                                        visible={modalVisible} //addCategory
                                                    >
                                                        <View style={{
                                                            flex:1,
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                            // backgroundColor: "rgba(1,1,1,0.1)",
                                                        }}>
                                                            <View
                                                                style={{
                                                                    height: '25%',
                                                                    width: '100%',
                                                                    backgroundColor: '#FAF0E8',
                                                                    borderTopLeftRadius: 50,
                                                                    borderTopRightRadius: 50,
                                                                }}
                                                            >
                                                                <View style={{
                                                                    height: 45,
                                                                    width: '100%',
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-end',
                                                                    alignItems: 'flex-start',
                                                                    flexDirection: 'row',
                                                                }}>
                                                                    <TouchableOpacity
                                                                        style={{marginRight: 25, marginTop: 20}}
                                                                        onPress={() => setModalVisible(false)}
                                                                    >
                                                                    <Feather name="x" size={30} color="#E97451" />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                
                                                                <View  style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        flexDirection: 'column',
                                                                        marginBottom: 120,
                                                                        gap: 20,
                                                                    }}>
                                                                        <TouchableOpacity>
                                                                            <Text style={{color: '#E97451', fontSize: 20}}>All</Text>
                                                                        </TouchableOpacity>

                                                                        <TouchableOpacity>
                                                                            <Text style={{color: 'green', fontSize: 20}}>Favorite</Text>
                                                                        </TouchableOpacity>

                                                                        <TouchableOpacity>
                                                                            <Text style={{color: 'red', fontSize: 20}}>Important</Text>
                                                                        </TouchableOpacity>

                                                                        <TouchableOpacity>
                                                                            <Text style={{color: 'gray', fontSize: 20}}>Not Important</Text>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                            </View>
                                                        </View>
                                                        
                                                    </Modal>
                    

                </View>
            
                <Text style={style.text}>Notes</Text>
                
            </View>
         
            <View style={style.content}>
                <View style={style.contentBar}>
                </View>
                    <Note />
                    <Nav />
            </View>  
        </View>
    );
}

const style = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: "center",
        marginTop: "10%",
        // marginLeft: "60%",
        // padding: 10,
        color:"#E97451",
        fontWeight: "bold",
        // marginRight: 150
        // gap: 30
    },
    input:{
        backgroundColor: "rgba(237, 179,129, 0.4)",
        width: 327,
        height: 45,
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 10,
        fontSize: 20
    },
    content:{
        display: "flex",
        flexDirection: "column",
        marginBottom: Constants.statusBarHeight + 150,
        // gap: 20,
    },
    contentBar:{
        marginBottom: 30,
    
    },
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
        alignItems: "flex-start",
        flexDirection: "row",
    },
    circle: {
        width: 53,
        height: 53,
        borderRadius: 62,
        backgroundColor: "#FAE0C6",
        marginRight: 15,
        marginLeft: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    // scroll:{
    //     marginBottom: 100
    // },
    image:{
        height:26,
        width:26,
    },
    contentBtn:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        gap: 150,
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
    }
});

export default NotePage;
