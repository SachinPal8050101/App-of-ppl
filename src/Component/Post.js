import React, { useState } from "react";
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
  Share
} from "react-native";

import config from "../../src/config";

const Post = ({ item }) => {
  // console.log('ssssssss-----',item)

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'https://www.my123.com/v1/23',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
  }
  return (
    //  main container
    <View style={styles.mainContainer}>
      {/* inner innerContainer */}
      <View style={styles.innerContainer}>
        {/* TitleContainer */}
        <View style={styles.titleContainer}>
          <Text style={{ color: "#F47B13", fontSize: 21, fontWeight: "bold" }}>
            {item.title}
          </Text>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Image
              style={{ height: 30 }}
              source={require("../../images/side_arc.png")}
            />
            <View
              style={{
                backgroundColor: "#FF5E33",
                height: 30,
                width: 45,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {item.category}
              </Text>
            </View>
          </View>
        </View>
        {/* userDeatailsContainer */}
        <View style={styles.userDetailesContainer}>
          <Image source={require("../../images/pic_small.png")} />
          <Text
            style={{ color: "#F4713B", marginLeft: 20, fontWeight: "bold" }}
          >
            {item.fullName}
          </Text>
          <Text style={{ color: "#F4713B", marginLeft: "auto" }}>
            {item.time}
          </Text>
        </View>
        {/* imageContainer */}
        <View style={styles.imageContainer}>
          {/* {console.log(item.image)} */}
          <Image
            style={{ height: 200, width: "100%" }}
            source={{ uri: `${config.SERVER_URL}/${item.image}` }}
          />
        </View>
        {/* footerContainer */}
        <View style={styles.footerContainer}>
          {/* shareContainer */}
          <Pressable onPress={onShare}>
          <View style={styles.shareContainer}>
            <Image source={require("../../images/icon_001.png")} />
          </View>
          </Pressable>
          {/* FlageContainer */}
          <View style={styles.flagContainer}>
            <Image source={require("../../images/btm_img2.png")} />
          </View>
          {/* likeContainer */}
         
          <View style={styles.likeContainer}>
            <Image source={require("../../images/icon_003.png")} />
          </View>
         
        </View>
      </View>
    </View>
  );
};
export default Post;

const styles = StyleSheet.create({
  mainContainer: {
    borderTopWidth: 2,
    borderTopColor: "#F47B13",
  },
  innerContainer: {
    flexDirection: "column",
  },
  titleContainer: {
    flexDirection: "row",
    margin: 5,
  },
  userDetailesContainer: {
    margin: 7,
    flexDirection: "row",
  },
  imageContainer: {},
  footerContainer: {
    height: 30,
    marginVertical: 7,
    justifyContent: "center",
    flexDirection: "row",
  },
  likeContainer: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F47B13",
    marginRight: "auto",

    borderRadius: 5,
  },
  shareContainer: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F47B13",
    borderRadius: 5,
    marginRight: 20,
  },
  flagContainer: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F47B13",
    borderRadius: 5,
    marginRight: 20,
  },
});
