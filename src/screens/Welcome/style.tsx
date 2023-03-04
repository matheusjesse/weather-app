import styled from 'styled-components/native';
import { fontFamily } from '../../theme/fontFamily';
const WelcomeContainer = styled.SafeAreaView`
    text-align: center;
    background: #1B1D22;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;    
`

const WelcomeTitle = styled.Text`
    width: 80%;
    font-family: ${fontFamily.OverpassRegular};
    height: 98px;
    font-weight: 600;
    font-size: 1.8em;
    color: #FFFFFF;
    display: flex;
    align-items: flex-end;
    text-align: center;
    white-space: normal;
`

const WelcomeText = styled.Text`
    width: 80%;
    height: 98px;
    font-family: ${fontFamily.OverpassRegular};
    font-style: normal;
    font-weight: 400;
    font-size: 1.2em;
    line-height: 28px;
    display: flex;
    align-items: center; 
    white-space: normal;
    margin-top: 38px;
    color: #AFAFAF;
`

const ImageContainer = styled.View`
    width: 222px;
    height: 214px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default WelcomeContainer
export { WelcomeTitle, WelcomeText, ImageContainer }