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
      <View style={styles.container}>
        <SectionList
          style={{ marginTop: 10 }}
          sections={[
            { title: "Section 1", data: data },
            { title: "Section 2", data: data },
          ]}
          renderSectionHeader={({ section }) => (
            <Text style={[styles.h1, { color: "#000" }]}>{section.title}</Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                width: "90%",
                color: "#000",
                backgroundColor: "#111",
                margin: 10,
                flexDirection: "column",
                gap: 10,
                borderRadius: 10,
                padding: 10,
                paddingHorizontal: 55,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.id}
            >
              <Text
                allowFontScaling={false}
                ellipsizeMode="middle"
                style={styles.h1}
              >
                {item.title}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#000",
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ color: "#000" }}>List Header</Text>
            </View>
          )}
          onEndReached={() => console.log("end reached")}
          onEndReachedThreshold={0.5}
        />
        {/* List Views */}
        <FlatList
          refreshing={refresh}
          onRefresh={refreshHandler}
          refreshControl={
            <RefreshControl
              title="Pull to refresh"
              tintcolor="#0ff"
              refreshing={refresh}
              onRefresh={refreshHandler}
            />
          }
          style={{ marginTop: 10 }}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                width: "90%",
                color: "#000",
                backgroundColor: "#111",
                margin: 10,
                flexDirection: "column",
                gap: 10,
                borderRadius: 10,
                padding: 10,
                paddingHorizontal: 55,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={item.id}
            >
              <Text
                allowFontScaling={false}
                ellipsizeMode="middle"
                style={styles.h1}
              >
                {item.title}
              </Text>
              <Text
                allowFontScaling={false}
                ellipsizeMode="middle"
                style={styles.h1}
              >
                {item.description}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#000",
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ color: "#000" }}>List Header</Text>
            </View>
          )}
          onEndReached={() => console.log("end reached")}
          onEndReachedThreshold={0.5}
        />
        <View>
          {/* UI Interface */}
          {/*   <Button color="#841841" accessabilityLabel="test" title="Click Me" />

        <Pressable style={styles.button} onPress={() => console.log("Pressed")}>
          <Text>Press</Text>
        </Pressable>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Pressed")}
        >
          <Text>Press</Text>
        </TouchableOpacity>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isLoading ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={isLoading}
          onValueChange={toggleLoading}
        /> */}
        </View>
        <View>
          {/* Core Component */}
          {/* <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
        backgroundColor: "#0cc",
        paddingVertical: 50,
        paddingHorizontal: 20,
        width: "",
      }}
      showsVerticalScrollIndicator={false}
      onLayout={layoutHandler}
    >
     
     <Text
        allowFontScaling={false}
        numberOfLines={1}
        ellipsizeMode="middle"
        style={styles.h1}
      >
        React Native
      </Text>
      <View style={{ width: "100%", height: "30%", backgroundColor: "#9dd" }}>
        <Image
          resizeMode="contain"
          onLoad={() => {
            setIsLoading(true);
          }}
          blurRadius={2}
          source={{
            uri: "https://cdn.icon-icons.com/icons2/3951/PNG/512/programmer_icon_251062.png",
          }}
          style={{ width: "100%", height: "100%" }}
        />
        {isLoading ? (
          <Text
            allowFontScaling={false}
            ellipsizeMode="middle"
            style={styles.h1}
          >
            Loaded..
          </Text>
        ) : null}
      </View>
      <View
        style={{
          width: "100%",
          
          backgroundColor: "#ccc",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          padding: 10,
          gap: 10,
        }}
      >
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Enter Text"
          style={styles.textInput}
          maxLength={100}
          multiline
          // keyboardType="number-pad"
          numberOfLines={2}
          onChangeText={(text) => {
            console.log(text);
          }}
          onBlur={() => {
            console.log("Blur");
          }}
          autoCapitalize="sentences"
          autoCorrect
        />
        <TextInput
          secureTextEntry
          placeholder="Enter Text"
          style={styles.textInput}
        />
      </View>
       
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#9dd",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          padding: 10,
          gap: 10,
        }}
      >
      <View style={{ width: "100%", backgroundColor: "#9dd" }}>
        {data.map((item) => (
          <View
            style={{
              width: "100%",
              color: "#000",
              backgroundColor: "#111",
              margin: 10,
              flexDirection: "column",
              gap: 10,
              borderRadius: 10,
              padding: 10,
            }}
            key={item.id}
          >
            <Text
              allowFontScaling={false}
              ellipsizeMode="middle"
              style={styles.h1}
            >
              {item.title}
            </Text>
            <Text
              allowFontScaling={false}
              ellipsizeMode="middle"
              style={styles.h1}
            >
              {item.description}
            </Text>
          </View>
        ))}
      </View> 
     </View>
    </ScrollView> */}
        </View>
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
