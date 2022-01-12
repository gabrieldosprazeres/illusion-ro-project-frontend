import styled from "styled-components";

export const ContainerModal = styled.div`
  background-color: rgba(51, 51, 51, 0.15);
  box-shadow: 3px 2px 5px rgba(17, 17, 17, 0.55);
  backdrop-filter: blur(6px);

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
  background-color: #74db86;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 25px;
  padding: 10px 45px;
  z-index: 4;

  .closedModal {
    background-color: red;
    color: white;
    position: relative;

    top: 10%;
    left: 45%;
    padding: 5px 10px;
    margin: 0px;

    &:hover {
      filter: brightness(0.9);
      transition: 0.3s;
    }
  }

  h3 {
    color: white;
    font-size: 32px;
  }

  h4 {
    text-align: left;
    font-size: 26px;
  }

  .sub-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContainerImagem = styled.div`
  position: relative;
  left: 5vw;

  figure {
    width: 35vw;

    img {
      width: 35vw;
    }
  }
`;

export const ContainerDiscord = styled.div`
  position: relative;
  right: 35vw;

  figure {
    width: 5vw;

    img {
      width: 22vw;
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
