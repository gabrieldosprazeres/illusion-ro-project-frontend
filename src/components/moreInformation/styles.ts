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
  }
`;
