
import React, { Component } from 'react';
import { Image ,AsyncStorage,ImageBackground} from 'react-native';
import { Container, Header, Title, Content, CardItem, Button, Left, Right, Body, Icon, Text, Spinner } from 'native-base';




type Props = {};
export default class Splash  extends Component<Props> {
  state = { title: this.props.title }

  
  

  static navigationOptions = {
    header:null
  };
  render() {


  
    return (
      <ImageBackground  source={require('./imgs/splash.png')} style={{   flexDirection: 'column',
      justifyContent: 'center',width:'100%',height:'100%',
      alignItems: 'center'}}>



        <Image source={require('./imgs/logo.png')}
       style={{width: 100, height: 100}} />

        <Spinner  color="#fff" />
       {this.moveToHome()}
      </ImageBackground>
    );
  }
  moveToHome(){

    
    AsyncStorage.getItem("tutorialDone").then((here)=>{
      setTimeout(()=>{
        if(here==="yes"){
          this.props.navigation.navigate('Tabs');
        }else{
          this.props.navigation.navigate('Page1');
        }
      },1000)
    })


  }
}
