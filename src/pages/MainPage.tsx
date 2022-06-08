import tw from "tailwind-styled-components";
import { Card } from "./../components/Card";
import { Search } from "./../components/Search";

const HeaderStyle = tw.h2`
    text-3xl
    text-custom-light-gray
    my-5
`;

const TournamentContainer = tw.div`
    grid
    grid-cols-5
    gap-y-4
`;

export const MainPage = () => {
  return (
    <div>
      <HeaderStyle>Ostatnio rozegrane</HeaderStyle>
      <TournamentContainer>
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
      </TournamentContainer>
      <div className="flex justify-between items-center my-5">
        <HeaderStyle>Zbliżające się turnieje</HeaderStyle>
        <Search inputPlaceholder="Nazwa turnieju"/>
      </div>
      <TournamentContainer>
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          city="Poznań"
          price={10}
          link="/tournament/1"
        />
      </TournamentContainer>
    </div>
  );
};
