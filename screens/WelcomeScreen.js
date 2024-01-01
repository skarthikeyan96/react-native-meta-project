import * as React from "react";
import { StyleSheet, View, Text, Button, Image,   TouchableOpacity,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.image}
          resizeMode={"contain"} // cover or contain its upto you view look
        />
        <Text> Little Lemon your Local mediterranean Bistro </Text>
      </View>
      <View style={{ width: "100%" }}>
        {
          /** Use Touchabel Opacity instead of 
           * button as it is suggested in the docs 
           * since we cannot change case ( upper/lowercase ) of the text
           */
        }
         <TouchableOpacity 
         style={styles.button}
         onPress={() => navigation.navigate("Subscribe")}
       >
         <Text style={styles.buttonTxt}> Newsletter </Text>
       </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: "1",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    margin: "10px",
    height: "calc(100vh - 100px)",
    paddingTop: "50",
    gap: "1rem",
  },
  button: {
    backgroundColor: "rgb(73 94 87)",
    padding: "1rem",
  },
  buttonTxt: {
    textAlign: 'center',
    color: 'white',
    textTransform: "capitalize",

  },
  image: {
    width: 200,
    height: 200,
    marginTop: "12rem",
   
  },
});

export default WelcomeScreen;
