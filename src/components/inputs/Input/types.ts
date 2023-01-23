import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMessage?: string
  name: string
}

export interface InputContainerProps {
  errorMessage?: boolean
}
