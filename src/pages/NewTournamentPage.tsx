import tw from "tailwind-styled-components";
import { useState, useCallback } from "react";
import { AddMarkerMap } from "../components/AddMarkerMap";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";

const FormColumnStyle = tw.div`
    grid 
    grid-cols-2 
    gap-y-3 
    text-center
    items-center
`;

export const NewTournamentPage = () => {
  let minDateInit = new Date().toISOString().split("T")[0];
  const [name, setName] = useState<string | undefined>();
  const [minAge, setMinAge] = useState<number | undefined>();
  const [maxAge, setMaxAge] = useState<number | undefined>();
  const [organizer, setOrganizer] = useState<string | undefined>();
  const [eventDate, setEventDate] = useState<string | undefined>();
  const [maxSpots, setMaxSpots] = useState<number | undefined>();
  const [deadline, setDeadline] = useState<string | undefined>();
  const [prize, setPrize] = useState<number | undefined>(0);
  const [sponsors, setSponsors] = useState<string[]>([]);
  const [image, setImage] = useState<string[] | undefined>();
  const [coords, setCoords] = useState<[number, number]>();

  const [minDate, setMinDate] = useState(minDateInit);

  const coordsCallback = useCallback((coords: [number, number]) => {
    setCoords(coords);
  }, []);

  const handleImageLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    let result: string[] = [];
    const size = files?.length;
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (files !== null) {
      for (let i = 0; i < size!; i++) {
        const temp = files.item(i);
        if (temp && allowedTypes.includes(temp.type)) {
          let reader = new FileReader();
          reader.onloadend = () => {
            result.push(reader.result! as string);
          };
          reader.readAsDataURL(temp);
        } else {
          console.log("wrong type");
        }
      }
    }
    return result;
  };

  const validateData = (obj: object) => {
    const mandatoryKeys = [
      "name",
      "min_age",
      "max_age",
      "date",
      "max_participants",
      "deadline_date",
    ];
    for (const [key, value] of Object.entries(obj)) {
      if (
        mandatoryKeys.includes(key) &&
        (value == "" || value == null || value == [])
      )
        return false;
    }
    return true;
  };

  const sendData = () => {
    const data = {
      name,
      min_age: minAge,
      max_age: maxAge,
      organizer,
      date: eventDate,
      max_participants: maxSpots,
      deadline_date: deadline,
      price: prize,
      sponsors: sponsors,
      image: image,
      place_x: coords !== undefined ? coords[0].toString() : null,
      place_y: coords !== undefined ? coords[1].toString() : null,
    };

    // console.log(data);

    const config = {
      headers: { "auth-token": `${localStorage.getItem("token")}` },
    };

    console.log(`abcd ${localStorage.getItem("token")}`)

    if (validateData(data)) {
      axios
        .post("http://localhost:5000/api/v1/add_tournament", data, config)
        .then((res) => {
          console.log(res);
          if (res.data.status != 200) {
            throw new Error(res.data.error);
          }
          // navigate("/");
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
      <h3 className="text-3xl text-custom-white mb-10">Stwórz turniej</h3>
      <form action="">
        <div className="grid grid-cols-2 w-full gap-5 justify-items-center text-custom-white">
          <FormColumnStyle>
            <label htmlFor="tournament"> Nazwa turnieju:</label>
            <Input
              className="ml-3"
              name="tournament"
              id="tournament"
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMaxAge(parseInt(e.target.value))
              }
            />

            <label htmlFor="administrator"> Organizator:</label>
            <Input
              className="ml-3"
              name="administrator"
              id="administrator"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setOrganizer(e.target.value)
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
            />

            <label htmlFor="participants"> Maksymalnie miejsc:</label>
            <Input
              type="number"
              min="2"
              className="ml-3"
              name="participants"
              id="participants"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMaxSpots(parseInt(e.target.value))
              }
            />

            <label htmlFor="deadline"> Deadline zapisów:</label>
            <Input
              type="date"
              max={minDate}
              min={minDateInit}
              className="ml-3"
              name="deadline"
              id="deadline"
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrize(parseInt(e.target.value))
              }
            />

            <label htmlFor="logo"> Sponsorzy: </label>
            <Input
              type="file"
              className="ml-3"
              name="logo"
              id="logo"
              multiple
              accept="image/png, image/jpeg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSponsors(handleImageLoad(e));
              }}
            />

            <label htmlFor="picture"> Obrazek: </label>
            <Input
              type="file"
              className="ml-3"
              name="picture"
              id="picture"
              accept="image/png, image/jpeg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setImage(handleImageLoad(e));
                console.log(image);
              }}
            />
          </FormColumnStyle>
          <AddMarkerMap
            className="w-[500px] h-[100%]"
            parrentCallback={coordsCallback}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            className="w-[30%]"
            onClick={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              sendData();
            }}
          >
            Stwórz turniej
          </Button>
        </div>
      </form>
    </div>
  );
};
