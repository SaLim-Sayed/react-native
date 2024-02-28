import React from "react";
import {
  Alert,
  Button,
  DrawerLayoutAndroid,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import img from "./assets/favicon.png";

export default function App() {
 const alertHandler = () => {
   Alert.pr("hello", "how are you", [
     {
       text: "yes",
       onPress: () => {
         ToastAndroid.show("yes", ToastAndroid.SHORT);
       },
     },
     {
       text: "no",
       onPress: () => {
         ToastAndroid.show("no", ToastAndroid.SHORT);
       },
     },
   ])
 }
  return (
    <>
      <View style={styles.navbar}>
        <Image source={img} style={styles.img} />
        <Text>SaLim</Text>
      </View>

      <View  style={styles.container}>

        <Button title="alert" onPress={alertHandler} />
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
