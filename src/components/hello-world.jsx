import React from "react";
import { Button, Text, View } from "react-native";

const HelloWorld = (props) => {
  const [name, setName] = useState('friend');
    
  return (
    <View>
      <Text>Welcome to Muze.</Text>
      <Text>Today's theme is {props.theme}</Text>
      <Text>What is your name, {name}?</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="friend"
        value={name}
        onChangeText={setName(name)}
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
