import { Image } from 'react-native';
import WelcomeContainer, { WelcomeText } from "./style";
import AppLoading from 'expo-app-loading';
import { WelcomeTitle, ImageContainer } from './style'
import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from '@expo-google-fonts/overpass';
import CloudAndThunderPNG from "../../assets/images/cloud-and-thunder.png";
import StartButton from '../../components/StartButton';

export default function Welcome() {
    let [fontsLoaded] = useFonts({
        Overpass_300Light,
        Overpass_400Regular,
        Overpass_600SemiBold,
        Overpass_700Bold,
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
                <StartButton/>
            </WelcomeContainer>
        )
    }
}