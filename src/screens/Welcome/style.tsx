import styled from 'styled-components/native';
import { fontFamily } from '../../theme/fontFamily';
const WelcomeContainer = styled.SafeAreaView`
    text-align: center;
    background: #1B1D22;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`

const WelcomeTitle = styled.Text`
    width: 80%;
    height: 79px;
    font-weight: 600;
    font-size: 2em;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-align: center;
    white-space: normal;
`

export default WelcomeContainer
export { WelcomeTitle }