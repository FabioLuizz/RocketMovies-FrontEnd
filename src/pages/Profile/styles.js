import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_900};
    color: ${({ theme }) => theme.COLORS.RED};

    display: flex;
    align-items: center;
    padding: 0 144px;

    > a {
      color: ${({ theme }) => theme.COLORS.RED};
      margin-left: 8px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  > div:nth-last-child(3) {
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 24px;

    Input {
      width: 288px;
    }
  }

  > div:nth-last-child(2) {
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 24px;

    input {
      width: 288px;
    }
  }
`

export const Avatar = styled.div`
  width: 186px;
  height: 186px;

  display: flex;
  flex-direction: column;

  margin-top: -95px;
  margin-bottom: 90px;

  position: relative;

  > img {
    width: 186px;
    height: 186px;


    border-radius: 50%;
  }

  input {
    display: none;
    background: none;
  }

  > label {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 50%;

    position: absolute;
    right: 7px;
    bottom: 7px;
  }

  label:hover {
    cursor: pointer;
  }
`

export const Footer = styled(Link)`
  > Button {
    width: 340px;
    height: 48px;
  }
`
