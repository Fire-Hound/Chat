import React from 'react';
import { FlatList, Text, Image, TouchableOpacity, Dimensions, StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native';
import Expo from 'expo';
import { Ionicons } from '@expo/vector-icons';
import ChatBubble from './Components/ChatBubble'
import {POST,GET} from './Components/Network'
let ip = "http://VikramCothur.pythonanywhere.com:/"
export default class App extends React.Component {
  state = {
    currentText: "",
    Texts: []
  }
  onChangeText = (text) => {
    this.setState({currentText:text})
  }
  sendText = async() => {
    let dataToSend = {user:"vikram", text:this.state.currentText}
    responseJson = await POST(ip, dataToSend)
    this.setState({
      currentText: "",
      Texts: [{user:"vikram", text:this.state.currentText, },
       ...this.state.Texts]
    })
  }
  update = async() =>{
    try{
    responseJson = await GET(ip, 
    this.state.Texts.length.toString())
    }catch(err){console.log(err)}
    console.log(this.state.Texts.length)
    if(responseJson==0) return;
    this.setState({Texts: [...responseJson.reverse(), ...this.state.Texts]})
  }
  renderChatBubble = ({item}) => <ChatBubble text={item.text} 
  isUser={item.user=="vikram"} userName={item.user}/>

  componentDidMount(){
    this.interval = setInterval(this.update, 4000)
    }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    return (
        <KeyboardAvoidingView enabled behavior="padding" 
        style={styles.container}>
          <View style={styles.header}>

              <Image 
              source={require('./Assets/StillVariables.jpg')}
              style={styles.groupImage}
              />
      
            <View style={styles.groupName}>
              <Text style={{fontSize: 24}}>
                Still Variables
              </Text>
            </View>
          </View>

          
          <FlatList contentContainerStyle={styles.body}
          style={{flex: 1, backgroundColor: "white",}}
          data={this.state.Texts}
          renderItem={this.renderChatBubble}
          keyExtractor={(item, index)=>index.toString()}
          inverted
          />
          
          <View style={styles.footer}>
            <View style={styles.keyboard}>

              <TextInput placeholder="Start Typing" 
              style={styles.input} 
              underlineColorAndroid="transparent"
              value={this.state.currentText}
              onChangeText={this.onChangeText}
              />

            </View>
            <TouchableOpacity style={styles.send} onPress={this.sendText}>
              <Ionicons name="md-send" color="blue" size={30}/>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    marginTop: Expo.Constants.statusBarHeight
  },
  header: {
    opacity: 0.7,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  },
  groupImage:{
    height: 40,
    width: 40,
    borderRadius: 20
  },
  groupName:{
    height: 40,
    width: 200,
    justifyContent: "center",
    marginLeft: 10,
  },
  body:{
    alignItems: "flex-end"
  },
  footer: {
    backgroundColor: "#eeeeee",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  keyboard: {
    backgroundColor: "white",
    width: Dimensions.get("window").width - 90,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20
  },
  input:{
    flex:1,
    fontSize:20, 
    marginLeft: 20
  },
  send:{
    marginLeft: 12
  }
});
