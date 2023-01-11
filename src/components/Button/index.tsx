import { Loading } from 'components/Loading'

import { ButtonSizesEnum, IButtonProps } from './types'

import * as Styles from './styles'

export function Button(props: IButtonProps) {
  const { size = ButtonSizesEnum.Medium } = props

  return (
    <Styles.Container
      {...props}
      backgroundColor={props.background}
      customFontColor={props.fontColor}
      type="button"
      rounded={props.rounded}
      size={size}
    >
      {props.isLoading ? <Loading width={24} height={24} /> : props.children}
    </Styles.Container>
  )
}
