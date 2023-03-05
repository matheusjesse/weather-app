import EmptyStateContentContainer from "./style"
import { Image } from 'react-native';
import { EmptyStateTitle, ImageContainer, EmptyStateText } from './style'
import ClimateChange from "../../assets/images/climate-change.png";

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

export default function Home() {
    
  return(
    <EmptyStateContent/>    
  )
}
