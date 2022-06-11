import tw from "tailwind-styled-components";
import { useState } from "react";
import { AddMarkerMap } from "../components/AddMarkerMap";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const FormColumnStyle = tw.div`
    grid 
    grid-cols-2 
    gap-y-3 
    text-center
    items-center
`;

export const NewTournamentPage = () => {
  let minDateInit = new Date().toISOString().split("T")[0];
  const [minDate, setMinDate] = useState(minDateInit);

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl text-custom-white mb-10">Stwórz turniej</h3>
      <form action="">
        <div className="grid grid-cols-2 w-full gap-5 justify-items-center text-custom-white">
          <FormColumnStyle>
            <label htmlFor="tournament"> Nazwa turnieju:</label>
            <Input className="ml-3" name="tournament" id="tournament" />
            <label htmlFor="min-age"> Wiek minimum:</label>
            <Input
              min="0"
              type="number"
              className="ml-3"
              name="min-age"
              id="min-age"
            />

            <label htmlFor="max-age"> Wiek maksimum:</label>

            <Input
              min="0"
              type="number"
              className="ml-3"
              name="max-age"
              id="max-age"
            />

            <label htmlFor="administrator"> Organizator:</label>
            <Input className="ml-3" name="administrator" id="administrator" />

            <label htmlFor="date"> Data wydarzenia:</label>
            <Input
              type="date"
              min={minDateInit}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMinDate(e.target.value)
              }
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
            />

            <label htmlFor="deadline"> Deadline zapisów:</label>
            <Input
              type="date"
              min={minDate}
              className="ml-3"
              name="deadline"
              id="deadline"
            />

            <label htmlFor="price"> Nagroda:</label>

            <Input
              min="0"
              type="number"
              className="ml-3"
              name="price"
              id="price"
            />

            <label htmlFor="logo"> Sponsorzy: </label>
            <Input
              type="file"
              className="ml-3"
              name="logo"
              id="logo"
              multiple
            />

            <label htmlFor="picture"> Obrazek: </label>
            <Input type="file" className="ml-3" name="picture" id="picture" />
          </FormColumnStyle>
          <AddMarkerMap className="w-[500px] h-[100%]" />
        </div>
        <div className="mt-10 flex justify-center">
          <Button className="w-[30%]" onClick={() => {}}>
            Stwórz turniej
          </Button>
        </div>
      </form>
    </div>
  );
};
