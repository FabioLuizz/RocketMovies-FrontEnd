import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
      height: 20px;
      background: rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.RED};
      border-radius: 10px;
    }

  }
`

export const Form = styled.form`
  max-width: 1130px;

  display: flex;
  flex-direction: column;

  margin: 40px auto;

  > header {
    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-top: 25px;
    }
  }
`

export const Section = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;

  max-width: 1130px;

  #TextArea {
    font-family: Roboto;
  }
`

export const NewMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  width: 100%;

  > p {
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 24px;

    display: flex;
  }

  > div {
    display: flex;
    flex-wrap: wrap;

    gap: 3px;

    width: 100%;

    padding: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_900};

    border-radius: 10px;
  }
`

export const Footer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;

  margin-top: 40px;

  gap: 40px;
`
