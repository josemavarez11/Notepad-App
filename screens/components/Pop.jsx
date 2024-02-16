import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider,
} from "react-native-popup-menu";
import {Entypo} from "@expo/vector-icons";

const Pop = () => {
    return (
    <View style={{width: 26, backgroundColor: 'red', height: 26}}>
    <MenuProvider style={{position: "absolute"}}>
    <View>
    {/* <Entypo name="dots-three-vertical" size={24} color="black" /> */}
    <Text>hola</Text>
    <Menu>
      <MenuTrigger  />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} text="Delete"/>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
  </View>
  </MenuProvider>
  </View>
    )
}

export default Pop;