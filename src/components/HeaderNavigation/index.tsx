import { AntDesign } from "@expo/vector-icons";
import HeaderNavigationContainer, { HeaderNavigationButton, HeaderNavigationText } from "./style";
import { TouchableOpacityProps } from "react-native";

interface IHeaderNavigation extends TouchableOpacityProps {
    titlePage: string;
  }

export default function  HeaderNavigation({
    titlePage,
    ...rest
  }: IHeaderNavigation) {
    return (
        <HeaderNavigationContainer>
            <HeaderNavigationButton>
                <AntDesign name="left" size={20} color={'#fff'}/>
            </HeaderNavigationButton>
            <HeaderNavigationText>{titlePage}</HeaderNavigationText>
        </HeaderNavigationContainer>
    )
}