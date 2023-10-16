import styled from 'styled-components'

export const QuantitySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.baseButton};
  border: 2px solid ${({ theme }) => theme.colors.baseButton};

  border-radius: 6px;

  button {
    border: none;
    background: transparent;

    cursor: pointer;

    color: ${({ theme }) => theme.colors.secondary[500]};

    outline: 0 !important;

    &:nth-of-type(1) {
      padding: 0.5rem;
      border-radius: 6px 0 0 6px;

      &:focus {
        background: ${({ theme }) =>
          `linear-gradient(to right, ${theme.colors.secondary[400]}, ${theme.colors.baseButton})`};
      }
    }
    &:nth-of-type(2) {
      padding: 0.5rem;
      border-radius: 0 6px 6px 0;
    }

    &:focus {
      background: ${({ theme }) =>
        `linear-gradient(to left, ${theme.colors.secondary[400]}, ${theme.colors.baseButton})`};
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  span {
    line-height: 130%;
  }
`
