import styled from "styled-components";

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 135px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;

  > h1 {
    font-size: 48px;
    font-weight: 700;

    color: ${({theme}) => theme.COLORS.RED};
  }

  > p {
    font-size: 14px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.GRAY_100};

    padding-bottom: 48px;
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;

    color: ${({theme}) => theme.COLORS.WHITE};
    
    margin-bottom: 48px;
  }

  > div {

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > Button:nth-last-child(2){
    margin-top: 24px;
    margin-bottom: 42px;
    

    font-weight: 500;

    color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK_800};
  }

  a {
    color: ${({theme}) => theme.COLORS.RED};
    font-weight: 400;
    font-size: 16px;

    margin: 28px auto;
  }

`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: opacity(0.4);
`