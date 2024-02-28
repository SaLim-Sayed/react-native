import React from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from "react-native";
import img from "./assets/favicon.png";

export default function App() {
  const reqestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Photo AppCamera Permission",
          message:
            "Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <>
      <View style={styles.navbar}>
        <Image source={img} style={styles.img} />
        <Text>SaLim</Text>
      </View>

      <View style={styles.container}>
        <Button
          title="request camera permission"
          onPress={reqestCameraPermission}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    padding: 10,

    justifyContent: "center",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#a25f00",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    gap: 100,
    width: "100%",
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawer: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
});
