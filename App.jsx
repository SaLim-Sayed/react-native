import { useState, useEffect } from "react";
import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import img from "./assets/favicon.png";
export default function App() {
  useEffect(() => {
    const exitHandler = () => {
      Alert.alert("Exit", "Are you sure you want to exit?", [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "OK", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };
const backHandler = BackHandler.addEventListener("hardwareBackPress", exitHandler);
return () => backHandler.remove();
  }, []);
  return (
    <>
      <View style={styles.navbar}>
        <Image source={img} style={styles.img} />
        <Text>SaLim</Text>
      </View>
    </>
  );
}

const isActive = true;

const lightStyles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    padding: 10,
    backgroundColor: "#00cccc",
    color: "#0cc",
    gap: 10,
  },
  button: {
    backgroundColor: "#999",
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    margin: 10,
  },
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    gap: 10,
  },
  h1: {
    color: "#fff",
    fontSize: 30,
  },
  textInput: {
    width: "90%",
    backgroundColor: "pink",
    borderRadius: 10,
    padding: 4,
    margin: 2,
    fontSize: 16,
  },
});
const darkStyles = StyleSheet.create({
  container: {
    textAlign: "center",
    flex: 1,
    backgroundColor: "#ccc",

    gap: 10,
  },
  h1: {
    color: "#fff",
    fontSize: 30,
  },
  textInput: {
    width: "90%",
    backgroundColor: "pink",
    borderRadius: 10,
    padding: 4,
    margin: 2,
    fontSize: 16,
  },
});

const styles = isActive ? lightStyles : darkStyles;
