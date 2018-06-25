import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity  } from 'react-native';

export default class App extends React.Component {

  state ={ isLoading: true}


  componentDidMount(){
    return this.getAllTodo()
  }
  add = () => {
  this.postTodo()
  }

  postTodo = () => {
    fetch('http://192.168.0.7:5000/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({todo:"another todo"})
    })
    .then(res=>res.json())
    .then(this.getAllTodo());
  }

  getAllTodo = () => {
    fetch('http://192.168.0.7:5000/all/')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
      <FlatList 
      data={this.state.dataSource} 
      renderItem={({item})=>{
        return(<Text> {item.todo} </Text>);
      }}
      keyExtractor={(item, index)=>index.toString()}
      />
      <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
      <TouchableOpacity 
      onPress={this.add}
      style={{backgroundColor:'#000044', height:50, flex: 1,
      justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:'white', fontSize: 20}}>Add Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{backgroundColor:'#000044', height:50, flex: 1,
      justifyContent: 'center', alignItems: 'center', borderLeftWidth:0.5, borderColor: 'white' }}>
        <Text style={{color:'white', fontSize: 20}}>Refresh</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}
