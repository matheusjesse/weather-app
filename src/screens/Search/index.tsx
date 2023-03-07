import SearchContainer from './style';
import { Text } from 'react-native';
import HeaderNavigation from '../../components/HeaderNavigation';

export default function Seacth(): JSX.Element {

    const handleNavigateHome = () => {
        return
      };
      
    return(
        <SearchContainer>
            <HeaderNavigation titlePage="Busca" onPress={handleNavigateHome}/>
        </SearchContainer>
    )
}