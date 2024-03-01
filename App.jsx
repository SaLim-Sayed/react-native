import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  Button,
  DrawerLayoutAndroid,
  Image,
  Linking,
  Modal,
  PermissionsAndroid,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import img from "./assets/favicon.png";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.navbar}>
        <Image source={img} style={styles.img} />
        <Text>SaLim</Text>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onShow={() => {
            console.log("first modal show");
          }}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Text style={styles.modalText}>
                Hello World! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Ad veritatis in id tenetur voluptates itaque neque eos
                consectetur expedita. Praesentium, quos laboriosam. Vero
                possimus quae itaque officiis aliquam quisquam ad?
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#ff9",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
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
