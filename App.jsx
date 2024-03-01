import React, { useEffect } from "react";
import {
  Alert,
  Animated,
  Button,
  DrawerLayoutAndroid,
  Image,
  Linking,
  PermissionsAndroid,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import img from "./assets/favicon.png";

export default function App() {
  return (
    <>
      <View style={styles.navbar}>
        <Image source={img} style={styles.img} />
        <Text>SaLim</Text>
      </View>

      <View style={styles.container}>
        <Button
          title="Open Mail"
          onPress={() => Linking.openURL("mailto:Z5S6t@example.com")}
        />

        <Button
          title="Open Browser"
          onPress={() =>
            Linking.openURL("https://www.google.com/").catch((err) => {
              console.log(err);
            })
          }
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
