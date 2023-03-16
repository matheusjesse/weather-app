import styled from "styled-components/native"
import { fontFamily } from '../../theme/fontFamily';

const EmptyStateContentContainer = styled.View`
    text-align: center;
    background: #1B1D22;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;


`
const EmptyStateTitle = styled.Text`
  font-family: ${fontFamily.OverpassRegular};
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
`
const ImageContainer = styled.View `
  width: 243px;
  height: 258px;
  margin: 18px 0px 18px 0px;
`

const EmptyStateText = styled.Text`
  font-family: ${fontFamily.OverpassLight};
  width: 328px;
  height: 98px;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #AFAFAF;
`

const FullContentContainer = styled.View`
    text-align: center;
    background: #1B1D22;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`

const FullContentImage = styled.View `
    width: 172px;
    height: 140px;
    margin: 40px 0px 18px 0px;
    display: flex;
    align-items: center;
`

const FullContentTemperature = styled.View`
    width: 172px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding-left: 16px;
`

const FullContentTemperatureMesure = styled.Text`
    flex-direction: row;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 76px;
    text-align: center;
    color: #FFFFFF;
`

const FullContentTemperatureText = styled.Text`
    width: 328px;
    height: 30px;
    font-family: ${fontFamily.OverpassLight};
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #AFAFAF;
`

const TodayAndTheNext7days = styled.View`
    width: 328px;
    height: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 34px;
`
const TodayAndTheNext7daysToday = styled.Text`
  width: 113px;
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  font-family: ${fontFamily.OverpassLight};
  display: flex;
  justify-content: start;
  align-items: center;
  text-align:center;
`
const TodayAndTheNext7daysText = styled.Text`
  text-align: end;
  width: 121px;
  height: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #AFAFAF;
  font-family: ${fontFamily.OverpassLight};
  display: flex;
  justify-content: end;
  align-items: center;
  text-align:center;
  
  margin-right: -94px;
`
const FullContentHeaderContainer = styled.View`
  width: 200px;
  height: 42px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

const FullContentHeaderCity = styled.Text`
  width: 80px;
  height: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  font-family: ${fontFamily.OverpassLight};
`

const FullContentHeaderCountry = styled.Text`
  width: 68px;    
  height: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  font-family: ${fontFamily.OverpassLight};
`


const FullContentHeaderDate = styled.Text`
  width: 190px;
  height: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #AFAFAF;
  font-family: ${fontFamily.OverpassLight};
`

export default EmptyStateContentContainer;
export { 
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
}