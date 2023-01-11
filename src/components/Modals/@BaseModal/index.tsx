import { ReactElement } from 'react'

import { X } from 'phosphor-react'

import { IBaseModalProps } from './types'

import * as Styles from './styles'

const BaseModal = (props: IBaseModalProps): ReactElement => {
  return (
    <Styles.Container
      isOpen={props.isModalOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      maxWidth={props.maxWidth}
      maxHeight={props.maxHeight}
    >
      <div className="header">
        <div />

        <h1>{props.title}</h1>

        <button type="button" onClick={props.onRequestClose}>
          <X size={24} />
        </button>
      </div>

      {props.children}
    </Styles.Container>
  )
}

export default BaseModal
