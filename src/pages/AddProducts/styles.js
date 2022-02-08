import styled from 'styled-components'
import { Button, Flex, Heading } from '@chakra-ui/react'

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
const SubmitButton = styled(Button)`
  margin-top: 12px;
`
const FormHeading = styled(Heading)`
  margin-bottom: 10px;
`

export { SubmitButton, FormHeading, FormWrapper, Wrapper }
