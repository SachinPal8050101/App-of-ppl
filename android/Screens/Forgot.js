import React from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable} from 'react-native'
 
const Forgot=()=>{
   return (
    <View>
    {/* welcome container */}
   <View style={styles.welcomeContainer}>
       <Text style={styles.title}>Welcome from PPl </Text>
       <Text numberOfLines={3} style={styles.paragraph}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
       <Image style={styles.image} source={require('../../images/img_9.png')}/>
   </View>
   {/* LogIn container */}
   <View style={styles.logInContainer}>
      <Text style={styles.title}>Log In</Text>
       <View>
         <Text>Email</Text>
         <TextInput placeholder="Enter Your Email"/>
       </View>
       <View>
          
             <View style={styles.logInButtonContainer}>
               <Button color="#F47B13" title="Submit"/>
             </View>
            
       </View>

   </View>
</View>
   );
}
export default Forgot;

const styles=StyleSheet.create({
  container:{
      
  },
  welcomeContainer:{
     marginLeft:20
  },
  logInContainer:{
    marginLeft:20
  },
  title:{
    fontSize:36,
    fontWeight:'bold',
    color:'#F47B13'
  },
  paragraph:{
    color:"#807979"
  },
  image:{
     height:250,
     width:250,
     marginVertical:10
  },
  logInButtonContainer:{
    marginVertical:20,
    flexDirection:'row'
  },
  forgot:{
    margin:10
  }
})
