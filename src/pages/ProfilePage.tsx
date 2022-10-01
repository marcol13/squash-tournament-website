import tw from "tailwind-styled-components";
import { Card } from "../components/Card";
import { Table } from "../components/Tables/Table";
import { useState, useEffect } from "react";
import axios from "axios";

const ProfilePageStyle = tw.div`
    flex
    items-center
    justify-center
    flex-col
    text-custom-white
`;

export const ProfilePage = () => {
  const [tournaments, setTournaments] = useState<any[]>([]);

  const userStats = [
    { header: "🥇 Wygrane turnieje", content: "1" },
    { header: "🏆 Ranking", content: "1" },
    { header: "🎾 Ilość rozegranych meczów", content: "1" },
    { header: "💯 Średnia ilość punktów na set", content: "1" },
    { header: "🎉 Wygrane/przegrane mecze", content: "1/1" },
    { header: "🎊 Wygrane/przegrane sety", content: "1/1" },
  ];

  useEffect(() => {
    const config = {
      headers: { "auth-token": `${localStorage.getItem("token")}` },
    };
    axios
      .get(`http://localhost:5000/api/v1/upcoming_tournaments`, config)
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
    <ProfilePageStyle>
      <img
        className="w-[128px] h-[128px] object-cover rounded"
        src="src/assets/img/user_128.png"
        alt=""
      />
      <div className="my-5 text-3xl">
        <span>
          {localStorage.getItem("name")} {localStorage.getItem("surname")}
        </span>
      </div>
      <h3 className="text-xl mb-5">Statystyki:</h3>
      <Table
        info={userStats}
        className="w-[600px] text-center table-fixed text-lg mb-5"
      />
      <h3 className="text-xl mb-5">Nadchodzące turnieje:</h3>
      <div className="grid grid-cols-5 content-center justify-center items-center gap-5">
        {tournaments.map((el) => {
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
      </div>
    </ProfilePageStyle>
  );
};
