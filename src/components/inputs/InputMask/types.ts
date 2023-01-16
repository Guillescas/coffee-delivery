import { InputHTMLAttributes } from 'react'

import { Props } from 'react-input-mask'

export interface InputMaskProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Props {
  label: string
  errorMessage?: string
  isLoading?: boolean
}

export interface InputMaskContainerProps {
  errorMessage?: boolean
}
