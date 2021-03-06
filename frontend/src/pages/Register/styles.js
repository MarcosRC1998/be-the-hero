import styled from "styled-components";
import { Container } from "../../styles/global";

export const RegisterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;
