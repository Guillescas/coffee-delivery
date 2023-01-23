import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 1.5rem 0;

  border-bottom: 1px solid ${({ theme }) => theme.colors.baseButton};

  &:first-child {
    padding-top: 0;
  }

  > div {
    display: flex;
    justify-content: space-between;

    img {
      margin-right: 1.25rem;
    }

    > div {
      p {
        font-size: 1rem;
        line-height: 130%;
        font-weight: 400;
      }

      .buttons-wrapper {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.25rem;

        button {
          border: none;
        }
      }
    }
  }

  > span {
    color: ${({ theme }) => theme.colors.baseText};
    font-weight: 700;
  }
`
