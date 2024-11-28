import { Outlet } from "react-router-dom";
import styled from "styled-components";

const RootLayout = () => {
    return (
      <Container>
        <h1>👻 your TO-DO 👻</h1>
        <Outlet />
      </Container>
    );
  };

export default RootLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
