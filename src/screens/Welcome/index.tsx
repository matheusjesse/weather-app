import { Image } from 'react-native';
import WelcomeContainer, { WelcomeText } from "./style";
import { WelcomeTitle, ImageContainer } from './style'
import CloudAndThunderPNG from "../../assets/images/cloud-and-thunder.png";
import StartButton from '../../components/StartButton';

export default function Welcome() {
    
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
