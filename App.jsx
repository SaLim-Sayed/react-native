import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import img from "./assets/favicon.png";
const apiData = [
  { id: 1, title: "Title 1", description: "Description 1" },
  { id: 2, title: "Title 2", description: "Description 2" },
  { id: 3, title: "Title 3", description: "Description 3" },
  { id: 4, title: "Title 4", description: "Description 4" },
  { id: 5, title: "Title 5", description: "Description 5" },
  { id: 6, title: "Title 6", description: "Description 6" },
  { id: 7, title: "Title 7", description: "Description 7" },
  { id: 8, title: "Title 8", description: "Description 8" },
  { id: 9, title: "Title 9", description: "Description 9" },
  { id: 10, title: "Title 10", description: "Description 10" },
];
export default function App() {
  const [layout, setLayout] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState(apiData);
  const toggleLoading = () => setIsLoading(!isLoading);
  const layoutHandler = (e) => {
    const { layout } = e.nativeEvent;
    setLayout(layout);
  };
  console.log(isLoading);
  // console.log(layout);

  const refreshHandler = () => {
    setRefresh(true);
    setTimeout(() => {
      setData(apiData);
      setRefresh(false);
    }, 1000);
  };
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
