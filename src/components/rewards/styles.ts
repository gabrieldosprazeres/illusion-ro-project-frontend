import styled from "styled-components";
import BackgroundImage from "../../Assets/FrontEnd IllusionRO/BG-FUNDO-FINAL.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;

  h2 {
    color: #484848;
    font-weight: 800;
    font-size: 34px;
    margin: 15px 0;
    max-width: 75vw;
  }

  > p {
    text-align: center;
    color: #8e8e8e;
    width: 90%;
    font-size: 20px;
    max-width: 75vw;
  }

  h3 {
    color: #484848;
    font-weight: 800;
    font-size: 22px;
    margin: 15px 0;
    max-width: 75vw;
  }

  .image {
    width: 75vw;
    img {
      width: 100%;
    }
  }

  .progress_bar_container {
    width: 75vw;
  }

  .chests {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 75vw;

    & :nth-child(5) {
      .reward_info {
        left: -105px;
        width: 250px;
      }
    }
  }

  button {
    background-color: #9ac74b;
    color: #ffffff;
    font-weight: 800;
    font-size: 22px;
    border-radius: 20px;
    padding: 14px 40px;
    margin: 40px 0;
  }
  .arrowup {
    width: 40px;
    margin: 40px 0;
  }

  .background {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    width: 100%;
    height: 500px;
  }
  @media (min-width: 800px) {
    .background {
      background-image: url(${BackgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
      margin-top: -25vh;
    }
  }

  @media (min-width: 1440px) {
    .image {
      img {
        margin-top: 5vh;
        width: 65%;
      }
    }

    h3 {
      font-size: 28px;
    }

    .chests {
      & :nth-child(5) {
        .reward_info {
          left: -230px;
          width: 500px;
        }
      }
    }
  }
`;
