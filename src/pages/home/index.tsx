import { Header } from "../../components/header";
import { Presentation } from "../../components/presentation";
import { MoreInformation } from "../../components/moreInformation";
import { ServerStatus } from "../../components/serverStatus";
import { ClasseContainer } from "../../components/classesContainer";
import { Rewards } from "../../components/rewards";

export const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <MoreInformation />
      <ServerStatus />
      <ClasseContainer />
      <Rewards />
    </>
  );
};
