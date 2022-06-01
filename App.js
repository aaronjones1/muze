import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './src/components/hello-world';
import PizzaTranslator from './src/components/pizza-translator/pizza-translator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Muze</Text>
      <HelloWorld theme="Kentucky Folk Aesthetic" />
      <PizzaTranslator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
