import React from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable} from 'react-native'
 
const UploadPost=(props)=>{
  var check=props.upload;
   return (
     <Pressable onPress={()=>{props.setUpload(check?false:true)}}>
    <View style={styles.container}>
           <View style={styles.innerContainer}>
                 {/* container1 */}
                 <View style={StyleSheet.container1}>
                   
                         <Image size='100' source={require('../../images/btn_icona.png')}/>
                 </View>
                 {/* contaner2 */}
                 <View style={StyleSheet.container2}>
                 <Image size='1' source={require('../../images/btn_sep.png')}/>
                 </View>
                 {/* container 3 */}
                 <View  style={StyleSheet.container3}>
                     <Text style={{fontSize:25,color:'#fff',fontWeight:'100'}}>Upload Post </Text>
                 </View>
           </View>
     </View>
     </Pressable>
   );
}
export default UploadPost;

const styles=StyleSheet.create({
  container:{
    padding:5,
    width:'100%',
    backgroundColor:'#F47B13',
    justifyContent:'center',
    alignItems:'center',
   borderColor:'yellow',
   borderWidth:2
  },
  innerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
 
  container1:{
     marginRight:'auto',
     backgroundColor:'#fff'
  },
  container2:{
   
  },
  container3:{
     
  },
 
})
