import styled from "styled-components";
import moreinformaton from "../../Assets/FrontEnd IllusionRO/SEPARADOS/KAFRA.png";

export const MoreInformationContainer = styled.div`
  max-width: 75vw;
  background-image: url(${moreinformaton});
  background-repeat: no-repeat;
  background-size: contain;
  margin: auto;
  background-position: center;
  height: 37vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .contentContainer {
    margin: auto;
    text-align: left;
    margin-left: 46%;
    font-size: 2vw;
    color: #484848;

    p a {
      color: black;
      text-decoration: none;
    }
  }

  .kafra {
    margin-top: 10px;
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    max-width: 60vw;

    .contentContainer {
      font-size: 1.7vw;
      margin-left: 45%;

      p a {
        font-size: 1.7vw;
      }
    }
  }
`;
