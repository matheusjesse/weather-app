import { TouchableOpacityProps, Image } from 'react-native';
import CardResultContainer, { 
  TextTemperature,
  TemperatureContainer,
  TemperatureImageContainer,
  ImageContainer,
  TextCondition,
  TextCountry
} from './style';

export interface ICardResult {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
  };
  condition: {
    text: string;
    icon: string;
  };
}

interface ICardResultData extends TouchableOpacityProps {
  data: ICardResult;
}

export default function CardResult({ data, ...rest }: ICardResultData) {
  const { location, current, condition } = data;
  return(
    <CardResultContainer>
      <TemperatureImageContainer>
        <TemperatureContainer>
          <TextTemperature>
            {current && Math.floor(current.temp_c)} 
          </TextTemperature>
          <TextTemperature>
            º
          </TextTemperature>
        </TemperatureContainer>
        <ImageContainer>
          <Image 
            source={{
              uri: `https:${condition.icon}`,
            }}
          />
        </ImageContainer>
      </TemperatureImageContainer>
      <TextCondition>
        {condition.text}
      </TextCondition>
      <TextCountry>
        {location.name}, {location.region && location.region + ","}{" "}
        {location.country}
      </TextCountry>
    </CardResultContainer>
  )
}
