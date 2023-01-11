import { ReactNode } from 'react'

export interface IBaseModalProps {
  isModalOpen: boolean
  onRequestClose: () => void
  title?: string
  children: ReactNode
  maxWidth?: number | string
  maxHeight?: number | string
}
