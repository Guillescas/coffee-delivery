import ReactInputMask from 'react-input-mask'

import styled from 'styled-components'

import { InputMaskContainerProps } from './types'

export const InputMaskContainer = styled.div<InputMaskContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  label {
    color: ${({ theme }) => theme.colors.baseTitle};
    margin-bottom: 0.25rem;
  }

  input {
    width: 100%;

    padding: 0.75rem;

    background: ${({ theme }) => theme.colors.baseinput};

    border: 1px solid
      ${({ errorMessage, theme }) =>
        errorMessage ? theme.colors.danger : theme.colors.baseinput};
    border-radius: 4px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.baseLabel};
      opacity: 1;
    }
    :-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.baseLabel};
    }
    ::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.baseLabel};
    }
  }

  .error-wrapper {
    min-height: 16px;

    p {
      font-size: 0.875rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.danger};
    }
  }
`

export const InputMask = styled(ReactInputMask)``
