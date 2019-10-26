import React, { Component } from 'react';
import { Image ,ImageBackground} from 'react-native';
import { Container,View,  Text , Tab, Tabs, Card, CardItem, Button, Body, Right, Content, Left} from 'native-base';




type Props = {};
export default class Places  extends Component<Props> {
  state = {dataPlaces:[] }

  
  

  static navigationOptions = {
    header:null
  };

  loadData()
  {
      fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2").then((response)=>response.json())
      .then((resJson)=>{
        this.setState({dataPlaces:resJson},function(){
          console.log(resJson)
        })
      })
  }


  loadAllPlaces()
  {
    return(
      this.state.dataPlaces.map((mappedData)=>{
        return(
          <Card styles={{flex:0}} key={mappedData.id} >

          <CardItem style={{width:'100%',height:200}}>
             
             <Image style={{width:'44%' , height:'90%',borderRadius:10}}
                  source={{uri:mappedData.better_featured_image.source_url}}/>
                  
                  <Body style={{marginLeft:'5%'}}>
                    <Text style={{alignContent:'center'}}>
                          {mappedData.title.rendered}
                     </Text> 

                      <Text style={{alignContent:'center',color:'green',marginTop:'4%',marginBottom:'4%'}}>
                          {mappedData.acf.address}
                      </Text>  


                      <Button success style={{borderRadius:15,justifyContent: 'center'}}
                       onPress={() => {
                        this.props.navigation.navigate('CardDetails',{title:mappedData.title.rendered
                          ,image:mappedData.better_featured_image.source_url
                          ,content:mappedData.content.rendered
                          ,address:mappedData.acf.address
                          ,phone:mappedData.acf.phone_number
                          ,email:mappedData.acf.email_address
                          ,maploc:mappedData.acf.map_location
                          ,id:mappedData.id
                          })
                    }}
                      ><Text> Details </Text></Button>
                      </Body>

          </CardItem>
  
        </Card>
        )
      })
    )
  }


  render() {


  
    return (
        <Container>
            
          {this.loadData()}

        <View style={{
            width:"100%",height:'17%',   
            justifyContent: 'space-between' }}>
        <ImageBackground  source={require('./imgs/theme-header.png')} style={{ 
              flexDirection: 'column',
                    justifyContent: 'center',width:'100%',height:'100%'
                    }}> 
            <Text style={{fontWeight:'bold',fontSize:25,color:'white',marginLeft:'4%'}}>
            Things to do
                </Text>     
        </ImageBackground>
        </View>

        <Content>
                      {this.loadAllPlaces()}
                      </Content>

                    
        </Container>

    );
  }

}