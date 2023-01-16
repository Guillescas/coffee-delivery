import { ReactElement } from 'react'

import { InputProps } from './types'

import * as Styles from './styles'

export function Input(props: InputProps): ReactElement {
  return (
    <Styles.InputContainer errorMessage={!!props.errorMessage}>
      <label htmlFor={props.name}>{props.label}</label>

      <input type="text" {...props} />

      <div className="error-wrapper">
        <p>{props.errorMessage}</p>
      </div>
    </Styles.InputContainer>
  )
}
