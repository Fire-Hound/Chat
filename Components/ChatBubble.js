import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
let user;
export default class ChatBubble extends React.PureComponent {
    render(){
        user = this.props.user

        return (
            <View style={user ? styles.containerUser : styles.containerFriend}>
                <Text style={user ? styles.textUser : styles.textFriend}>
                {this.props.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerUser:{
        marginBottom: 10,
        marginRight: 10,
        width: null,
        height: null,
        padding: 10,
        borderRadius: 6,
        backgroundColor: "blue",
        alignItems:'center',
        justifyContent:'center',
    },
    containerFriend:{
        marginBottom: 10,
        marginRight: 10,
        width: null,
        height: null,
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#eeeeee",
        alignItems:'center',
        justifyContent:'center',
    },
    textUser:{
        fontSize: 18,
        color: "white"
    },
    textFriend:{
        fontSize: 18,
        color: "black"
    }
});