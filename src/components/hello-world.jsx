import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const HelloWorld = (props) => {
  const [isGood, setIsGood] = useState(false);

  return (
    <View>
      <Text>Welcome to Muze.</Text>
      <Text>Today's theme is "{props.theme}".</Text>
      <Text>Is it good right now?: {isGood ? "Yup. :)" : "No. :("}</Text>
      <Button
        onPress={() => {
          setIsGood(true);
        }}
        disabled={isGood}
        title={!isGood ? "Make it good" : "Nice"}
      />
    </View>
  );
};

const Win = () => {
  return (
    <View>
      <HelloWorld theme="Crunchwrap Supreme" />
    </View>
  );
};

export default HelloWorld;
