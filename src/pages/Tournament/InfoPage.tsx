import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import tw from "tailwind-styled-components";
import { LatLngTuple } from "leaflet";
import { Table } from "../../components/Tables/Table";
import { dateToString } from "./../../functions/dateToString";

const LogoImageStyle = tw.img`
    max-h-[100px]
`;

type InfoPageType = {
  minAge: number;
  maxAge: number;
  maxParticipants: number;
  date: Date;
  deadlineDate: Date;
  prize?: number;
  coords: LatLngTuple;
  countParticipations: number;
  organizer: string;
  sponsorLogos: string[];
  place: string;
};

export const InfoPage = ({
  minAge,
  maxAge,
  maxParticipants,
  date,
  deadlineDate,
  prize,
  coords,
  countParticipations,
  organizer,
  sponsorLogos,
  place,
}: InfoPageType) => {
  function MyComponent() {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  const dateSettings = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;

  const info = [
    {
      header: "Przedział wiekowy:",
      content: `${minAge}-${maxAge}`,
    },
    {
      header: "Organizator:",
      content: organizer,
    },
    {
      header: "Ilość uczestników:",
      content: `${countParticipations}/${maxParticipants}`,
    },
    {
      header: "Data zawodów:",
      content: dateToString(date, dateSettings),
    },
    {
      header: "Miejsce zawodów:",
      content: place
    },
    {
      header: "Deadline zapisów:",
      content: dateToString(deadlineDate, dateSettings)
    },
    {
      header: "Nagroda",
      content: `${prize ? prize : 0}zł`
    }
  ];

  return (
    <div>
      <div className="flex mb-10 items-end">
        <Table info={info} className="h-[400px]"/>
        <div className="h-[400px] w-2/5">
          <MapContainer
            center={coords}
            zoom={17}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <MyComponent />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coords}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div>
        {sponsorLogos.length > 0 && (
          <h3 className="text-xl font-semibold text-center mb-5 text-slate-300">
            Sponsorzy:
          </h3>
        )}

        <div className="flex items-center justify-center gap-4">
          {sponsorLogos?.map((el, index) => {
            return <LogoImageStyle src={el} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
