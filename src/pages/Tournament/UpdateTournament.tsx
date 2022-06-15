import tw from "tailwind-styled-components";
import { useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddMarkerMap } from "../../components/AddMarkerMap";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios";

type UpdateTournamentType = {
  nameArg: string;
  minAgeArg: number;
  maxAgeArg: number;
  eventDateArg: string;
  deadlineArg: string;
  prizeArg: number;
};

export const UpdateTournament = ({
  nameArg,
  minAgeArg,
  maxAgeArg,
  eventDateArg,
  deadlineArg,
  prizeArg,
}: UpdateTournamentType) => {
  let minDateInit = new Date().toISOString().split("T")[0];
  const [name, setName] = useState<string | undefined>(nameArg);
  const [minAge, setMinAge] = useState<number | undefined>(minAgeArg);
  const [maxAge, setMaxAge] = useState<number | undefined>(maxAgeArg);
  const [eventDate, setEventDate] = useState<string | undefined>(eventDateArg);
  const [deadline, setDeadline] = useState<string | undefined>(deadlineArg);
  const [prize, setPrize] = useState<number | undefined>(prizeArg);

  const [minDate, setMinDate] = useState(minDateInit);

  const params = useParams();

  const navigate = useNavigate();

  const validateData = (obj: object) => {
    for (const [_, value] of Object.entries(obj)) {
      if (value == "" || value == null || value == []) return false;
    }
    return true;
  };

  const sendData = () => {
    const data = {
      id: params.tournamentId,
      name,
      min_age: minAge,
      max_age: maxAge,
      date: eventDate,
      deadline_date: deadline,
      price: prize,
    };

    // console.log(data);

    const config = {
      headers: { "auth-token": `${localStorage.getItem("token")}` },
    };

    console.log(`abcd ${localStorage.getItem("token")}`);

    if (validateData(data)) {
      axios
        .put("http://localhost:5000/api/v1/edit_tournament", data, config)
        .then((res) => {
          if (res.data.status != 200) {
            throw new Error(res.data.error);
          }
          location.reload()
          //   navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log("super");
    } else {
      console.log("Uzupełnij dane");
    }

    console.log({ data });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl text-custom-white mb-10">Edytuj turniej</h3>
      <form action="">
        <div className="w-full text-custom-white">
          <div className="grid grid-cols-2 gap-5 justify-items-center text-center items-center">
            <label htmlFor="tournament"> Nazwa turnieju:</label>
            <Input
              className="ml-3"
              name="tournament"
              id="tournament"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <label htmlFor="min-age"> Wiek minimum:</label>
            <Input
              min="0"
              type="number"
              className="ml-3"
              name="min-age"
              id="min-age"
              value={minAge}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMinAge(parseInt(e.target.value))
              }
            />

            <label htmlFor="max-age"> Wiek maksimum:</label>

            <Input
              min="0"
              type="number"
              className="ml-3"
              name="max-age"
              id="max-age"
              value={maxAge}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMaxAge(parseInt(e.target.value))
              }
            />

            <label htmlFor="date"> Data wydarzenia:</label>
            <Input
              type="date"
              min={minDateInit}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMinDate(e.target.value);
                setEventDate(e.target.value);
              }}
              className="ml-3"
              name="date"
              id="date"
              value={eventDate}
            />

            <label htmlFor="deadline"> Deadline zapisów:</label>
            <Input
              type="date"
              max={minDate}
              min={minDateInit}
              className="ml-3"
              name="deadline"
              id="deadline"
              value={deadline}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDeadline(e.target.value)
              }
            />

            <label htmlFor="price"> Nagroda:</label>

            <Input
              min="0"
              type="number"
              className="ml-3"
              name="price"
              id="price"
              value={prize}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrize(parseInt(e.target.value))
              }
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            className="w-[30%]"
            onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              sendData();
            }}
          >
            Edytuj turniej
          </Button>
        </div>
      </form>
    </div>
  );
};
