import { useState, useEffect } from "react";
import axios from "axios";
import { CardGrid } from "../components/CardGrid/CardGrid";

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
      <CardGrid tournaments={tournaments} />
    </div>
  );
};
