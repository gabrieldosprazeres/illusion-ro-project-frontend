import styled from "styled-components";
import BackgroundPresentation from "../../Assets/FrontEnd IllusionRO/SEPARADOS/backgroundPresentation.png";

export const ContainerPresentation = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 90vw;
  height: 60vw;

  @media (min-width: 1440px) {
    height: 40vw;
  }
`;

export const Background = styled.div`
  width: 100%;
  background-image: url(${BackgroundPresentation});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  .bubble {
    height: 20vw;
    width: 20vw;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4vw;

    h3 {
      margin-top: 10px;
      font-weight: 900;
    }
    span {
      font-size: 1.8vw;
      font-weight: 300;
    }
    h2 {
      text-transform: uppercase;
    }
  }
  .classInformation {
    color: #4e4e4e;
    background: white;
    position: relative;
    left: 73%;
    top: 4%;
    z-index: 3;
  }
  .translateInformation {
    background: black;
    color: white;
    position: relative;
    left: 66%;
    bottom: 7%;
    z-index: 2;
  }
  h2 {
    text-align: right;
    position: relative;
    -webkit-text-stroke: 0.6px;
    -webkit-text-stroke-color: black;
    font-size: 3vw;
    font-weight: 900;
    right: 7%;
    top: 8%;
    color: white;
  }

  @media (min-width: 1440px) {
    .bubble {
      height: 14vw;
      width: 14vw;
    }

    .classInformation h3 {
      font-size: 1.2vw;
    }

    .translateInformation h3 {
      font-size: 1.6vw;
    }

    .classInformation {
      left: 67%;
    }

    .translateInformation {
      left: 62%;
    }

    h2 {
      font-size: 2.5vw;
      right: 20%;
      top: 4%;
    }
  }
`;
