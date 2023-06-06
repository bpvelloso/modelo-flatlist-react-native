import { StatusBar, SafeAreaView, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{flex:1}}>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}

