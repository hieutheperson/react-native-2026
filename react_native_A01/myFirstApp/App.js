import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// NGĂN splash screen tự ẩn
SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    const prepare = async () => {
      // Giả lập load data, config, font, api...
      await new Promise(resolve => setTimeout(resolve, 10000));

      // Sau khi xong thì ẩn splash screen
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hoang Ba Hieu</Text>
      <Text>20110477</Text>
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
