import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  padding: 1.75rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    .cart-button-wrapper {
      position: relative;

      .badge {
        position: absolute;
        top: -8px;
        right: -8px;

        width: 20px;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        background: ${({ theme }) => theme.colors.primary[700]};

        font-size: 0.75rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.neutral};
        text-align: center;
      }
    }
  }
`

export const UserLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  background: ${({ theme }) => theme.colors.secondary[300]};
  color: ${({ theme }) => theme.colors.secondary[700]};

  border: 2px solid ${({ theme }) => theme.colors.secondary[300]};

  border-radius: 4px;

  padding: 0.5rem;
`
