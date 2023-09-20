import styled from "styled-components";

export const Container = styled.View`
    padding: 15px;
    padding: 15px;
    background-color:  #FAFCFE
;
`

export const StyledText = styled.Text`
    color: ${(props) => props.black ?  props.theme.colors.black : props.gray ? props.theme.colors.gray : props.cyan ? props.theme.colors.cyan : ''};
    margin-top: ${(props) => props.mt ? 20 : 0 };
    margin-bottom: ${(props) => props.mb ? 20 : 0 };
    line-height: ${(props) => props.fontXL ? 23 : props.fontL ? 20 : 16 };
    font-weight: 500;
    margin-left: ${(props) => props.ml ? 8 : props.ml2 ? 4 :0 };
    margin-right: ${(props) => props.mr ? 8 : 0 };
    font-size: ${(props) => props.fontXL ? 20 : props.fontL ? 18 : props.fontM ? 14 : props.fontS ? 12 : 10};
`


export const DropDownStyle = {
    marginBottom: 20,
    borderWidth: 0,
    maxWidth: 150,
    color: '#000',
    position:'relative'
}

export const dropDownContainerStyle = {
    maxWidth: 150,
    borderWidth: 0,
    borderRadius: 8,
}

export const modalContentContainerStyle = {
    backgroundColor: '#fff',
    maxHeight:'450px',
}