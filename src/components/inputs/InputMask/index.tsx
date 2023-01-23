import { ReactElement } from 'react'

import { useFormContext } from 'react-hook-form'

import { useTheme } from 'styled-components'
import { Loading } from 'components/Loading'

import { InputMaskProps } from './types'

import * as Styles from './styles'

export function InputMask(props: InputMaskProps): ReactElement {
  const theme = useTheme()

  const { register } = useFormContext()

  return (
    <Styles.InputMaskContainer errorMessage={!!props.errorMessage}>
      <label htmlFor={props.name}>{props.label}</label>

      <Styles.InputMask
        type="text"
        maskChar=" "
        {...props}
        {...register(props.name)}
      />

      {props.isLoading && (
        <div className="loading-wrapper">
          <Loading color={theme.colors.secondary[700]} width={16} height={16} />
        </div>
      )}

      <div className="error-wrapper">
        <p>{props.errorMessage}</p>
      </div>
    </Styles.InputMaskContainer>
  )
}
