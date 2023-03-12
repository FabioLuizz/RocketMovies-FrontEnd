import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Main = styled.div`
  grid-area: content;

  width: 1137px;

  margin: 50px auto;

  > header {
    display: flex;
    justify-content: space-between;

    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};

      white-space: nowrap;
    }

    > a {
      > Button {
        width: 207px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.RED};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_900};

        font-size: 16px;
        font-weight: 400;
        line-height: 21px;

        > svg {
          color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_900};
        }
      }
    }
  }
`
export const Section = styled.div`
  height: 60vh;


  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 24px;

  border-radius: 10px;

  ::-webkit-scrollbar {
    width: 8px;
    height: 20px;
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.RED};
    border-radius: 10px;
  }
`
