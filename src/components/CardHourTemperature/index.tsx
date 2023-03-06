import CardHourTemperatureSection, { 
    TemperatureText,
    TemperatureImage,
    HourText,
    CardHourTemperatureContainer
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
        <CardHourTemperatureSection>
            {
                data.map((item) =>(
                    <CardHourTemperatureContainer key={item.id}>
                        <TemperatureText>
                            {`${item.temperatureValue} º`}
                        </TemperatureText>
                        <TemperatureImage>
                            <Image source={item.icon} />
                        </TemperatureImage>
                        <HourText>{item.hour}</HourText>
                    </CardHourTemperatureContainer>
                ))
            }
        </CardHourTemperatureSection>
    )
}