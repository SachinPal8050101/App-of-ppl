import React,{useState} from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import  axios from 'axios'
 
const Register=({navigation,setUser})=>{
  const [registerDetails,setRegisterDetails]=useState({
    username:'',
    password:'',
    email:'',
    firstname:'',
    lastname:''
  })
  const handle1=(e)=>{
      setRegisterDetails({
        ...registerDetails,
        username:e
      })
  }
  const handle2=(e)=>{
    setRegisterDetails({
      ...registerDetails,
      password:e
    })
}
const handle3=(e)=>{
  setRegisterDetails({
    ...registerDetails,
    email:e
  })
}
const handle4=(e)=>{
  setRegisterDetails({
    ...registerDetails,
    firstname:e
  })
}
const handle5=(e)=>{
  setRegisterDetails({
    ...registerDetails,
    lastname:e
  })
}

const handle=()=>{
  const {username,password,email,firstname,lastname}=registerDetails
    axios
      .post('http://192.168.100.113:5000/register',{
        ...registerDetails,
      }).then(res=>{
      alert('Welcome !')
       console.log(res.data.user)
       setUser(res.data)
      
    }).catch((err)=>{
      console.log(err)
      alert(err)
    })
}
   return (
     <ScrollView>
    <View>
    {/* welcome container */}
   <View style={styles.welcomeContainer}>
       <Text style={styles.title}>Welcome from PPl </Text>
       <Text numberOfLines={3} style={styles.paragraph}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
       <Image style={styles.image} source={require('../../images/img_9.png')}/>
   </View>
   {/* LogIn container */}
   <View style={styles.logInContainer}>
      <Text style={styles.title}>Creat An Account</Text>
       <View>
         <Text>Username</Text>
         <TextInput value={registerDetails.username} onChangeText={(e)=>handle1(e)} placeholder="Enter Your username"/>
       </View>
       <View>
         <Text>Password</Text>
         <TextInput  value={registerDetails.password} onChangeText={(e)=>handle2(e)} placeholder="Enter Your password"/>
       </View>
       <View>
         <Text>Email</Text>
         <TextInput  value={registerDetails.email} onChangeText={(e)=>handle3(e)} placeholder="Enter Your Email"/>
       </View>
       <View>
         <Text>First Name</Text>
         <TextInput  value={registerDetails.firstname} onChangeText={(e)=>handle4(e)} placeholder="Enter Your First Name"/>
       </View>
       <View>
         <Text>Last Name</Text>
         <TextInput  value={registerDetails.lastname} onChangeText={(e)=>handle5(e)} placeholder="Enter Your Last Name"/>
       </View>
       <View>
           {/* <CheckBox
             value={isSelected}
             onValueChange={setSelection}
             style={styles.checkbox}
             /> */}
         <Text>I agree to Term & Conditions</Text>
             <View style={styles.logInButtonContainer}>
               <Button color="#F47B13" onPress={()=>{handle()}} title="Register"/>
              
             </View>
             <View>
                 <Text>I already have an account</Text>
                 <Pressable onPress={() => navigation.navigate('LogIn')}><Text style={{color:'blue'}}>Log in to my Account </Text></Pressable>
             </View>
       </View>

   </View>
</View>
</ScrollView>
   );
}
export default Register;

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
     height:150,
     width:150,
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
