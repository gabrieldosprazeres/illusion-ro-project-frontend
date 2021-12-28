import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  max-width: 85vw;

  margin: 0 auto;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ContainerWrapeFlex = styled.div`

  margin: 20px;

    @media (min-width: 768px) {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

`;

export const ContainerFlex = styled.div`
  .person {
    width: 300px;
    height: 300px;
  }

  .status {
    width: 200px;
    height: 200px;
  }
  color: #808080;

  p {
    max-width: 350px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    text-align: left;

    h2 {
      font-size: 35px;
    }

    h3 {
      font-size: 25px;
    }

    p {
      font-size: 22px;
    }

    .status {
      width: 250px;
      height: 250px;
    }

    .person {
      width: 350px;
      height: 350px;
    }
  }
`;
