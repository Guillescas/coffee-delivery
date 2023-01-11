import { ReactElement } from 'react'

import { InfoProps } from './types'

import * as Styles from './styles'

export function Info(props: InfoProps): ReactElement {
  return (
    <Styles.InfoContainer color={props.color}>
      <div className="icon-wrapper">{props.icon}</div>

      <span>{props.children}</span>
    </Styles.InfoContainer>
  )
}
