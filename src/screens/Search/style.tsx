import styled from "styled-components/native"

const SearchContainer = styled.View`
    text-align: center;
    background: #1B1D22;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const SearchInputContainer = styled.View`
    display: flex;
    height: 49px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

const SearchInput = styled.TextInput`
    width: 200px;
    height: 49px;
    background: #212428;    
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
`

const SearchButton = styled.TouchableOpacity`
    width: 50px;
    height: 49px;
    background: #212428;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
`
const SearchIcon = styled.View`
    width: 50px;
    height: 49px;
    background: #212428;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default SearchContainer;

export { SearchInputContainer, SearchInput, SearchButton, SearchIcon }