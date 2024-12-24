import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBCFCD",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
