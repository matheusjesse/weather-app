import SearchContainer, { SearchButton, SearchIcon, SearchInput, SearchInputContainer } from './style';
import HeaderNavigation from '../../components/HeaderNavigation';
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react';

export default function Seacth() {
    const [cityInput, setCityInput] = useState("");
    const handleNavigateHome = () => {
        return
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