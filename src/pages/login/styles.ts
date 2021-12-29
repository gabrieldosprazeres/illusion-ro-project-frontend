import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      height: 45px;

      input {
        width: 200px;
        height: 30px;
        font-size: 16px;
      }

      p {
        color: red;
        text-align: center;
        font-size: 12px;
      }
    }

    button {
      padding: 10px 60px;
      border-radius: 8px;
    }
  }
`;
