import React, { useState, useEffect } from "react";
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
  FlatList,
  ActivityIndicator,
} from "react-native";
import UploadPost from "../Component/UploadPost";
import UploadPostContent from "../Component/UploadPostContent";
import Post from "../Component/Post";
import axios from "axios";

import config from "../../src/config";

const Home = () => {
  const [upload, setUpload] = useState(false);
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [skip1, setSkip1] = useState(true);

  const getPostDataFunction = (skip) => {
    axios({
      url: `${config.SERVER_URL}/getPost`,
      method: "post",
      data: { skip: skip },
    }).then((res) => {
      console.log('resssssssss>>', res.data)
      if(res.data.length) {
        setPosts([...posts,...res.data]);
      }
       if(skip1===true){
         setSkip1(false)
       }
       else{
         setSkip1(true)
       }
    });
  };
  useEffect(() => {
    getPostDataFunction(skip);
  }, [skip]);
console.log(posts[0])
  return (
    <View style={styles.container}>
      <View style={styles.post}>
         
       
          <FlatList
            data={posts}
            renderItem={({ item, index, separators }) => <Post item={item} />}
            onEndReached={({ distanceFromEnd }) => {
              console.log("-----------", distanceFromEnd);
              setSkip(skip + 3);
            }}
            keyExtractor={(item) => item._id}
          />
          {skip1?<ActivityIndicator style={{paddingBottom:500}} size="large" color="#00ff00" />:null}
         
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
    marginTop: 20,
    marginBottom: 30
  },
});
