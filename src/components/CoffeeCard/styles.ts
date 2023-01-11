import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    top: -15px;
    left: calc(50% - 60px);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.baseCard};

    border-radius: 6px 36px;

    padding: 1.25rem;

    .image-space {
      height: 90px;
    }

    .tags-wrapper {
      display: flex;
      gap: 0.5rem;

      min-height: 50px;
    }

    h3 {
      font-family: ${({ theme }) => theme.fonts.family.baloo2};
      font-size: 1.25rem;
      line-height: 130%;

      margin-bottom: 0.5rem;
    }

    > p {
      margin-bottom: 1.75rem;

      text-align: center;
      color: ${({ theme }) => theme.colors.baseLabel};
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: center;

      > p {
        color: ${({ theme }) => theme.colors.baseText};

        margin-right: 1.5rem;

        span {
          font-weight: 800;
          font-family: ${({ theme }) => theme.fonts.family.baloo2};
          font-size: 1.5rem;

          margin-left: -2px;
        }
      }

      > button {
        margin-left: 0.5rem;
      }
    }
  }
`

export const CoffeeTag = styled.span`
  background: ${({ theme }) => theme.colors.primary[300]};

  border-radius: 100px;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary[700]};
  font-weight: bold;

  padding: 4px 8px;
  margin: 0.75rem 0 1rem;
`
