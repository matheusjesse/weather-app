import styled from "styled-components/native";
import { fontFamily } from '../../theme/fontFamily';

const CardHourTemperatureContainer = styled.View`
    box-sizing: border-box;
    width: 328px;
    height: 76px;
    border-radius: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 24px;

`

const CardHourTemperatureItem = styled.View`
    box-sizing: border-box;
    width: 68px;
    height: 90px;
    background: #23262B;
    border: 1.5px solid #33383E;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`


const TemperatureText = styled.Text`
    width: 33px;
    height: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
    font-family: ${fontFamily.OverpassLight};
`

const TemperatureImage = styled.View`
    width: 30px;
    height: 31px;
`

const HourText = styled.Text `
    width: 37px;
    height: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #AFAFAF;
`
export default CardHourTemperatureContainer;

export { CardHourTemperatureItem, TemperatureText, TemperatureImage, HourText }