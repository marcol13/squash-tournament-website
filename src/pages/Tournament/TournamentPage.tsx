import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { InfoPage } from "./InfoPage";
import { Ladder } from "./Ladder";
import tw from "tailwind-styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Register } from "./Register";
import { LatLngTuple } from "leaflet";

const TitleDivStyle = tw.div`
    relative
    w-full
    h-[250px]
    flex
    items-center
    justify-center
    mb-5
    before:content-['']
    before:bg-tournament-placeholder
    before:absolute
    before:inset-0
    before:z-[-2]
    before:bg-center
    before:bg-cover
    before:rounded-sm
`;

const HeaderStyle = tw.h1`
    text-custom-white
    text-5xl
    relative
    py-10
    px-20
    bg-transparent
    before:content-['']
    before:block
    before:absolute
    before:inset-0
    before:z-n1
    before:bg-white/[0.31]
    before:rounded-2xl
    before:shadow-xl
    before:backdrop-blur
    before:border-1
    before:border-white/[0.1]
`;

export const TournamentPage = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [canRegister, setCanRegister] = useState(false);
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [name, setName] = useState("Nazwa turnieju");
  const [minAge, setMinAge] = useState(16);
  const [maxAge, setMaxAge] = useState(20);
  const [maxParticipants, setMaxParticipants] = useState(16);
  const [date, setDate] = useState(new Date());
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [prize, setPrize] = useState();
  const [coords, setCoords] = useState<LatLngTuple>([
    52.37647304910926, 16.894399306634543,
  ] as LatLngTuple);
  const [countParticipations, setCountParticipations] = useState(0);
  const [organizerName, setOrganizerName] = useState("");
  const [sponsorLogos, setSponsorLogos] = useState();

  const { tournamentId } = useParams();

  useEffect(() => {
    const config = {
      headers: { "auth-token": `${localStorage.getItem("token")}` },
    };

    axios
      .get(`http://localhost:5000/api/v1/tournament/${tournamentId}`, config)
      .then((res) => {
        if (res.data.status != 200) {
          throw new Error(res.data.error);
        }
        setName(res.data.name);
        setMinAge(res.data.minAge);
        setMaxAge(res.data.maxAge);
        setMaxParticipants(res.data.maxParticipants);
        setDate(res.data.date);
        setDeadlineDate(res.data.deadlineDate);
        setPrize(res.data.prize);
        if (res.data.placeX)
          setCoords([
            parseFloat(res.data.placeX),
            parseFloat(res.data.placeY),
          ] as LatLngTuple);
        setCountParticipations(res.data.count);
        setCanRegister(res.data.canRegister);
        setIsOrganizer(res.data.isOrganizer);
        setOrganizerName(res.data.organizer);
        setSponsorLogos(res.data.sponsorLogos);

        console.log(res);
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <TitleDivStyle>
        <HeaderStyle>{name}</HeaderStyle>
      </TitleDivStyle>
      <div className="flex justify-between mb-5">
        <div>
          <Button
            className="mr-2"
            onClick={() => {
              setSelectedOption(0);
            }}
            type="secondary"
          >
            Informacje
          </Button>
          <Button
            onClick={() => {
              setSelectedOption(1);
            }}
            type="secondary"
          >
            Drabinka
          </Button>
        </div>
        <div>
          {isOrganizer && (
            <Button
              onClick={() => {
                setSelectedOption(2);
              }}
              type="secondary"
            >
              ✏️ Edytuj
            </Button>
          )}
          {canRegister && (
            <Button
              onClick={() => {
                setSelectedOption(2);
              }}
              type="secondary"
            >
              ➕ Zapisz się
            </Button>
          )}
        </div>
      </div>
      {selectedOption == 1 ? (
        <Ladder />
      ) : selectedOption == 2 ? (
        <Register />
      ) : (
        <InfoPage
          minAge={minAge}
          maxAge={maxAge}
          maxParticipants={maxParticipants}
          date={date}
          deadlineDate={deadlineDate}
          prize={prize}
          coords={coords}
          countParticipations={countParticipations}
          organizer={organizerName}
          sponsorLogos={sponsorLogos}
        />
      )}
    </div>
  );
};
