import styled from "styled-components";



export const Container = styled.View`
    max-width: 100%;
    margin-bottom: 15px;
    padding:  10px 10px 10px;
    padding-top: ${(props) => props.Explore? 20 : 10};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 12px;
`

export const TrendingHeader = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const StarsContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const StarsCounter = styled.Text`
    background-color: ${({ theme }) => theme.colors.lightCyan};
    color: ${({ theme }) => theme.colors.cyan};
    max-width: 80px;
    padding: 2px 10px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
`


export const TitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Divider = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondaryGray};
    margin: 15px 0;

`

export const InfoContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${(props) => props.ml? 20 : 0};
`

