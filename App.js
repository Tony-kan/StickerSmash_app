import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./components/ImageViewer";
import { Button } from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImg = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not Select any Image");
    }
  };
console.log("SelectedImage",selectedImage)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImg} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a Photo"
          theme="primary"
          onPress={pickImageAsync}
          selectedImage={selectedImage}
        />
        <Button label="Use this Photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
