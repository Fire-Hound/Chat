import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
    } from "react-native";
let user;
export default class ChatBubble extends React.PureComponent {
    render(){
        let user = this.props.isUser
        let userName = this.props.userName
        if(user){
            return (
                <View style={styles.containerUser}>
                    <Text style={styles.textUser}>
                        {this.props.text}
                    </Text>
                </View>
            );
        }
        else{
            return (
                <View>
                    <Text style={styles.headerFriend}>
                        {this.props.userName}
                    </Text>
                    <View style={styles.containerFriend}>
                        <Text style={styles.textFriend}>
                            {this.props.text}
                        </Text>
                    </View>
                </View>
            );
        }
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
    },
    headerFriend:{
        fontWeight: "700"
    }
});