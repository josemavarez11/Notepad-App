import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";

//screems
// import Note from "./screens/components/Tabs/Note";
import NotePage from "./screens/components/Tabs/Note/NotePage";
import GroupPage from "./screens/components/Tabs/Group/GroupPage";
import Profile from "./screens/components/Tabs/Profile";
import Theme from "./screens/components/Stack/Theme";
import EditProfile from "./screens/components/Stack/EditProfile";
import Delete from "./screens/components/Stack/Delete";
import LogOut from "./screens/components/Stack/LogOut";

//icons
import { MaterialCommunityIcons, Feather} from '@expo/vector-icons';


const ProfileStack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <ProfileStack.Navigator
            initialRouteName="Profile"
        >
            <ProfileStack.Screen
            name="Profile Screen"
            component={Profile}
            options={{ 
                headerShown: false 
            }}
            />
            <ProfileStack.Screen 
            name="Theme" 
            component={Theme} 
            />
            <ProfileStack.Screen 
            name="Edit Profile" 
            component={EditProfile} 
            />

            <ProfileStack.Screen 
            name="Delete Account" 
            component={Delete} 
            />   

            <ProfileStack.Screen 
            name="Log Out" 
            component={LogOut} 
            />                      
        </ProfileStack.Navigator>
    )
}

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

const PrimaryTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
}

export default function Navigation() {
    return (
        <NavigationContainer theme={PrimaryTheme}>
            <MyTabs/>
        </NavigationContainer>
    );
}