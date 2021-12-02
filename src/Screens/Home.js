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

  const getPostDataFunction = (skip) => {
    axios({
      url: `${config.SERVER_URL}/getPost`,
      method: "post",
      data: { skip: skip },
    }).then((res) => {
      setPosts(res.data);
    });
  };
  useEffect(() => {
    getPostDataFunction(skip);
  });

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {posts.length !== 0 ? (
          <FlatList
            data={posts}
            renderItem={({ item, index, separators }) => <Post item={item} />}
            keyExtractor={(item) => item._id}
            onEndReached={({ distanceFromEnd }) => {
              console.log("-----------", distanceFromEnd);
              if (distanceFromEnd < 100) {
                console.log("ggggggg");
                setPosts([]);
                getPostDataFunction(skip);
              }
              setSkip(skip + 2);
            }}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
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
    marginTop: 40,
  },
});
