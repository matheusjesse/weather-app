import styled from "styled-components/native";
import { fontFamily } from "../../theme/fontFamily";

const HeaderNavigationContainer = styled.View`
    height: 40px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 32px;
`

const HeaderNavigationButton = styled.TouchableOpacity`
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #4D4D4D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 26px;
`
const HeaderNavigationText = styled.Text`
    width: 60px;
    height: 40px;
    font-family: ${fontFamily.OverpassRegular};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    color: #FFFFFF;
    margin-left: -34px;
`

export default HeaderNavigationContainer;
export { HeaderNavigationButton, HeaderNavigationText }
