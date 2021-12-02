import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  Header,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
  Picker,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";

import config from '../../src/config'

const UploadPostContent = () => {
  const [filePath, setFilePath] = useState({});
  const [selectedValue, setSelectedValue] = useState("Cat");
  const load = async () => {
    try {
      let value = await AsyncStorage.getItem("TASKS");
      value = JSON.parse(value);
      if (value !== null) {
        setPostData({
          ...postData,
          userId: value._id,
          fullName:value.firstname+' '+value.lastname
        });
      
      }
    } catch (err) {
      alert(err);
    }
  };
  useEffect(()=>{
    load()
  },[])
  const [postData, setPostData] = useState({
    userId:"",
    title: "",
    category: selectedValue,
    fullName: "",
  });
  
  const handleTitle1=(e) => {
    setPostData({
      ...postData,
      title:e,
    });
  };
  const chooseFile = () => {
    let options = {
      title: "Select Image",
      customButtons: [
        {
          name: "customOptionKey",
          title: "Choose Photo from Custom Option",
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
      selectionLimit: 1,
     
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log("Response = ", response.assets[0]);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
        alert(response.customButton);
      } else {
        setFilePath(response.assets[0]);
        console.log("..........",response);
      }
    });
  };
  const submitPost = () => {
    console.log("pppppppppppppppppppppp", postData);
    const image = {
      name: filePath.fileName,
      type: filePath.type,
      uri: filePath.uri,
    }
    let formdata = new FormData();
    formdata.append('title',postData.title)
    formdata.append("category",selectedValue);
    formdata.append("fullName",postData.fullName);
    formdata.append("image", image);
    formdata.append("filename",filePath.fileName)
    formdata.append("userId",postData.userId)
    console.log("fff", formdata);
    axios({
      url: `${config.SERVER_URL}/uploadpostcontent`,
      method: 'POST',
      data: formdata,
      withCredentials: true,
    })
            .then(resp => console.log('lllllllllllllll-----------',resp.data))
            .catch(error => console.error('jjj',error));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#fff", fontSize: 30 }}>Title</Text>
        <TextInput
          type="text"
          value={postData.title}
          placeholder="title"
          onChangeText={(e) => {
            handleTitle1(e);
          }}
          style={{ backgroundColor: "#fff" }}
        />
      </View>
      <View>
        <Text style={{ color: "#fff", fontSize: 30 }}>Choose category</Text>
      </View>
      <View style={styles.cetageory}>
        <Picker
             selectedValue={selectedValue}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Cat" value="Cat" />
          <Picker.Item label="Rabbit" value="Rabbit" />
          <Picker.Item label="Dog" value="Dog" />
          <Picker.Item label="Bird" value="Bird" />
        </Picker>
      </View>
      <TouchableOpacity
        onPress={chooseFile}
        style={[styles.selectButtonContainer, { backgroundColor: "#FFA233" }]}
      >
        <Text style={styles.selectButtonTitle}>Pick an image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.submitButton, { backgroundColor: "#CA2D2D" }]}
        onPress={() => submitPost()}
      >
        <Text style={styles.submitTitle}>Upload Post</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UploadPostContent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
   marginVertical:40,
    width: "100%",
    backgroundColor: "#F47B13",
    borderColor: "yellow",
    borderWidth: 1,
  },
  flex: {
    flex: 1,
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
  },
  // add below
  selectButtonContainer: {
    margin: 20,
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  selectButtonTitle: {
    padding: 10,
    fontSize: 18,
    color: "#fff",
  },
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    padding:30
  },
  submitTitle: {
    color: "#fff",
  },
  cetageory: {
    backgroundColor: "#fff",
    color: "#fff",
    width: 60,
  },
});
