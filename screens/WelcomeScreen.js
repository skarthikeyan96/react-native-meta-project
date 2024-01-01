import * as React from "react";
import { View, Text, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Subscribe')}
      />
    </View>
  );
};

export default WelcomeScreen;
