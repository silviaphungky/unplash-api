import { ChangeEvent, Dispatch } from 'react'
import { Input } from '@components'
import { InputContainer } from './_ImagesListSearchInput'

interface Props {
  keyword: string
  setKeyword: Dispatch<string>
}

const ImagesListSearchInput = ({ keyword, setKeyword }: Props) => {
  return (
    <InputContainer>
      <Input
        value={keyword}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value
          setKeyword(value)
        }}
        placeholder={'type something...'}
      />
    </InputContainer>
  )
}

export default ImagesListSearchInput
