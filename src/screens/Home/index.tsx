import { Image, Text } from 'react-native';
import EmptyStateContentContainer, { 
  EmptyStateTitle,
  ImageContainer,
  EmptyStateText,
  FullContentContainer,
  FullContentImage,
  FullContentTemperature,
  FullContentTemperatureText,
  FullContentTemperatureMesure,
  TodayAndTheNext7days,
  TodayAndTheNext7daysToday,
  TodayAndTheNext7daysText,
  FullContentHeaderContainer,
  FullContentHeaderCity,
  FullContentHeaderCountry,
  FullContentHeaderDate
} from './style'
import ClimateChange from "../../assets/images/climate-change.png";
import RainingPNG from '../../assets/images/raining.png';
import { dataCardHourTemperature, dataWeatherDescription } from '../../mocks/mocksData';
import WeatherDescription from '../../components/WeatherDescription';
import CardHourTemperature from '../../components/CardHourTemperature';
import { Ionicons } from "@expo/vector-icons";

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
      <FullContentHeaderContainer>
        <Ionicons name="location-sharp" size={22} color={'white'} />
        <FullContentHeaderCity>A Coruña,</FullContentHeaderCity>
        <FullContentHeaderCountry>Espanha</FullContentHeaderCountry>
        <FullContentHeaderDate>Domingo, 01 Jan de 2023</FullContentHeaderDate>
      </FullContentHeaderContainer>
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
      <TodayAndTheNext7days>
        <TodayAndTheNext7daysToday>Hoje</TodayAndTheNext7daysToday>
        <TodayAndTheNext7daysText>Próximos 5 dias </TodayAndTheNext7daysText>        
      </TodayAndTheNext7days>
      <CardHourTemperature data={dataCardHourTemperature}/>
    </FullContentContainer>
  )
}

export default function Home() {
    
  return(
    <FullContent/>    
  )
}
