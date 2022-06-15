import tw from "tailwind-styled-components";
import { Card } from "../components/Card";
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
        <span>{localStorage.getItem("name")} {localStorage.getItem("surname")}</span>
      </div>
      <h3 className="text-xl mb-5">Statystyki:</h3>
      <table className="w-[600px] text-center table-fixed text-lg mb-5">
        <tr>
          <th>🥇 Wygrane turnieje</th>
          <td>1</td>
        </tr>
        <tr>
          <th>🏆 Ranking</th>
          <td>1</td>
        </tr>
        <tr>
          <th>🎾 Ilość rozegranych meczów</th>
          <td>1</td>
        </tr>
        <tr>
          <th>💯 Średnia ilość punktów na set</th>
          <td>1</td>
        </tr>
        <tr>
          <th>🎉 Wygrane/przegrane mecze</th>
          <td>1</td>
        </tr>
        <tr>
          <th>🎊 Wygrane/przegrane sety</th>
          <td>1</td>
        </tr>
      </table>
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
