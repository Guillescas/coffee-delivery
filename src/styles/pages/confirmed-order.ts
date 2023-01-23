import styled from 'styled-components'

export const ConfirmedOrderContainer = styled.div`
  main {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;

    margin: 0 auto;

    padding: 1.75rem;

    > div {
      h1 {
        font-family: ${({ theme }) => theme.fonts.family.baloo2};
        color: ${({ theme }) => theme.colors.primary[700]};
      }

      p {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;

        margin: 0.25rem 0 2.5rem;
      }

      .box {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1.5rem;

        padding: 2.5rem;

        border-radius: 6px 36px;

        background: ${({ theme }) => theme.colors.neutral};

        .background-box {
          position: absolute;
          top: -1px;
          right: -1px;
          bottom: -1px;
          left: -1px;

          border-radius: 6px 36px;

          z-index: -1;

          background: ${({ theme }) =>
            `linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.secondary[500]})`};
        }
      }
    }
  }
`
