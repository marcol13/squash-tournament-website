import tw from "tailwind-styled-components";
import { Card } from "../components/Card";

const TournamentContainer = tw.div`
    grid
    grid-cols-5
    gap-4
`;

export const HistoryPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl mb-5 text-custom-white">Historia turniejów</h3>
      <TournamentContainer>
        <Card
          city="Poznań"
          date="10.06.2022"
          maxRegistered={20}
          link="tournament/1"
          registered={5}
          title="Turniej Marcina"
          price={200}
        />
        <Card
          city="Poznań"
          date="10.06.2022"
          maxRegistered={20}
          link="tournament/1"
          registered={5}
          title="Turniej Marcina"
          price={200}
        />
        <Card
          city="Poznań"
          date="10.06.2022"
          maxRegistered={20}
          link="tournament/1"
          registered={5}
          title="Turniej Marcina"
          price={200}
        />
        <Card
          city="Poznań"
          date="10.06.2022"
          maxRegistered={20}
          link="tournament/1"
          registered={5}
          title="Turniej Marcina"
          price={200}
        />
        <Card
          city="Poznań"
          date="10.06.2022"
          maxRegistered={20}
          link="tournament/1"
          registered={5}
          title="Turniej Marcina"
          price={200}
        />
        <Card
          city="Poznań"
          date="10.06.2022"
          maxRegistered={20}
          link="tournament/1"
          registered={5}
          title="Turniej Marcina"
          price={200}
        />
        <Card
          city="Poznań"
          date="10.06.2022"
          maxRegistered={20}
          link="tournament/1"
          registered={5}
          title="Turniej Marcina"
          price={200}
        />
        <Card
          city="Poznań"
          date="10.06.2022"
          maxRegistered={20}
          link="tournament/1"
          registered={5}
          title="Turniej Marcina"
          price={200}
        />
      </TournamentContainer>
    </div>
  );
};
