import { Link , Stack} from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <View
      style={styles.container}
    >
      <Stack.Screen 
        options={{ title:"Opps ! Not found"}}
        /> 
      <Link href={"/"} style={styles.button}>
      Go Back to Home Screen
      </Link>

    </View>
    
  );
}


const styles =StyleSheet.create({
  container:{
    backgroundColor:"#000000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  button:{
    fontSize:20,
    textDecorationLine:"underline",
    color:"#fff",
  }
})