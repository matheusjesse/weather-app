import WeatherDescriptionContainer, { 
    WeatherDescriptionDetails,
    WeatherDescriptionImage, 
    WeatherDescriptionItem, 
    WeatherDescriptionPercent
} from "./style";
import { Image, ImageSourcePropType } from "react-native";

interface IWeatherDescriptionData {
    id: number;
    icon: ImageSourcePropType;
    value: string;
    text: string;
  }
  
  interface IWeatherData {
    data: IWeatherDescriptionData[];
  }

export default function WeatherDescription ({ data }: IWeatherData) {

    return(
        <WeatherDescriptionContainer>
            {
                data.map((item) => (
                    <WeatherDescriptionItem key={item.id}>
                        <WeatherDescriptionImage>
                            <Image source={item.icon} />                            
                        </WeatherDescriptionImage>
                        <WeatherDescriptionPercent>
                            {item.value}
                        </WeatherDescriptionPercent>
                        <WeatherDescriptionDetails>
                            {item.text}
                        </WeatherDescriptionDetails>
                    </WeatherDescriptionItem>
                ))
            }
        </WeatherDescriptionContainer>
    )
}