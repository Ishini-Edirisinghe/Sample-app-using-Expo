import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello there!</Text>
      <Link href={"/about"} style={styles.button}>
      Go to the about screen
      </Link>

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
  },
  button:{
    fontSize:20,
    textDecorationLine:"underline",
    color:"#fff",
  }
})