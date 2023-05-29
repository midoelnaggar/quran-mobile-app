import { Platform, Dimensions, View } from 'react-native' 
import { RFValue } from 'react-native-responsive-fontsize'
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";


const { height } = Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';

export const getProperSize = value => {
  return RFValue(value, height);
};

export const FontProvider = ({children}) => {

const [fontsLoaded] = useFonts({
    "ta100": require("../../assets/fonts/TarifArabic-Extralight.ttf"),
    "ta200": require("../../assets/fonts/TarifArabic-Light.ttf"),
    "ta300": require("../../assets/fonts/TarifArabic-Book.ttf"),
    "ta400": require("../../assets/fonts/TarifArabic-Regular.ttf"),
    "ta500": require("../../assets/fonts/TarifArabic-Medium.ttf"),
    "ta600": require("../../assets/fonts/TarifArabic-Bold.ttf"),
    "ta700": require("../../assets/fonts/TarifArabic-Extrabold.ttf"),
    "diwany": require("../../assets/fonts/Diwany.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return(<View style={{flex:1}} onLayout={onLayoutRootView}>
    {children}
  </View>)
}

