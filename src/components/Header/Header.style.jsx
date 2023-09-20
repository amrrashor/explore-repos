import styled from "styled-components";

export const HeaderContainer = styled.View`
    background-color: ${(props) => props.theme.colors.white};
    height: 130px;
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
`


export const Flex = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;

`

export const TabContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`

export const Tab = styled.Text`
    color: ${(props) => props.activeTab ? props.theme.colors.cyan : props.theme.colors.gray};
    margin-right: 30px;
    border-bottom-width: ${(props) => props.activeTab ? '1px' : 0 };
    border-bottom-color: ${(props) => props.activeTab ? props.theme.colors.cyan : ''};
    border-bottom-style:solid ;
    padding: 10px;

`
