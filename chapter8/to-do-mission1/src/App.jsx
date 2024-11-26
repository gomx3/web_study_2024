import styled from "styled-components"

import InputBox from "./components/InputBox"

function App() {
  return (
    <Container>
      <h1>👻 your TO-DO 👻</h1>
      <InputBox />
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`