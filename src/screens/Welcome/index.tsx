import { Text } from 'react-native';
import WelcomeContainer, { WelcomeText } from "./style";
import AppLoading from 'expo-app-loading';
import { WelcomeTitle } from './style'
import {
    useFonts,
    OverpassMono_300Light,
    OverpassMono_400Regular,
    OverpassMono_500Medium,
    OverpassMono_600SemiBold,
    OverpassMono_700Bold,
  } from '@expo-google-fonts/overpass-mono';

export default function Welcome() {
    let [fontsLoaded] = useFonts({
        OverpassMono_300Light,
        OverpassMono_400Regular,
        OverpassMono_500Medium,
        OverpassMono_600SemiBold,
        OverpassMono_700Bold,
      });
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
        return(
            <WelcomeContainer>
                <WelcomeTitle>Descubra o Clima na sua Cidade</WelcomeTitle>
                <WelcomeText>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão </WelcomeText>
            </WelcomeContainer>
        )
    }
}