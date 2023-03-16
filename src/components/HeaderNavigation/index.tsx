import { AntDesign } from "@expo/vector-icons";
import HeaderNavigationContainer, { HeaderNavigationButton, HeaderNavigationText } from "./style";
import { TouchableOpacityProps } from "react-native";
import React from "react";

interface IHeaderNavigation extends TouchableOpacityProps {
    titlePage: string;
  }

const HeaderNavigation = ({
    titlePage,
    ...rest
  }: IHeaderNavigation): JSX.Element => {
    return (
        <HeaderNavigationContainer>
            <HeaderNavigationButton {...rest}>
                <AntDesign name="left" size={20} color={'#fff'}/>
            </HeaderNavigationButton>
            <HeaderNavigationText>{titlePage}</HeaderNavigationText>
        </HeaderNavigationContainer>
    )
}

export default HeaderNavigation;
