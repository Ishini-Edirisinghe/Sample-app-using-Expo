import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>About page is here!</Text>
    </View>
  );
}


const styles =StyleSheet.create({
  container:{
    backgroundColor:"#FBCFCD",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    color:"white",
    fontWeight:"bold"
  }
})