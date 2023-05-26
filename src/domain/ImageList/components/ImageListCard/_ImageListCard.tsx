import styled from '@emotion/styled'

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15rem;
  margin: auto;
  display: block;
`

export const Card = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  background: white;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`
export const Title = styled.h3`
  text-align: center;
  text-transform: capitalize;
  line-height: 24px;
  margin: 0.5rem 0;
  padding: 0 0.75rem;
`

export const Author = styled.div`
  position: absolute;
  top: 1rem;
  z-index: 1;
  left: 0.75rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  color: white;
`

export const DownloadBtn = styled(Author)`
  left: unset;
  right: 0.75rem;
`
