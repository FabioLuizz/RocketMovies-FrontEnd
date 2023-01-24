import styled from 'styled-components'

export const Container = styled.div`
  width: 1137;
  height: 60vh;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 20px;
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 10px;
  }

`

export const Section = styled.div`
  display: flex;
  align-items: center;

  gap: 19px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > h2 {
    display: flex;
    align-items: center;

    gap: 6.75px;

    > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .rated {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 24px;

  > img {
    width: 16px;
    height: 16px;

    border-radius: 50%;
  }

  a {
    font-family: Roboto, sans-serif;
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 24px;

  font-family: Roboto, sans-serif;  
  font-size: 16px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    width: 15;
    height: 16px;

    color: ${({ theme }) => theme.COLORS.RED};
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 8px;

  margin-top: 40px;
`

export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;

  width: 1100px;
  margin-top: 40px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  word-wrap: break-word;
`
