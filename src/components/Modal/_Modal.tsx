import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN, IS_TAB_SCREEN } from '@utils/mediaQueries'

export const ModalContainer = styled.div<{ isShow: boolean }>`
  &:before {
    content: '';
    display: none;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
  }

  ${({ isShow }) =>
    isShow
      ? `
    &:before {
      display: block;
    }
    `
      : ''}
`
export const Opened = styled.div`
  &:before {
    display: block;
  }
`

export const ModalDialog = styled.div<{ isShow: boolean }>`
  background: #fefefe;
  border: #333333 solid 0px;
  border-radius: 5px;
  position: fixed;
  margin: auto 20%;
  top: -100%;
  left: 0%;
  right: 0%;
  z-index: 12;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  -webkit-transform: translate(0, -500%);
  -ms-transform: translate(0, -500%);
  transform: translate(0, -500%);
  padding: 1.5rem;

  ${IS_TAB_SCREEN} {
    padding: 0.5rem;
    margin: auto 10%;
  }

  ${({ isShow }) =>
    isShow
      ? `
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    top: 50%;
    transform: translateY(-50%);
    &:before {
      display: block;
    }
    `
      : ''};
`

export const ModalBody = styled.div`
  width: 100%;
`

export const CloseButton = styled.button`
  font-size: 1.5rem;
  margin-left: auto;
  display: block;
  margin-bottom: 1rem;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  ${IS_MOBILE_SCREEN} {
    margin-bottom: 0.5rem;
  }
`
