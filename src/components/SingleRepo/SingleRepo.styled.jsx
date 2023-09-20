import styled from "styled-components";



export const Container = styled.View`
    max-width: 100%;
    margin-bottom: 15px;
    padding: 20px 10px 10px 10px;
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