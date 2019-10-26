import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { Image ,ImageBackground,TextInput} from 'react-native';
import { Container, View, Text, Spinner , Card, CardItem,Left,Right,Body, Content, Button} from 'native-base';




type Props = {};
export default class Search  extends Component<Props> {
  state = { text:"",data1:[],data2:[],data3:[],data4:[] }

  
  componentDidMount(): void
    {
        fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4").then((response)=>response.json())
        .then((resJson)=>{
          this.setState({data1:resJson},function(){
            console.log(resJson)
          })
        })
        fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3").then((response)=>response.json())
        .then((resJson)=>{
          this.setState({data2:resJson},function(){
            console.log(resJson)
          })
        })
        fetch("http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2").then((response)=>response.json())
        .then((resJson)=>{
          this.setState({data3:resJson},function(){
            console.log(resJson)
          })
        })
    }

  static navigationOptions = {
    header:null
  };


decide()
{
    if(this.state.text =="")
    {
        return(
        
        <Container>


        <View style={{
            width:"100%",height:'17%',   
            justifyContent: 'space-between' }}>
        <ImageBackground  source={require('./imgs/theme-header.png')} style={{ 
              flexDirection: 'column',
                    justifyContent: 'center',width:'100%',height:'100%'
                    }}> 
            <Text style={{fontWeight:'bold',fontSize:25,color:'white',marginLeft:'4%'}}>
            Search
                </Text>     
                
        </ImageBackground>
        </View>

        {/* <TextInput */}
        <SearchBar
        lightTheme
        round
        containerStyle={{backgroundColor: "transparent"}}
        inputContainerStyle={{backgroundColor: "white"}}
        // style={{height: '6%',width:'70%', borderColor: 'gray', borderWidth: 1,marginTop:'5%',marginLeft:'14%'}}
        placeholder="Type Here..."
        onChangeText={(text) => this.setState({text} )}
                value={this.state.text}
      />
        
        {/* style={{height: '6%',width:'70%', borderColor: 'gray', borderWidth: 1,marginTop:'5%',marginLeft:'14%'}}
             onChangeText={(text) => this.setState({text} )}
                value={this.state.text}
                placeholder="Your Search"
             /> */}

            
                 <View  style={{   flexDirection: 'column',
                 justifyContent: 'center',width:'100%',height:'90%',
                 alignItems: 'center'}}>
     
                   <Image source={require('./imgs/nosearch-icon.png')}
                  style={{width: 100, height: 100}} />
           
                 </View>
             
            <Content>
             {this.callAlarm()}
             </Content>
        </Container>
        )
    }
    else
    {
        return(
        <Container>


        <View style={{
            width:"100%",height:'17%',   
            justifyContent: 'space-between' }}>
        <ImageBackground  source={require('./imgs/theme-header.png')} style={{ 
              flexDirection: 'column',
                    justifyContent: 'center',width:'100%',height:'100%'
                    }}> 
            <Text style={{fontWeight:'bold',fontSize:25,color:'white',marginLeft:'4%'}}>
            Search
                </Text>     
        </ImageBackground>
        </View>

        {/* <TextInput
        
        style={{height: '6%',width:'70%', borderColor: 'gray', borderWidth: 1,marginTop:'5%',marginLeft:'14%'}}
             onChangeText={(text) => this.setState({text} )}
                value={this.state.text}
                placeholder="Your Search"
             /> */}
      <SearchBar
          lightTheme
          round
          containerStyle={{backgroundColor: "transparent"}}
          inputContainerStyle={{backgroundColor: "white"}}
          // style={{height: '6%',width:'70%', borderColor: 'gray', borderWidth: 1,marginTop:'5%',marginLeft:'14%'}}
          placeholder="Type Here..."
          onChangeText={(text) => this.setState({text} )}
                  value={this.state.text}
      />
             
            <Content>
             {this.callAlarm()}
             </Content>
        </Container>
        )
    }
}

  render() {


  
    return (
            this.decide()
    );
  }


  callAlarm()
  {
   this.state.data4 = [...this.state.data1, ...this.state.data2,...this.state.data3]
    return (
    this.state.data4.map((mappedData) => {
        if (this.state.text ==="")
        {

        }
     else if(mappedData.title.rendered.includes(this.state.text))
    {
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
    }
  
      }) )
  }
 
}
