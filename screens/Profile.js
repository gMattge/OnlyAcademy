import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import GridImageView from "react-native-grid-image-viewer";
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const image = {
  uri: "https://pbs.twimg.com/profile_banners/1097324598901858306/1640371989/1500x500",
};

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://scontent.fcfc1-1.fna.fbcdn.net/v/t1.6435-1/83475919_1428384390666908_5426110172500066304_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEbyJaaMLTUptXYafOVvRsbc7Xtp1J3AYVzte2nUncBhduHpsaf2J7LJq4d8baBDwIsotf9EPoScDCRYhf8Gxio&_nc_ohc=oREqmCAk0bkQ7kNvgFZhh3-&_nc_ht=scontent.fcfc1-1.fna&oh=00_AYC-y3iUvK7_l7njy__2rVXvidw4F9s6b2zQMxgA7cyHig&oe=666B6208",
              }}
            />
            <Text style={styles.name}>Guilherme Mattge</Text>
            <Text style={styles.arroba}>@gmattge</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.profileDetail}>
        <View style={[styles.detailContent, { paddingRight: 10, marginRight: 5, borderRightWidth: 2, borderRightColor: "#fff" }]}>
          <Text style={styles.count}>222</Text>
          <Text style={styles.title}>Seguidores</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.count}>216</Text>
          <Text style={styles.title}>Seguindo</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.buttonOne, { marginRight: 10 }]}>
              <Text style={styles.buttonOneText}>
                <Ionicons
                  name="add-circle-outline"
                  size={18}
                  style={{ color: "#fff" }}
                />{" "}
                Seguir
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonTwo}>
              <Text style={styles.buttonTwoText}>
                <Ionicons
                  name="paper-plane-outline"
                  size={18}
                  style={{ color: "#000" }}
                />{" "}
                Direct
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.background}>
            <Text style={styles.headline_text}>Feed</Text>
            <View style={styles.imagesGrid}>
              <GridImageView
                data={[
                  "https://logodix.com/logo/2006444.png",
                  "https://www.1min30.com/logo/wp-content/uploads/2018/10/Rainbow-Six-Si%C3%A8ge-embleme.jpg",
                  "https://logodix.com/logo/2006444.png"

                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00CED1",
  },
  headerContent: {
    paddingTop: 70,
    padding: 50,
    height: 305,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 2,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  arroba: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  profileDetail: {
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 275,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#dc143c",
  },
  detailContent: {
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonOne: {
    backgroundColor: "#dc143c",
    padding: 8,
    borderRadius: 10,
  },
  buttonTwo: {
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 10,
  },
  buttonOneText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonTwoText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 20,
    color: "#000",
    marginTop: 10,
    textAlign: "center",
  },
  background: {
    backgroundColor: "transparent",
  },
  headline_text: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 5,
    marginLeft: 20,
  },
  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: "white",
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  imagesGrid: {
    flex: 1,
    width: 350,
  },
});

export default ProfileScreen;
