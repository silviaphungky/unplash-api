import styled from '@emotion/styled'
import { IS_TAB_SCREEN } from '@utils/mediaQueries'

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  margin: auto;
  display: block;

  ${IS_TAB_SCREEN} {
    height: 50vh;
  }
`
