import { Image, Text } from 'react-native';
import EmptyStateContentContainer, { 
  EmptyStateTitle,
  ImageContainer,
  EmptyStateText,
  FullContentContainer,
  FullContentImage,
  FullContentTemperature,
  FullContentTemperatureText,
  FullContentTemperatureMesure
} from './style'
import ClimateChange from "../../assets/images/climate-change.png";
import RainingPNG from '../../assets/images/raining.png';
import { dataWeatherDescription } from '../../mocks/mocksData';
import WeatherDescription from '../../components/WeatherDescription';

const EmptyStateContent = () => {
  return(
    <EmptyStateContentContainer>
      <EmptyStateTitle>FindWeather</EmptyStateTitle>
      <ImageContainer>
        <Image
              source={ClimateChange} 
              style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
        />
      </ImageContainer>
      <EmptyStateText>
        Selecione aqui um local e encontre o clima em tempo real
      </EmptyStateText>
    </EmptyStateContentContainer>
  )
}

const FullContent = () => {
  return(
    <FullContentContainer>
      <FullContentImage>
        <Image 
          source={RainingPNG}
          style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
        />
      </FullContentImage>
      <FullContentTemperature>
        <FullContentTemperatureMesure>23</FullContentTemperatureMesure>
        <FullContentTemperatureMesure>°</FullContentTemperatureMesure>
      </FullContentTemperature>
      <FullContentTemperatureText>Chuva Moderada</FullContentTemperatureText>
      <WeatherDescription data={dataWeatherDescription} />
    </FullContentContainer>
  )
}

export default function Home() {
    
  return(
    <FullContent/>    
  )
}
