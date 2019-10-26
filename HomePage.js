
import React, { Component } from 'react';
import { Image ,ImageBackground,ScrollView} from 'react-native';
import { Container, Card, Content, CardItem, Button,View,  Text} from 'native-base';


type Props = {};
export default class HomePage  extends Component<Props> {

    state = {dataOne:[],dataTwo:[],dataThree:[]}

  static navigationOptions = {
    header:null
  };

  componentDidMount(): void
    {
        fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4").then((response)=>response.json())
        .then((resJson)=>{
          this.setState({dataOne:resJson},function(){
            console.log(resJson)
          })
        })
        fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3").then((response)=>response.json())
        .then((resJson)=>{
          this.setState({dataTwo:resJson},function(){
            console.log(resJson)
          })
        })
        fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2").then((response)=>response.json())
        .then((resJson)=>{
          this.setState({dataThree:resJson},function(){
            console.log(resJson)
          })
        })
    }

  render() {

  
    return (
        <Container>

          
        

        <View style={{
            width:"100%",height:'25%',   
             justifyContent: 'space-between' }}>
        <ImageBackground  source={require('./imgs/home-header.png')} style={{   flexDirection: 'column',
                    justifyContent: 'center',width:'100%',height:'100%',
                    alignItems: 'center'}}> 
        <Image source={require('./imgs/logo.png')}
                                style={{ width: '30%', height: '70%'}} />
        </ImageBackground>
        </View>

        

        <Content>

        <View style={{
            width:"100%",height:'8%', flexDirection: "row",flex:1
              }}>
            <Image source={require('./imgs/home-first-icon.png')}
                                style={{ width: '10%', height: '80%',margin:'2%'}} />
            <Text style={{color:'black' ,fontSize:16, marginTop:'4%'}}>Places For Going Out.</Text>
            <Button transparent style={{backgroundColor:'transparent' ,marginTop:'1%',marginLeft:'16%'}}  onPress={() => {
                    this.props.navigation.navigate('Places');
                            }}>
                        <Text style={{color:'green'}}>View More</Text>
                        </Button>      

            </View>

            
                    <ScrollView padder horizontal={true} >
                {this.returnData()}
                    </ScrollView>
            
            

        <View style={{
            width:"100%",height:'8%', flexDirection: "row",flex:1
              }}>
            <Image source={require('./imgs/home-second-icon.png')}
                                style={{ width: '10%', height: '80%',margin:'2%'}} />
            <Text style={{color:'black' ,fontSize:16, marginTop:'4%'}}>Restaurants & Coffee Shops.</Text>
            <Button transparent style={{backgroundColor:'transparent' ,marginTop:'1%',marginLeft:'3%'}}  onPress={() => {
                      this.props.navigation.navigate('Restaurants');
                            }}>
                        <Text style={{color:'green'}}>View More</Text>
                        </Button>      

            </View>

            <ScrollView padder horizontal={true} >
                {this.returnDataTwo()}
                    </ScrollView>



                    <View style={{
            width:"100%",height:'8%', flexDirection: "row",flex:1
              }}>
            <Image source={require('./imgs/home-third-icon.png')}
                                style={{ width: '10%', height: '80%',margin:'2%'}} />
            <Text style={{color:'black' ,fontSize:16, marginTop:'4%'}}>What Do I Do?</Text>
            <Button transparent style={{backgroundColor:'transparent' ,marginTop:'1%',marginLeft:'29%'}}  onPress={() => {
                          this.props.navigation.navigate('Things');
                            }}>
                        <Text style={{color:'green'}}>View More</Text>
                        </Button>      

            </View>

            <ScrollView padder horizontal={true} >
                {this.returnDataThree()}
                    </ScrollView>
            


            </Content>


       
        </Container>
    );
  }


  returnData()
  {
      return(
        this.state.dataOne.map((mappedData)=>{
          return(
            <Card styles={{backgroundColor: 'red'}} key={mappedData.id} >
  
            <CardItem button style={{flexDirection:'column',width:150,height:190}}  onPress={()=>{
              this.props.navigation.navigate('CardDetails',{title:mappedData.title.rendered
                ,image:mappedData.better_featured_image.source_url
                ,content:mappedData.content.rendered
                ,address:mappedData.acf.address
                ,phone:mappedData.acf.phone_number
                ,email:mappedData.acf.email_address
                ,maploc:mappedData.acf.map_location
                ,id:mappedData.id
                })
            }}>
               
                <Image style={{width:140 , height:130,borderRadius:10}}
                    source={{uri:mappedData.better_featured_image.source_url}}/>
                <Text style={{alignContent:'center'}}>
                        {mappedData.title.rendered}
                        </Text>         
                
            </CardItem>
            
    
          </Card>
          )
        })
      )
  }

  returnDataTwo()
  {
    return(
        this.state.dataTwo.map((mappedData)=>{
          return(
            <Card styles={{backgroundColor: 'red'}} key={mappedData.id} >
  
            <CardItem button style={{flexDirection:'column',width:150,height:190}}  onPress={()=>{
              this.props.navigation.navigate('CardDetails',{title:mappedData.title.rendered
                ,image:mappedData.better_featured_image.source_url
                ,content:mappedData.content.rendered
                ,address:mappedData.acf.address
                ,phone:mappedData.acf.phone_number
                ,email:mappedData.acf.email_address
                ,maploc:mappedData.acf.map_location
                ,id:mappedData.id
                })
            }}>
               
                <Image style={{width:140 , height:130,borderRadius:10}}
                    source={{uri:mappedData.better_featured_image.source_url}}/>
                <Text style={{alignContent:'center'}}>
                        {mappedData.title.rendered}
                        </Text>         
                
            </CardItem>
            
    
          </Card>
          )
        })
      )
  }
  returnDataThree()
  {
    return(
        this.state.dataThree.map((mappedData)=>{
          return(
            <Card styles={{backgroundColor: 'red'}} key={mappedData.id} >
  
            <CardItem button style={{flexDirection:'column',width:150,height:190}}  onPress={()=>{
              this.props.navigation.navigate('CardDetails',{title:mappedData.title.rendered
                ,image:mappedData.better_featured_image.source_url
                ,content:mappedData.content.rendered
                ,address:mappedData.acf.address
                ,phone:mappedData.acf.phone_number
                ,email:mappedData.acf.email_address
                ,maploc:mappedData.acf.map_location
                ,id:mappedData.id
                })
            }}>
               
                <Image style={{width:140 , height:130,borderRadius:10}}
                    source={{uri:mappedData.better_featured_image.source_url}}/>
                <Text style={{alignContent:'center'}}>
                        {mappedData.title.rendered}
                        </Text>         
                
            </CardItem>
            
    
          </Card>
          )
        })
      )
  }

}