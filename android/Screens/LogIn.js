import React,{useState} from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable, KeyboardAvoidingView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
const LogIn=({navigation,setToken})=>{
  const [logIn,setLogIn]=useState({
    email:'',
    password:''
  })
  const handle1=(e)=>{
       setLogIn({...logIn,
         email:e
       })
  }
  const handle2=(e)=>{
    setLogIn({...logIn,
      password:e
    })
   }
  const submitLogIn=()=>{
    const {email,password}=logIn
    console.log(logIn)
    axios
      .post('http://192.168.100.243:5000/login',{
        ...logIn,
      }).then(res=>{
      alert('Welcome !')
       setToken(true)
      
    }).catch((err)=>{
      console.log(err)
      alert(err)
    })
  }
   return (
     <ScrollView>
     <KeyboardAvoidingView>
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
         <TextInput value={logIn.email} onChangeText={(e)=>{handle1(e)}} placeholder="Enter Your Email"/>
       </View>
       <View>
         <Text>Password</Text>
         <TextInput value={logIn.password} onChangeText={(e)=>{handle2(e)}} placeholder="Enter Your Password"/>
       </View>
       <View>
           {/* <CheckBox
             value={isSelected}
             onValueChange={setSelection}orm
             style={styles.checkbox}
             /> */}
         <Text>Remember me</Text>
             <View style={styles.logInButtonContainer}>
               <Button color="#F47B13" onPress={()=>{submitLogIn()}} title="Log In "/>
               <Pressable onPress={()=>{navigation.navigate('Forgot')}}>
               <Text style={styles.forgot}>Forgot Password</Text>
               </Pressable>
             </View>
             <View>
                 <Text>I do not have any account yet</Text>
                 <Pressable onPress={()=>{
                   console.log('krishna>>>', navigation)
                   navigation.navigate('Register')
                  }}>
                   <Text style={{color:'blue'}}>create an my account </Text>
                   </Pressable>
             </View>
       </View>

   </View>
</View>
</KeyboardAvoidingView>
</ScrollView>
   );
}
export default LogIn;

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
