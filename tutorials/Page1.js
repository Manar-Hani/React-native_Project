
import React, { Component } from 'react';
import { Image ,AsyncStorage,ImageBackground} from 'react-native';
import { Container, Header, Title, Content, CardItem, Button,View, Left, Right, Body, Icon, Text, Spinner } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {};
export default class Page1  extends Component<Props> {
  state = { tutorialPage:0 }

  static navigationOptions = {
    header:null
  };
  render() {

  
    return (
       
        this.tutorialPages()
        
    );
  }

  tutorialPages()
  {
      if(this.state.tutorialPage===0)
      {
            return(
                <ImageBackground  source={require('../imgs/left.png')} style={{   flexDirection: 'column',
                justifyContent: 'center',width:'100%',height:'100%',
                alignItems: 'center'}}>
                  <Image source={require('../imgs/logo.png')}
                 style={{width: 100, height: 100}} />
        
                <View style={{
                     flexDirection: "column", flex: 1, position: "absolute",bottom:'10%', 
                      justifyContent: 'space-between', alignItems:'center'}}>
                        
                        <Image source={require('../imgs/home-first-icon.png')}
                                style={{ width: 70, height: 70}} />
                        <Text style={{color:'black' ,fontWeight:'bold',fontSize:20,marginTop:7}}>Places for going out.</Text>
                        <Text style={{paddingLeft:10 ,paddingRight:10 ,textAlign:'center'}}> Alot of places that you can choose between to go for a cool trip.</Text>

                    </View>
        
                <View style={{
                     flexDirection: "column", flex: 1, position: "absolute", bottom: 0 ,left:'68%', 
                      justifyContent: 'space-between', padding: '1%' }}>
                        
                        <Button transparent style={{backgroundColor:'transparent'}}  onPress={() => {
                                this.setState({tutorialPage:1})
                            }}>
                            
                        <Text style={{color:'black'}}>Next</Text>
                        <Icon name="arrow-forward" style={{color:'black'}}/>
                        </Button>
                        
                    </View>
        
                </ImageBackground>
            ) }

            else if(this.state.tutorialPage===1)
            {
                return(
                    <ImageBackground  source={require('../imgs/right.png')} style={{   flexDirection: 'column',
                    justifyContent: 'center',width:'100%',height:'100%',
                    alignItems: 'center'}}>
                      <Image source={require('../imgs/logo.png')}
                     style={{width: 100, height: 100}} />
            
                    <View style={{
                         flexDirection: "column", flex: 1, position: "absolute",bottom:'10%', 
                          justifyContent: 'space-between', alignItems:'center'}}>
                            
                            <Image source={require('../imgs/home-second-icon.png')}
                                    style={{ width: 70, height: 70}} />
                            <Text style={{color:'black' ,fontWeight:'bold',fontSize:20,marginTop:7}}>Restaurants & Coffee Shops.</Text>
                            <Text style={{paddingLeft:10 ,paddingRight:10 ,textAlign:'center'}}> Plenty of restuarants and coffee shops that you can visit.</Text>
    
                        </View>

                        
                    <View style={{
                     flexDirection: "column", flex: 1, position: "absolute", bottom: 0 ,left:'0%', 
                      justifyContent: 'space-between', padding: '1%' }}>
                        
                        <Button transparent style={{backgroundColor:'transparent'}}  onPress={() => {
                                this.setState({tutorialPage:0})
                            }}>
                        <Icon name="arrow-back" style={{color:'black'}}/>
                        <Text style={{color:'black'}}>Prev</Text>
                        
                        </Button>
                        
                    </View>
            
                    <View style={{
                     flexDirection: "column", flex: 1, position: "absolute", bottom: 0 ,left:'68%', 
                      justifyContent: 'space-between', padding: '1%' }}>
                        
                        <Button transparent style={{backgroundColor:'transparent'}}  onPress={() => {
                                this.setState({tutorialPage:2})
                            }}>
                            
                        <Text style={{color:'black'}}>Next</Text>
                        <Icon name="arrow-forward" style={{color:'black'}}/>
                        </Button>
                        
                    </View>
            
                    </ImageBackground>
                )
            }else if(this.state.tutorialPage===2)
            {
                return(
                    <ImageBackground  source={require('../imgs/left.png')} style={{   flexDirection: 'column',
                    justifyContent: 'center',width:'100%',height:'100%',
                    alignItems: 'center'}}>
                      <Image source={require('../imgs/logo.png')}
                     style={{width: 100, height: 100}} />
            
                    <View style={{
                         flexDirection: "column", flex: 1, position: "absolute",bottom:'10%', 
                          justifyContent: 'space-between', alignItems:'center'}}>
                            
                            <Image source={require('../imgs/home-third-icon.png')}
                                    style={{ width: 70, height: 70}} />
                            <Text style={{color:'black' ,fontWeight:'bold',fontSize:20,marginTop:7}}>What Do I Do ?</Text>
                            <Text style={{paddingLeft:10 ,paddingRight:10 ,textAlign:'center'}}> Plenty of services you will get from searching in this app.</Text>
    
                        </View>

                        
                    <View style={{
                     flexDirection: "column", flex: 1, position: "absolute", bottom: 0 ,left:'0%', 
                      justifyContent: 'space-between', padding: '1%' }}>
                        
                        <Button transparent style={{backgroundColor:'transparent'}}  onPress={() => {
                                this.setState({tutorialPage:1})
                            }}>
                        <Icon name="arrow-back" style={{color:'black'}}/>
                        <Text style={{color:'black'}}>Prev</Text>
                        
                        </Button>
                        
                    </View>

                    <Button success style={{width:'28%',height:'6%',borderRadius:15,
                     flexDirection: "column", flex: 1, position: "absolute", bottom: '2%' ,left:'37%', 
                      justifyContent: 'center', padding: '1%' }} 
                      onPress={() => {
                        this.props.navigation.navigate('Tabs');
                        {this.saveData()}
                    }}
                      ><Text> Start </Text></Button>

            
                    </ImageBackground>
                )
            }
            



  }


  saveData(){
    AsyncStorage.setItem("tutorialDone","yes")
      }

}
