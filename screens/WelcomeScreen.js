import React, {Component} from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
  constructor(){
    super()
    this.state={
      emailId : '',
      password : ''
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(()=>{
      return Alert.alert("Successfully Logged In")
    })
    .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId,password)
    .then((response)=>{
      return Alert.alert("User Added Succesfully")
    })
    .catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.profileContainer}>
          <Image
            style = {styles.logo}
            source = {{
              uri : 'https//www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F84%2Fb6%2Ffd%2F84b6fd36de0dfc3d3db085d4ed791c1d.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F199988039681091684%2F&tbnid=g5jHpY6A0VYa6M&vet=12ahUKEwiYi4vS0J3tAhVJFSsKHatdAN8QMygDegUIARDdAQ..i&docid=oCWfX2IkHkNCHM&w=670&h=1109&q=santa%20clause&ved=2ahUKEwiYi4vS0J3tAhVJFSsKHatdAN8QMygDegUIARDdAQ'
            }}
          />
          <Text style = {styles.title}>Book Santa</Text>
        </View>
        <View style = {styles.buttonContainer}>
        <TextInput
          style = {styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style = {[styles.button,{marginBottom:20, marginTop:20}]}
            onPress={()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style = {styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  },
  logo : {
    width : 60,
    heigth : 60
  }
})