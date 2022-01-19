import { Container } from "./styles";
import OpenChest from "../../Assets/FrontEnd IllusionRO/reward/BAU-ABERTO.png";
import ClosedChest from "../../Assets/FrontEnd IllusionRO/reward/BAU-FECHADO.png";
import ClosedReward_1 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 01/RECOMPENSA-01-PEB.png";
import OpenReward_1 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 01/RECOMPENSA-01.png";
import ClosedReward_2 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 02/RECOMPENSA-02-PEB.png";
import OpenReward_2 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 02/RECOMPENSA-02.png";
import ClosedReward_3 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 03/RECOMPENSA-03-PEB.png";
import OpenReward_3 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 03/RECOMPENSA-03.png";
import ClosedReward_4 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 04/RECOMPENSA-04-PEB.png";
import OpenReward_4 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 04/RECOMPENSA-04.png";
import ClosedReward_5 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 05/RECOMPENSA-05-PEB.png";
import OpenReward_5 from "../../Assets/FrontEnd IllusionRO/reward/REWARD 05/RECOMPENSA-05.png";

interface chestProps {
  currentValue: number;
  index: number;
}

export const Chest = ({ currentValue = 0, index }: chestProps) => {
  type Value = {
    [key: number]: number;
  };

  const values: Value = {
    1: 200,
    2: 400,
    3: 600,
    4: 800,
    5: 1000,
  };

  type RewardsProp = {
    [key: number]: string;
  };
  const openRewards: RewardsProp = {
    1: OpenReward_1,
    2: OpenReward_2,
    3: OpenReward_3,
    4: OpenReward_4,
    5: OpenReward_5,
  };
  const closedRewards: RewardsProp = {
    1: ClosedReward_1,
    2: ClosedReward_2,
    3: ClosedReward_3,
    4: ClosedReward_4,
    5: ClosedReward_5,
  };

  return (
    <Container>
      <div className="reward_info">
        <img
          src={
            currentValue >= values[index]
              ? openRewards[index]
              : closedRewards[index]
          }
          alt=""
        />
      </div>
      <img
        src={currentValue >= values[index] ? OpenChest : ClosedChest}
        alt=""
      />
    </Container>
  );
};
