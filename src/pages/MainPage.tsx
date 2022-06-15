import tw from "tailwind-styled-components";
import { Card } from "./../components/Card";
import { Search } from "./../components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";

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
  const [nextTournaments, setNextTournaments] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/next_tournaments/${pageNum}`)
      .then((res) => {
        if (res.data.status != 200) {
          throw new Error(res.data.error);
        }
        console.log(res.data);
        setNextTournaments(res.data.tournaments);
        setMaxPage(res.data.all);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, [pageNum]);

  return (
    <div>
      <HeaderStyle>Ostatnio rozegrane</HeaderStyle>
      <TournamentContainer>
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          minAge={10}
          maxAge={55}
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          minAge={10}
          maxAge={55}
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          minAge={10}
          maxAge={55}
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          minAge={10}
          maxAge={55}
          price={10}
          link="/tournament/1"
        />
        <Card
          title="Turniej Junikowa"
          date="20.05.2022"
          registered={10}
          maxRegistered={10}
          minAge={10}
          maxAge={55}
          price={10}
          link="/tournament/2"
        />
      </TournamentContainer>
      <div className="flex justify-between items-center my-5">
        <HeaderStyle>Zbliżające się turnieje</HeaderStyle>
        <Search inputPlaceholder="Nazwa turnieju" />
      </div>
      <TournamentContainer>
        {nextTournaments.map((el) => {
          const date = new Date(el.date).toLocaleString("pl-PL", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          return (
            <Card
              title={el.name}
              date={date}
              registered={el.count}
              maxRegistered={el.max_participants}
              minAge={el.min_age}
              maxAge={el.max_age}
              price={el.price}
              key={el.id}
              image={el.image}
              link={`/tournament/${el.id}`}
            />
          );
        })}
      </TournamentContainer>
      <div className="mt-10 flex align-center justify-center gap-x-10">
        {pageNum > 0 && (
          <Button
            className="w-[250px]"
            onClick={() => {
              setPageNum((n) => n - 1);
            }}
          >
            Poprzednia
          </Button>
        )}
        {(pageNum + 1) * 10 < maxPage && (
          <Button
            className="w-[250px]"
            onClick={() => {
              setPageNum((n) => n + 1);
            }}
          >
            Następna
          </Button>
        )}
      </div>
    </div>
  );
};
