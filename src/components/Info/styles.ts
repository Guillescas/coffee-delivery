import styled from 'styled-components'

import { InfoContainerProps } from './types'

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-width: 32px;
    max-width: 32px;
    height: 100%;
    min-height: 32px;
    max-height: 32px;

    border-radius: 50%;

    background: ${({ color }) => color};
    color: ${({ theme }) => theme.colors.neutral};
  }

  span {
    line-height: 130%;
    font-size: 1rem;
    font-weight: 400;
  }
`
