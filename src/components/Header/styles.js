import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 116px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.BORDER};

  > h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;

    margin: 42px 64px 42px 120px;

    color: ${({ theme }) => theme.COLORS.RED};

    :hover {
      cursor: pointer;
    }
  }

  > input {
    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 10px;
    outline: none;

    font-family: Roboto, sans-serif;
    font-size: 14px;

    padding-left: 24px;
    padding-right: 24px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  margin: 26px 123px 26px 0px;

  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }
`

export const User = styled.div`
  display: flex;
  flex-direction: column;

  margin: 40px 9px 40px 64px; 
  > strong {
    white-space: nowrap;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > a {
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 10px;

    font-weight: 400;
    font-size: 14px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

  }
`
