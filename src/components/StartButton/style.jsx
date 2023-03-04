import styled from "styled-components/native";

import { fontFamily } from '../../theme/fontFamily';

const StartButtonContainer = styled.TouchableOpacity`
    width: 328px;
    height: 54px;
    background-color: red;
    box-sizing: border-box;
    width: 328px;
    height: 54px;
    background: #23262B;
    border: 1px solid #838384;
    border-radius: 18px;
    margin-top: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonText = styled.Text`
    width: 144px;
    height: 24px;
    font-family: ${fontFamily.OverpassRegular};
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
`

export default StartButtonContainer;
export { ButtonText }