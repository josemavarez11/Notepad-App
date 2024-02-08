import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return(
        <Tab.Navigator
            initialRouteName="Note"
            screenOptions={{
                tabBarActiveTintColor: "#EDB381",
            }}>

            <Tab.Screen 
            name="Group" 
            component={GroupPage} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="folder-outline" color={color} size={26} />
                ),
                headerShown: false
            }}
            />

            <Tab.Screen 
            name="Note" 
            component={NotePage} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="note" color={color} size={26} />
                ),
                headerShown: false
            }}
            />

            <Tab.Screen 
            name="Profile" 
            component={MyStack} 
            options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="user" color={color} size={26} />
                ),
                headerShown: false
            }}
            />

        </Tab.Navigator>
    )

}