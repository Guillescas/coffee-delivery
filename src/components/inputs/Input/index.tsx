import { ReactElement } from 'react'

import { useFormContext } from 'react-hook-form'

import { InputProps } from './types'

import * as Styles from './styles'

export function Input(props: InputProps): ReactElement {
  const { register } = useFormContext()

  return (
    <Styles.InputContainer errorMessage={!!props.errorMessage}>
      <label htmlFor={props.name}>{props.label}</label>

      <input type="text" {...props} {...register(props.name)} />

      <div className="error-wrapper">
        <p>{props.errorMessage}</p>
      </div>
    </Styles.InputContainer>
  )
}
