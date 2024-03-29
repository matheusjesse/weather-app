import SearchContainer, { SearchButton, SearchIcon, SearchInput, SearchInputContainer } from './style';
import HeaderNavigation from '../../components/HeaderNavigation';
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { ICardResult } from '../../components/CardResult';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IStackRoutes } from '../../routes/stack.routes';

type SearchScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  "Search"
>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const Search = ({ navigation }: Props): JSX.Element =>  {
    const [cityInput, setCityInput] = useState("");
    const [dataWeather, setDataWeather] = useState({} as ICardResult);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    

    const handleNavigateHome = () => {
        navigation.navigate("Home");
      };
      
    return(
        <SearchContainer>
            <HeaderNavigation titlePage="Busca" onPress={handleNavigateHome}/>
            <SearchInputContainer>
            <SearchIcon>
                <Ionicons
                    name="search-outline"
                    size={24}
                    color={'#fff'}
                />
            </SearchIcon>
            <SearchInput
                placeholder="Digite o nome de uma cidade"
                value={cityInput}
                autoCapitalize="sentences"
                onChangeText={(text) => {
                    setCityInput(text);
                }}
            >
                
            </SearchInput>
            <SearchButton>
                <Ionicons
                    name="md-location-sharp"
                    size={30}
                    color={'#fff'}
                />
            </SearchButton>
            </SearchInputContainer>
        </SearchContainer>
    )
}

export default Search;
