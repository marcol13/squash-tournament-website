import tw from "tailwind-styled-components";
import { Card } from "./../components/Card";
import { Search } from "./../components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

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
  const [pastTournaments, setPastTournaments] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [searchAccepted, setSearchAccepted] = useState("");

  useEffect(() => {
    const addition = searchAccepted != "" ? `/?search=${searchAccepted}` : ""
    axios
      .get(`http://localhost:5000/api/v1/next_tournaments/${pageNum}${addition}`)
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
  }, [pageNum, searchAccepted]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/past_tournaments`)
      .then((res) => {
        if (res.data.status != 200) {
          throw new Error(res.data.error);
        }
        console.log(res.data);
        setPastTournaments(res.data.tournaments);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div>
      <HeaderStyle>Ostatnio rozegrane</HeaderStyle>
      <TournamentContainer>
        {pastTournaments.map((el) => {
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
      <div className="flex justify-between items-center my-5">
        <HeaderStyle>Zbliżające się turnieje</HeaderStyle>
        <div>
          <Input
            type="search"
            placeholder={"Wyszukaj turniej"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value)}
          />
          <Button onClick={() => {setSearchAccepted(searchString)}}>Wyszukaj</Button>
        </div>
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
