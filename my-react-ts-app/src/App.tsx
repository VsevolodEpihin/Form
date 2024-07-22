import Form from "./components/Form/Form"
import { GlobalStyle } from "./StyledComponents/GlobalStyle"
import { FormWrapper } from "./StyledComponents/Wrappers"

const App = () => {
  return (
  <>
    <GlobalStyle />
    <FormWrapper>
      <Form/>
    </FormWrapper>
  </>
  )
}

export default App
