import { ReactElement } from 'react'

import { useTheme } from 'styled-components'
import { Button } from 'components/Button'

import { LocationMessageModalProps } from './types'

import * as Styles from './styles'

import BaseModal from '../@BaseModal'

export function LocationMessageModal(
  props: LocationMessageModalProps
): ReactElement {
  const theme = useTheme()

  return (
    <BaseModal title="Atenção" {...props}>
      <Styles.LocationMessageModalContainer>
        <p>Você precisa habilitar a localização para realizar compras</p>

        <Button
          background={theme.colors.primary[300]}
          fontColor={theme.colors.primary[700]}
          onClick={props.onRequestClose}
        >
          Ok, entendi
        </Button>
      </Styles.LocationMessageModalContainer>
    </BaseModal>
  )
}
