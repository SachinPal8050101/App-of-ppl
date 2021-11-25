import React from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
 
const Register=({navigation})=>{
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
         <TextInput placeholder="Enter Your username"/>
       </View>
       <View>
         <Text>Password</Text>
         <TextInput placeholder="Enter Your password"/>
       </View>
       <View>
         <Text>Email</Text>
         <TextInput placeholder="Enter Your Email"/>
       </View>
       <View>
         <Text>First Name</Text>
         <TextInput placeholder="Enter Your First Name"/>
       </View>
       <View>
         <Text>Last Name</Text>
         <TextInput placeholder="Enter Your Last Name"/>
       </View>
       <View>
           {/* <CheckBox
             value={isSelected}
             onValueChange={setSelection}
             style={styles.checkbox}
             /> */}
         <Text>I agree to Term & Conditions</Text>
             <View style={styles.logInButtonContainer}>
               <Button color="#F47B13" title="Register"/>
              
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
