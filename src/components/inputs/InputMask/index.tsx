import { ReactElement } from 'react'

import { InputMaskProps } from './types'

import * as Styles from './styles'

export function InputMask(props: InputMaskProps): ReactElement {
  return (
    <Styles.InputMaskContainer errorMessage={!!props.errorMessage}>
      <label htmlFor={props.name}>{props.label}</label>

      <Styles.InputMask type="text" maskChar=" " {...props} />

      <div className="error-wrapper">
        <p>{props.errorMessage}</p>
      </div>
    </Styles.InputMaskContainer>
  )
}
