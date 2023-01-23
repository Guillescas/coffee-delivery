import { InputHTMLAttributes } from 'react'

import { Props } from 'react-input-mask'

export interface InputMaskProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Props {
  label: string
  errorMessage?: string
  isLoading?: boolean
  name: string
}

export interface InputMaskContainerProps {
  errorMessage?: boolean
}
