import React from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import img from "./assets/favicon.png";

export default function App() {
  const [position, setPosition] = React.useState("left");
  const drawerRef = React.useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  return (
    <>
      <View style={styles.navbar}>
        <Image source={img} style={styles.img} />
        <Text>SaLim</Text>
      </View>

      <View style={styles.container}>
        <DrawerLayoutAndroid
          ref={drawerRef}
          drawerWidth={300}
          drawerPosition={position}
          renderNavigationView={() => (
            <View style={styles.drawer}>
              <Text>Drawer Content</Text>
              <Button
                title="Close"
                onPress={() => drawerRef.current.closeDrawer()}
              />
            </View>
          )}
        >
          <View style={styles.container}>
            <Button title="Open Drawer" onPress={openDrawer} />
            <Button
              title="Change Position"
              onPress={() =>
                position === "left" ? setPosition("right") : setPosition("left")
              }
            />
          </View>
        </DrawerLayoutAndroid>
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
