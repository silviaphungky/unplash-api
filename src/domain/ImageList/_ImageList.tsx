import styled from '@emotion/styled'
import { IS_MOBILE_SCREEN, IS_TAB_SCREEN } from '@utils/mediaQueries'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  ${IS_TAB_SCREEN} {
    grid-template-columns: 1fr 1fr;
  }

  ${IS_MOBILE_SCREEN} {
    grid-template-columns: 1fr;
  }
`

export const IconContainer = styled.div`
  display: block;
  margin: 25vh auto 0;
  text-align: center;
`

export const EmptyText = styled.h3`
  color: #d8d8d8;
  margin-top: 1rem;
`

export const PaginationText = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.15rem;
`
