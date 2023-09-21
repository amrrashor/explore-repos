import styled from "styled-components";
import DropDownPicker from "react-native-dropdown-picker";
export const FilterContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
`

export const PickerContainer = styled.View`
    width: 150px;
`

export const LanguageContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 50px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;


`

export const ModalTitle = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const ModalSearch = styled.View`
    width: 100%;
    border: ${({ theme }) => theme.borders.border_1};
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    border-radius: 10px;
    margin-top: 25;
    height: 40px;
`

export const StyledSearchField = styled.TextInput`
    color: ${({ theme }) => theme.colors.black};
    border: none;
    margin: 0;
    width: 90%;
    height: 40px;
`

export const LanguageItem = styled.TouchableOpacity`
    border-bottom-width:1px ;
    border-color: #CCD4DD5E;
    padding-bottom: 10px;
    margin-top: 10px;
`

