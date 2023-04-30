// import React, { useCallback } from 'react'
// import { useFonts } from 'expo-font'
// import * as SplashScreen from 'expo-splash-screen'

// SplashScreen.preventAutoHideAsync();

// const [fontsLoaded] = useFonts({
//   'Nunito-Black': require('../assets/fonts/Nunito-Black.ttf'),
//   'Nunito-BlackItalic': require('../assets/fonts/Nunito-BlackItalic.ttf'),
//   'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
//   'Nunito-BoldItalic': require('../assets/fonts/Nunito-BoldItalic.ttf'),
//   'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
//   'Nunito-ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
//   'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
//   'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
//   'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
//   'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
// })

// const onLayoutRootView = useCallback(async ()=>{
//   if(fontsLoaded){
//     await SplashScreen.hideAsync();
//   }
// }, [fontsLoaded])

// if(!fontsLoaded){
//   return null
// }

// import { useFonts } from 'expo-font'
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

// export default function FontLoad() {
// const [fontsLoaded] = useFonts({
//     'Nunito-Black': require('../assets/fonts/Nunito-Black.ttf'),
//     'Nunito-BlackItalic': require('../assets/fonts/Nunito-BlackItalic.ttf'),
//     'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
//     'Nunito-BoldItalic': require('../assets/fonts/Nunito-BoldItalic.ttf'),
//     'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
//     'Nunito-ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
//     'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
//     'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
//     'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
//     'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
// })

// const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }
// }
