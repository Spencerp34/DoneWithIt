import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Done With It!</Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <Image source={{uri: "https://picsum.photos/200/300", width: 200, height: 200}} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
