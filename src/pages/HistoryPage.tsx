import tw from "tailwind-styled-components";
import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../components/Button";

const TournamentContainer = tw.div`
    grid
    grid-cols-5
    gap-4
`;

function datePipe(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
) {
  return new Date(date).toLocaleString("pl-PL", options);
}

export const HistoryPage = () => {
  const [tournaments, setTournaments] = useState<any[]>([]);

  useEffect(() => {
    const config = {
      headers: { "auth-token": `${localStorage.getItem("token")}` },
    };
    axios
      .get(`http://localhost:5000/api/v1/history_tournaments`, config)
      .then((res) => {
        if (res.data.status != 200) {
          throw new Error(res.data.error);
        }
        console.log(res.data);
        setTournaments(res.data.tournaments);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl mb-5 text-custom-white">Historia turniejów</h3>
      <TournamentContainer>
        {tournaments.map((el) => {
          return (
            <Card
              title={el.name}
              date={datePipe(el.date)}
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
    </div>
  );
};
