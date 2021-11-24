import React,{useState} from 'react'
import axios from 'axios'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable} from 'react-native'
const Post=({item})=>{
   // console.log('pooooo',item.image)
   return (
      //  main container 
    <View style={styles.mainContainer}>
          {/* inner innerContainer */}
         <View style={styles.innerContainer}>
                   {/* TitleContainer */}
                  <View style={styles.titleContainer}>
                          <Text  style={{color:'#F47B13',fontSize:21,fontWeight:'bold'}}>User Interface</Text>
                          <View style={{flexDirection:'row',marginLeft:'auto'}}>
                               <Image style={{height:30}} source={require('../../../images/side_arc.png')}/>
                               <View style={{backgroundColor:'#FF5E33',height:30,width:45,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#fff'}}>Dog</Text>
                               </View>
                          </View>
                  </View>
                  {/* userDeatailsContainer */}
                  <View style={styles.userDetailesContainer}>
                           <Image source={require('../../../images/pic_small.png')}/>
                           <Text style={{color:'#F4713B',marginLeft:20,fontWeight:'bold'}}>Sachin Pal</Text>
                           <Text style={{color:'#F4713B',marginLeft:'auto'}}>11:55 Am </Text>
                  </View>
                     {/* imageContainer */}
                  <View style={styles.imageContainer}>
                     console.log('/home/parteek/my-project/android/{item.image}'')
                       {/* <Image style={{height:200,width:'100%'}} source={require(`/home/parteek/my-project/android/${item.image}`)} /> */}
                  </View>
                  {/* footerContainer */}
                  <View style={styles.footerContainer}>
                          {/* shareContainer */}
                          <View style={styles.shareContainer}>
                                <Image source={require('../../../images/icon_001.png')}/>
                          </View>
                          {/* FlageContainer */}
                          <View style={styles.flagContainer}>
                                 <Image source={require('../../../images/btm_img2.png')}/>
                          </View>
                          {/* likeContainer */}
                          <View style={styles.likeContainer}>
                          <Image source={require('../../../images/icon_003.png')}/>
                           </View>

                  </View>
         </View>
     </View>
   );
}
export default Post;

const styles=StyleSheet.create({
  mainContainer:{
       borderTopWidth:2,
     borderTopColor:'#F47B13'
  },
  innerContainer:{
        flexDirection:'column'
  },
  titleContainer:{
     flexDirection:'row',
     margin:5
  },
  userDetailesContainer:{
       margin:7,
       flexDirection:'row',
  },
  imageContainer:{

  },
  footerContainer:{
       height:30,
       marginVertical:7,
       justifyContent:'center',
       flexDirection:'row'     ,
  },
  likeContainer:{
   width:60,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#F47B13',
   marginRight:'auto',
  
   borderRadius:5
  },
  shareContainer:{
     width:60,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F47B13',
      borderRadius:5,
      marginRight:20
  },
  flagContainer:{
   width:60,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#F47B13',
   borderRadius:5,
   marginRight:20
  }
})
