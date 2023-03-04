import styled from 'styled-components/native';
import { fontFamily } from '../../theme/fontFamily';
const WelcomeContainer = styled.View`
    text-align: center;
    background: #1B1D22;
    height: 100%;
    display: flex;
    align-items: center;
`

const WelcomeTitle = styled.Text`
    font-family: ${ fontFamily.OverpassRegular };
    max-width: 404px;
    min-width: 288;
    margin: 0px 28px 0px 28px;
    height: 79px;
    font-weight: 600;
    font-size: 33px;
    line-height: 42px;
    color: #FFFFFF;
    text-align: center;
`

export default WelcomeContainer
export { WelcomeTitle }