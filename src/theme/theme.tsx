import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Overpass-Regular': require('../assets/fonts/Overpass-Regular.ttf'),
    'Overpass-Light': require('../assets/fonts/Overpass-Light.ttf'),
    'Overpass-SemiBold': require('../assets/fonts/Overpass-SemiBold.ttf'),
    'Overpass-Bold': require('../assets/fonts/Overpass-Bold.ttf'),
  });
};

export default {
  colors: {
    // Defina suas cores aqui
  },
  fonts: {
    regular: {
      fontFamily: 'Overpass-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Overpass-Light',
      fontWeight: 'normal',
    },
    semiBold: {
      fontFamily: 'Overpass-SemiBold',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Overpass-Bold',
      fontWeight: 'normal',
    },
  },
};