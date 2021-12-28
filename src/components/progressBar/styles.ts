import styled from "styled-components";

interface BarStyleProps {
  value: number;
  heigth: number;
  fontColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BarInfo = styled.div`
  width: 96%;
  height: 25px;
  bottom: 26px;
  color: #8e8e8e;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    border: none;
    font-size: 18px;
  }
`;

export const BarContainer = styled.div`
  width: 100%;
  background-color: #8e8e8e;
  border-radius: 14px;
`;

export const Bar = styled.div<BarStyleProps>`
  width: ${(props) => (props.value > 100 ? "100%" : `${props.value}%`)};
  background-color: ${(props) =>
    props.value < 10 ? "transparent" : "#ff8a00"};
  color: ${(props) => (props.value >= 10 ? props.fontColor : "transparent")};
  height: ${(props) => `${props.heigth}px`};
  border-radius: 14px;
  transition: width 1s;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    border: none;
    padding-right: ${(props) => (props.value >= 5 ? "6px" : "0px")};
    font-size: 12px;
    font-weight: 500;
  }

  @media (min-width: 640px) {
    color: ${(props) => (props.value >= 4 ? props.fontColor : "transparent")};
    background-color: ${(props) =>
      props.value < 4 ? "transparent" : "#ff8a00"};
  }
`;
