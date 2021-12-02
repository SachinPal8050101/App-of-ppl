import React, { useState,useEffect } from "react";
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
  ScrollView,
} from "react-native";
import UploadPost from "../Component/UploadPost";
import UploadPostContent from "../Component/UploadPostContent";
import Post from "../Component/Post";
import axios from "axios";
const Home = () => {
  
  const [upload, setUpload] = useState(false);
  const [posts, setPosts] = useState([]);
  axios
    .post("http://192.168.100.135:5000/getPost", {})
    .then((res) => {
      setPosts(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <ScrollView>
          {posts.map((item) => {
            return <Post setUpload={setUpload} upload={Post} item={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  uploadPost: {},
  post: {
    // marginVertical:10,
    marginTop: 40,

    // backgroundColor:'yellow'
  },
});
