import styled from "styled-components";

interface Iteste {
  color?: string;
}

export const ContainerClasse = styled.div`
  .title-classe {
    margin: 30px 0px;
    text-align: center;
  }
`;

export const ContainerIconsClasse = styled.div<Iteste>`
  max-width: 85vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 auto;

  figure {
    background-color: #808080;

    border-radius: 100%;

    margin: 5px;

    &:hover {
      cursor: pointer;
      background-color: #5049c1;

      transition: 0.3s;
    }

    img {
      width: 50px;
      height: 50px;
      margin: 0px 2px;
    }
  }

  @media (min-width: 425px) {
    figure {
      img {
        width: 70px;
        height: 70px;
      }
    }
  }

  @media (min-width: 768px) {
    figure {
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
`;
