import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import HomePage from './HomePage';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { withNavigation } from 'react-navigation';

type Props = {};
class MyHeader extends Component<Props> {
    state = {title: this.props.title}
  render() {
    return (

            <Header androidStatusBarColor="grey" style={{height:100}}>
                
                <ImageBackground  source={require('./imgs/theme-header.png')} style={{
                    width:'110%',height:100 ,flexDirection: "row"}}> 
                    {/* <Text style={{fontWeight:'bold',fontSize:25,color:'white',marginLeft:'4%'}}>
                    { this.props.navigation.getParam('title')}
                        </Text>      */}
                  <Left>
                    {this.backButton()}
                </Left>
                <Body>
                <Title>{this.state.title}</Title>
                </Body>
                <Right>
                    <Button transparent  onPress={()=>{
                        this.props.navigation.navigate('HomePage')
                    }}>
                        {/* <Icon name='google-home' type="MaterialCommunityIcons"/> */}
                    </Button>
                </Right>
                </ImageBackground>
            </Header>
    );
  }
  backButton(){
        if(this.props.home){
            return(
                <Button transparent>
                    <Icon name='home' />
                </Button>
            )
        }else{
            return(
                <Button transparent onPress={()=>{
                    this.props.navigation.goBack();
                }}>
                    <Icon name='arrow-back' />
                </Button>
            )
        }
  }
}

export default withNavigation(MyHeader);