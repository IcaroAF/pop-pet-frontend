import styled from 'styled-components'
import { Button, Flex } from '@chakra-ui/react'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px;
`

const Wrapper = styled(Flex)`
  height: 100vh;
`

const PhoneInput = styled(PhoneInputWithCountry)`
  outline: none;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  height: 25px;
`
const SubmitButton = styled(Button)`
  margin-top: 12px;
`

export { SubmitButton, FormWrapper, Wrapper, PhoneInput }
