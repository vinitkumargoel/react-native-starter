import React from 'react';
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { SafeAreaView, ScrollView } from "react-native";

import HomeScreen from "../Pages/Home.Screens";

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex: 1,marginTop:50}}>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    }
},{
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: 'orange'
    }
});

export default AppDrawerNavigator;