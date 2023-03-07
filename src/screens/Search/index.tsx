import SearchContainer, { SearchButton, SearchIcon, SearchInput, SearchInputContainer } from './style';
import { Text } from 'react-native';
import HeaderNavigation from '../../components/HeaderNavigation';
import { Ionicons } from "@expo/vector-icons";

export default function Seacth() {

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