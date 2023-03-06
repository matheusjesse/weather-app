import CardHourTemperatureContainer, { 
    CardHourTemperatureItem,
    TemperatureText,
    TemperatureImage,
    HourText,
} from "./style";
import { Image, ImageSourcePropType } from "react-native";

interface ICardHourTemperature {
    id: number;
    temperatureValue: number;
    icon: ImageSourcePropType;
    hour: string;
  }
  
  interface ICardHourTemperatureData {
    data: ICardHourTemperature[];
  }

export default function CardHourTemperature ({
    data,
}: ICardHourTemperatureData) {
    return(
        <CardHourTemperatureContainer>
            {
                data.map((item) =>(
                    <CardHourTemperatureItem key={item.id}>
                        <TemperatureText>
                            {`${item.temperatureValue}º`}
                        </TemperatureText>
                        <TemperatureImage>
                            <Image 
                                source={item.icon} 
                                style={{ resizeMode: 'center', width: '100%', height: '100%' }}
                            />
                        </TemperatureImage>
                        <HourText>{item.hour}</HourText>
                    </CardHourTemperatureItem>
                ))
            }
        </CardHourTemperatureContainer>
    )
}