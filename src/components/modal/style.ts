import styled from "styled-components";

export const ContainerModal = styled.div`
  background-color: #808080;

  span {
    font-size: 11px;
    color: red;
  }

  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 3;

  display: flex;
  align-items: center;
`;

export const ContainerFormImagem = styled.div`
  background-color: #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 25px;
  padding: 30px 45px;
  z-index: 4;

  .closedModal {
    background-color: red;
    color: white;
    position: relative;

    top: 10%;
    left: 45%;
    padding: 10px 20px;
    margin: 0px;

    &:hover {
      filter: brightness(0.8);
      transition: 0.3s;
    }
  }

  h3 {
    color: #16afd0;
  }

  h4 {
    text-align: left;
  }

  button {
    margin: 20px 0px;
    padding: 20px 150px;
    background-color: #00d930;
    color: white;
    border-radius: 20px;
    font-weight: bold;
    font-size: 25px;
  }

  .sub-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContainerImagem = styled.div`
  position: relative;
  left: 5%;

  figure {
    width: 355px;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ContainerLabel = styled.div`
  text-align: left;
  margin: 5px 0px;

  .input {
    display: flex;
    align-items: center;

    background-color: #d5d5d5;
    padding: 10px 5px;

    border-radius: 10px;
    input {
      padding-left: 5px;
      border: none;
      border-left: 1px solid #a7a7a7;
      background-color: #d5d5d5;
      width: 100%;
    }

    figure {
      width: 20px;
      height: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
