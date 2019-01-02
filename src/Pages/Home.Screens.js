import React, { Component } from "react";
import  { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Icon } from "native-base";
import { Grid, Row } from 'react-native-easy-grid';
import styles from '../Styles/Common.styles'

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerLeft:<TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.openDrawer()}> 
            <Icon name="ios-menu"/>
        </TouchableOpacity>,
    })
    render() {
        return (<View style={styles.container}>
            <View  style={styles.containerBody}>
                <Grid>
                    <Row>
                        <Text>Home</Text>
                    </Row>
                </Grid>
            </View>
        </View>)
    }
};

export default createStackNavigator({
    HomeScreen: HomeScreen
});