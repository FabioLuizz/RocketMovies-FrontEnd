import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1121px;
  min-height: 220px;

  overflow-y: hidden;

  border-radius: 16px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_RED_900};

  > h1 {
    font-size: 24px;
    line-height: 31px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 32px 0px 8px 32px;

    :hover {
      cursor: pointer;
    }
  }

  > h2 {
    display: flex;
    align-items: center;

    gap: 6.75px;
    margin-left: 32px;
    margin-bottom: 15px;

    > svg {
      width: 15px;
      height: 15px;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .rated {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  > P {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    line-height: 18.75px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin: 0px 32px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      white-space: initial;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  :hover {
    cursor: pointer;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 30px 32px 32px 32px;

  gap: 8px;

`