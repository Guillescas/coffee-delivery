import { ButtonHTMLAttributes, ReactNode } from 'react'

export enum ButtonSizesEnum {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean
  rounded?: boolean
  size?: ButtonSizesEnum
  children: ReactNode
  isLoading?: boolean
  background: string
  fontColor: string
}

export interface IContainerProps {
  rounded?: boolean
  full?: boolean
  size: ButtonSizesEnum
  backgroundColor: string
  customFontColor: string
}
