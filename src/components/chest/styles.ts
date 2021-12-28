import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 120px;

  .reward_info {
    display: none;
  }

  &:hover {
    .reward_info {
      display: block;
      width: 200px;
      position: absolute;
      bottom: 70px;
      left: -26px;
    }
  }

  img {
    width: 100%;
  }
`;
