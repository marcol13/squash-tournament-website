import { Button } from "../../components/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [accept, setAccept] = useState(false);

  const param = useParams();

  const sendData = () => {
    const data = {
      tournament_id: param.tournamentId,
    };

    const config = {
      headers: { "auth-token": `${localStorage.getItem("token")}` },
    };

    axios
      .post("http://localhost:5000/api/v1/participation", data, config)
      .then((res) => {
        if (res.data.status != 200) {
          throw new Error(res.data.error);
        }
        console.log(res);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-5 w-1/3 h-[400px] mb-5 overflow-y-scroll bg-custom-dark-gray">
        <h3 className="font-semibold text-center mb-3">REGULAMIN</h3>
        <p>1. Uczestnik zobowiązuje się stawić na podany mecz.</p>
        <p>2. Kolejny punkt regulaminu.</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
      </div>
      <div>
        <input
          className="h-1/1 mr-2"
          type="checkbox"
          id="accept"
          name="accept"
          checked={accept}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAccept((accept) => !accept);
          }}
        />
        <label className="text-red-700 font-semibold" htmlFor="accept">
          Zgadzam się ze wszystkimi punktami powyższego regulaminu
        </label>
      </div>
      <Button
        className="w-[150px] mt-5"
        onClick={() => {
          if (accept) {
            sendData();
          }
        }}
      >
        Zapisz się
      </Button>
    </div>
  );
};
