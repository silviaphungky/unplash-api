import { Dispatch, ReactNode } from 'react'
import { CloseButton, ModalBody, ModalContainer, ModalDialog } from './_Modal'

interface Props {
  isShow: boolean
  children: ReactNode
  setIsShow: Dispatch<boolean>
}

const Modal = ({ isShow, setIsShow, children }: Props) => {
  return (
    <ModalContainer isShow={isShow}>
      <ModalDialog isShow={isShow}>
        <CloseButton color="transparent" onClick={() => setIsShow(false)}>
          &times;
        </CloseButton>
        <ModalBody>{children}</ModalBody>
      </ModalDialog>
    </ModalContainer>
  )
}

export default Modal
