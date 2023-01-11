import styled from 'styled-components'

export const HomeContainer = styled.div`
  background: url('/presentation-background.png') no-repeat;

  section {
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
    padding: 0 1.25rem;
  }

  #presentation {
    position: relative;

    width: 100%;

    margin-top: 5.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 100%;
      max-width: 588px;

      h1 {
        font-size: 3rem;
        font-family: ${({ theme }) => theme.fonts.family.baloo2};
        font-weight: 800;
        line-height: 130%;
      }

      p {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
      }

      > div {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(240px, 280px));

        margin-top: 4.125rem;
      }
    }

    > img {
      transition: opacity 0.2s;

      @media (max-width: 1140px) {
        position: absolute;
        right: 0;

        opacity: 0.2;
      }
    }
  }

  #products {
    margin-top: 8.75rem;

    h2 {
      font-family: ${({ theme }) => theme.fonts.family.baloo2};
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;

      margin-bottom: 2.25rem;
    }

    .coffees {
      display: grid;
      gap: 1.5rem 1rem;
      grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    }
  }
`
