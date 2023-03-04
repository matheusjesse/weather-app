import { Image } from 'react-native';
import WelcomeContainer, { WelcomeText } from "./style";
import AppLoading from 'expo-app-loading';
import { WelcomeTitle, ImageContainer } from './style'
import {
    useFonts,
    OverpassMono_300Light,
    OverpassMono_400Regular,
    OverpassMono_500Medium,
    OverpassMono_600SemiBold,
    OverpassMono_700Bold,
  } from '@expo-google-fonts/overpass-mono';
import CloudAndThunderPNG from "../../assets/images/cloud-and-thunder.png";

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
                <ImageContainer>
                  <Image 
                    source={CloudAndThunderPNG} 
                    style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
                  />
                </ImageContainer>
                <WelcomeTitle>Descubra o Clima na sua Cidade</WelcomeTitle>
                <WelcomeText>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão </WelcomeText>
            </WelcomeContainer>
        )
    }
}