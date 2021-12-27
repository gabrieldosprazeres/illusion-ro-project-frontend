import { BarContainer, Bar, BarInfo, Container } from "./styles";

interface ProgressBarProps {
  currentValue?: number;
  maxValue?: number;
  initialValue?: number;
  heigth?: number;
  fontColor?: string;
}

export const ProgressBar = ({
  currentValue = 0,
  maxValue = 500,
  initialValue = 0,
  heigth = 25,
  fontColor = "#8e8e8e",
}: ProgressBarProps) => {
  const halfValue = parseInt((maxValue / 2).toFixed(0));
  let percent = parseInt(
    ((currentValue / (maxValue - initialValue)) * 100).toFixed(0)
  );

  if (percent > 100) {
    percent = 100;
  } else if (percent < 0) {
    percent = 0;
  }

  return (
    <Container>
      <BarInfo>
        <p>{initialValue}</p>
        <p>{halfValue}</p>
        <p>{maxValue}</p>
      </BarInfo>

      <BarContainer>
        <Bar value={percent} heigth={heigth} fontColor={fontColor}>
          <p>{percent}%</p>
        </Bar>
      </BarContainer>
    </Container>
  );
};
// export default ProgressBar;
