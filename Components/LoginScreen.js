import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
export default class LoginScreen extends React.Component {
    state = {
      username: ""
    }
    navigate = () => {
      if(this.state.username.length>0)
        this.props.navigation.navigate('Main', {userName:this.state.username})
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
          <Text>Enter Name</Text>
          <View style={{flexDirection: "row"}}>
          <TextInput style={styles.signIn} value={this.state.username} 
          onChangeText={(t)=>this.setState({username:t})} autoFocus/>
          <TouchableOpacity onPress={this.navigate}>
            <Ionicons name="ios-send" size={36} color="blue"
            style={{marginLeft: 8}}
            />
          </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
let styles = StyleSheet.create({
signIn:{
    color: "black",
    fontSize: 24,
    width: 150,
    borderWidth: 0.4,
    borderColor: "grey",
    marginLeft: 30,
}
})