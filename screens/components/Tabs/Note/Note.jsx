import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Note = () => {
    const Focus = useIsFocused();
    const [info, setInfo] = useState([]);
    const navigation = useNavigation();
    const [token, setToken] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [addCategory, setAddCategory] = useState(false);
    const [addPriority, setaddPriority] = useState(false);
    const [priority, setPriority] = useState([])
    const [category, setCategory] = useState([])

    const getToken = async () =>{
        const token = await AsyncStorage.getItem("token");
        setToken(token);
        await getNotes(token);
    }

    const getNotes = async(authToken) =>{
            const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/getAllNotes`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                }
            })
            const info = await response.json();
            setInfo(info);
    }

    const getCategory = async (token) => {
        const response = await fetch(
          `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/categories/getAllCategories`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const category = await response.json();
        console.log(category);
        setCategory(category);
      };

    handleDeleteNote = async (id) => {
        try {
            const url = `https://notepad-api-dev-hsee.3.us-1.fl0.io/api/notes/deleteNote/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`
            }
        });
        setModalVisible(false);
        setInfo(info.filter((note) => note.id !== id));
        } catch (error) {
            console.log(error);
            alert("Something went wrong deleting the note.")
        }
    }

    const getPriority = async () => {
        try{
            const response = await fetch(`https://notepad-api-dev-hsee.3.us-1.fl0.io/api/priorities/getAllPriorities`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },    
            })
            const priority = await response.json();
            // console.log(priority);
            setPriority(priority);
            setaddPriority(true)
    }catch (error){
        console.log(error);
        alert("Something went wrong getting the priorities.")}
    }

    useEffect(() => {
        if (Focus){
            getToken();
        }
    }, [Focus]);

    return (
        <FlatList
            data={info}
            id={info.id}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: info}) => (
               
                    <TouchableOpacity
                    onPress={() => navigation.navigate("NotesUser", {info})}
                    >
                    <View style={style.contentNote}>
                        <View key={info.id} style={style.note}>

                            <View style={style.circle}>
                                <Image
                                    style={style.image}
                                    source={require('../../../../assets/note.png')}
                                />
                            </View>

                            
                            <View style={style.contentBtn}>
                                <View><Text style={{ color: "#E97451"}}>{info.title}</Text></View>
                               

                                {/* Boton de delete */}
                            </View>
                            
                                <View style={style.button}>
                                    <TouchableOpacity
                                    style={style.btn}
                                    onPress={() =>setModalVisible(true)} 
                                    >
                                        <AntDesign name="ellipsis1" size={40} color="#E97451" />
                                    </TouchableOpacity>

                                    <Modal
                                    animationType="fade"
                                    transparent
                                    visible={modalVisible}
                                    >
                                        <View style={{
                                            flex:1,
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                            backgroundColor: "rgba(1,1,1,0.5)",
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
                                                <View style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    flexDirection: 'column',
                                                    marginTop: '4%',
                                                    gap: 25,
                                                }}>

                                                    <TouchableOpacity
                                                    onPress={() => getCategory()}>
                                                        <Text style={{color: '#E97451', fontSize: 20}}>Add To Category</Text>
                                                    </TouchableOpacity>

                                                    <Modal
                                                        animationType="fade"
                                                        transparent
                                                        visible={addCategory} //addCategory
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
                                                                        onPress={() => setAddCategory(false)}
                                                                    >
                                                                    <Feather name="x" size={30} color="#E97451" />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                
                                                                <View  style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        flexDirection: 'column',
                                                                        marginTop: '3%',
                                                                        gap: 25,
                                                                    }}>
                                                                    <FlatList
                                                                            data={''}
                                                                            renderItem={({item}) => (
                                                                                <View style={{
                                                                                    display: 'flex',
                                                                                    justifyContent: 'center',
                                                                                    alignItems: 'center',
                                                                                    flexDirection: 'column',
                                                                                    marginTop: '1%',
                                                                                    gap: 25,
                                                                                }}>
                                                                                    <TouchableOpacity key={item.id}>
                                                                                        <Text style={style.text}>{item.description}</Text>
                                                                                    </TouchableOpacity>
                                                                                </View>
                                                                            )}
                                                                        style={{
                                                                            height: '50%',
                                                                            width: '80%',
                                                                            // backgroundColor: 'red',
                                                                            marginBottom: 10,
                                                                            
                                                                        
                                                                        }}
                                                                        showsHorizontalScrollIndicator={false}
                                                                        showsVerticalScrollIndicator={false}
                                                                        />
                                                                    </View>
                                                            </View>
                                                        </View>
                                                        
                                                    </Modal>

                                                    <TouchableOpacity
                                                        onPress={() => getPriority()}
                                                    >
                                                        <Text
                                                            style={{color: '#E97451', fontSize: 20}}
                                                        >Add Priority</Text>
                                                    </TouchableOpacity>

                                                    <Modal
                                                        animationType="fade"
                                                        transparent
                                                        visible={addPriority} //addCategory
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
                                                                        onPress={() => setaddPriority(false)}
                                                                    >
                                                                    <Feather name="x" size={30} color="#E97451" />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                
                                                                <View  style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        flexDirection: 'column',
                                                                        marginTop: '3%',
                                                                        gap: 25,
                                                                    }}>
                                                                        <FlatList
                                                                            data={priority}
                                                                            renderItem={({item}) => (
                                                                                <View style={{
                                                                                    display: 'flex',
                                                                                    justifyContent: 'center',
                                                                                    alignItems: 'center',
                                                                                    flexDirection: 'column',
                                                                                    marginTop: '1%',
                                                                                    gap: 25,
                                                                                }}>
                                                                                    <TouchableOpacity key={item.id}>
                                                                                        <Text style={style.text}>{item.description}</Text>
                                                                                    </TouchableOpacity>
                                                                                </View>
                                                                            )}
                                                                        style={{
                                                                            height: '50%',
                                                                            width: '80%',
                                                                            // backgroundColor: 'red',
                                                                            marginBottom: 10,
                                                                            
                                                                        
                                                                        }}
                                                                        showsHorizontalScrollIndicator={false}
                                                                        showsVerticalScrollIndicator={false}
                                                                        />
                                                                    </View>
                                                            </View>
                                                        </View>
                                                        
                                                    </Modal>

                                                    

                                                    <TouchableOpacity
                                                        onPress={() => handleDeleteNote(info.id)}
                                                    >
                                                        <Text
                                                            style={{color: 'red', fontSize: 20}}
                                                        >Delete Note</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>
                                        </View>

                                    </Modal>

                               </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                    
            )}
            //keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}r
            style={{ height: "100%" }}
        />
    );
};

const style = StyleSheet.create({
    contentNote: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    note: {
        backgroundColor: "#FAF0E8",
        width: 360,
        height: 70,
        borderRadius: 15,
        // padding: 5,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
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
    image: {
        height: 26,
        width: 26,
    },
    btn:{
        // marginLeft: 30,
        // backgroundColor: "red",
        // width: 40,
        // height: 40,
        // position: "relative",
    },
    contentBtn:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "blue",
        marginRight: 20,
    },
    button:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        position: "absolute",
        right: 0,
        marginRight: 20,
    },
    text: {
        marginTop: 60,
        fontSize: 20,
        color: "#E97451",
        fontWeight: "bold",
    },
});

export default Note;
