import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.RED};
  }

  > p {
    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 48px;
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 48px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > Button:nth-last-child(2) {
    margin-top: 16px;
    margin-bottom: 42px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_800};
  }

  a {
    color: ${({theme}) => theme.COLORS.RED};
    font-weight: 400;
    font-size: 16px;

    margin: 0 auto;

    > svg {
      margin-right: 8px;
    }
  }
`

export const background = styled.div`
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: opacity(0.4);
`
