import * as React from 'react';
import { useCallback } from 'react';
import { Text, View, Pressable, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Templo from '../components/Templo.jpg';
import Roupas from '../components/Roupas.jpg';
import Filosofos from '../components/Filosofos.webp';


// You can import from local files
import styles from './style';

export default function Inicio({ navigation }) {

  // SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //     // console.log(fontsLoaded)
  //     // console.log(fontError)
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //     console.log(fontsLoaded)
  //     console.log(fontError)

  //   return null;
  // }
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontFamily: 'Inter-Bold', color: '#c6d6d6', textAlign: 'center', marginTop: '30%', marginBottom: '10%', fontSize: 48, }}>Grécia</Text>
      <ScrollView>
        <Text style={styles.title2}>Veja algumas representações</Text>
        <Image style={{
          height: '30%',
          width: '100%',
        }} source={Templo} />
        <Image source={Roupas} />

      </ScrollView>
    </ScrollView>
  );
}

