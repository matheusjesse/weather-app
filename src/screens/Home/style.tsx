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
    margin: 18px 0px 18px 0px;
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

export default EmptyStateContentContainer;
export { 
  EmptyStateTitle,
  ImageContainer,
  EmptyStateText,
  FullContentContainer,
  FullContentImage,
  FullContentTemperature,
  FullContentTemperatureText,
  FullContentTemperatureMesure
}