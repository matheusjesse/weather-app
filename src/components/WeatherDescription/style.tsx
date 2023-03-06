import styled from 'styled-components/native';
import { fontFamily } from '../../theme/fontFamily';

const WeatherDescriptionContainer = styled.View`
    box-sizing: border-box;
    width: 328px;
    height: 76px;
    border: 1px solid #4D4D4D;
    border-radius: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 24px;

`

const WeatherDescriptionItem = styled.View`
    width: 109px;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const WeatherDescriptionImage = styled.View`
    width: 20px;
    height: 14px;
`
const WeatherDescriptionPercent = styled.Text`
    width: 75px;
    height: 17px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    font-family: ${fontFamily.OverpassLight};
`
const WeatherDescriptionDetails = styled.Text`
    width: 81px;
    height: 17px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    color: #7E7E7E;
    font-family: ${fontFamily.OverpassLight};
`

export default WeatherDescriptionContainer;

export { 
    WeatherDescriptionItem, 
    WeatherDescriptionImage,
    WeatherDescriptionPercent,
    WeatherDescriptionDetails
};