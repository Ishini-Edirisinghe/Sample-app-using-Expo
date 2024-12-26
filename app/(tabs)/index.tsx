import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" />

        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBCFCD",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  // add styles to footer container
  footerContainer: {
    flex: 1/3,
    alignItems: "center",
    
  },
});
