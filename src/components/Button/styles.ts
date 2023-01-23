import { lighten } from 'polished'

import styled, { css } from 'styled-components'

import { ButtonSizesEnum, IContainerProps } from './types'

export const Container = styled.button<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ full }) => (full ? '100%' : 'fit-content')};

  border: 1px solid;
  border-radius: ${({ rounded }) => (rounded ? '40px' : '4px')};

  transition: background-color 0.2s, border-color 0.2s;

  gap: 0.25rem;

  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ customFontColor }) => customFontColor};

  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${({ backgroundColor }) => lighten(0.1, backgroundColor)};
  }

  ${({ size }) => {
    switch (size) {
      case ButtonSizesEnum.Small:
        return css`
          font-size: 0.75rem;

          padding: 0.5rem;
        `

      case ButtonSizesEnum.Medium:
        return css`
          font-size: 0.85rem;

          padding: 0.5rem;
        `

      case ButtonSizesEnum.Large:
        return css`
          font-size: 1rem;

          padding: 0.75rem;
        `
    }
  }}
`
