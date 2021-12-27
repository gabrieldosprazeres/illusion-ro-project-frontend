import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  font-size: 2.2vw;
  margin-top: 20px;

  ul {
    margin: 0;
    padding: 0;
    text-align: left;
  }

  li {
    list-style: none;
    margin: 10px 0 10px 0;
  }

  .grifoImg figure {
    margin: 0;
    width: 35vw;
  }

  .grifoImg figure img {
    width: 100%;
  }

  .infoServer .listInfo {
    margin-left: 20px;

    h1 {
      font-weight: 400;
    }

    sup {
      font-weight: bold;
      color: orange;
      font-size: 1vw;
    }
  }
`;
