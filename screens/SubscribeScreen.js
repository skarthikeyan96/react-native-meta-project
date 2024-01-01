import * as React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [text, setText] = React.useState("");

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    };

    const handleSubmit = () => {
      if(!validateEmail(text)) {
        console.log('Please enter a valid email');
      }else{
        console.log("Thank you for subscribing , stay tuned !")
       Alert.alert("foo")
        
      }
    }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.image}
        resizeMode={"contain"} // cover or contain its upto you view look
      />
      <Text>
        {" "}
        Subscribe to our newsletter for our latest delicious recipes !
      </Text>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
       <TouchableOpacity 
         style={styles.button}
         disabled={text.length === 0}
         onPress={handleSubmit}
       >
         <Text style={styles.buttonTxt}> Subscribe </Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: "1",
    alignItems: "center",
    backgroundColor: "#ffffff",
    margin: "10px",
    height: "calc(100vh - 100px)",
    paddingTop: "50",
    gap: "1rem",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: "75%",
    padding: 10,
  },
  button: {
    backgroundColor: "rgb(73 94 87)",
    padding: "1rem",
    width: '75%'
  },
  buttonTxt: {
    textAlign: "center",
    color: "white",
    textTransform: "capitalize",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: "12rem",
  },
});

export default SubscribeScreen;
