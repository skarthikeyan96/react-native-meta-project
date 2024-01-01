import * as React from "react";
import { View, Text, Button } from "react-native";
import tw from 'twrnc'

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={{margin: "10px"}}>
      <Text style={tw`text-md text-black dark:text-white`}>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Subscribe')}
      />
    </View>
  );
};

export default WelcomeScreen;
