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

const InfoTableStyle = tw.table`
    table-auto
    text-left
    text-xl
    w-3/5
    mr-7
    text-slate-300
`;

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
};

export const InfoPage = ({
  minAge,
  maxAge,
  maxParticipants,
  date,
  deadlineDate,
  prize,
  coords,
  countParticipations
}: InfoPageType) => {
  function MyComponent() {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  return (
    <div>
      <div className="flex mb-10 items-end">
        <InfoTableStyle>
          <tr className="border-b-2 border-solid border-custom-dark-gray">
            <th>Przedział wiekowy:</th>
            <td>
              {minAge}-{maxAge}
            </td>
          </tr>
          <tr className="border-b-2 border-solid border-custom-dark-gray">
            <th className="pt-6 pb-1">Organizator:</th>
            <td className="pt-6 pb-1">11 Punkt</td>
          </tr>
          <tr className="border-b-2 border-solid border-custom-dark-gray">
            <th className="pt-6 pb-1">Ilość uczestników:</th>
            <td className="pt-6 pb-1">{countParticipations}/{maxParticipants}</td>
          </tr>
          <tr className="border-b-2 border-solid border-custom-dark-gray">
            <th className="pt-6 pb-1">Data zawodów:</th>
            <td className="pt-6 pb-1">{new Date(date).toLocaleString('pl-PL', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</td>
          </tr>
          <tr className="border-b-2 border-solid border-custom-dark-gray">
            <th className="pt-6 pb-1">Miejsce zawodów:</th>
            <td className="pt-6 pb-1">Górecka 108, 61-483 Poznań</td>
          </tr>
          <tr className="border-b-2 border-solid border-custom-dark-gray">
            <th className="pt-6 pb-1">Deadline zapisów:</th>
            <td className="pt-6 pb-1">{new Date(deadlineDate).toLocaleString('pl-PL', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</td>
          </tr>
          <tr className="border-b-2 border-solid border-custom-dark-gray">
            <th className="pt-6 pb-1">Nagroda:</th>
            <td className="pt-6 pb-1">{prize ? prize : 0}zł</td>
          </tr>
        </InfoTableStyle>
        <div className="h-[400px] w-2/5">
          <MapContainer
            center={coords}
            zoom={13}
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
        <h3 className="text-xl font-semibold text-center mb-5 text-slate-300">
          Sponsorzy:
        </h3>
        <div className="flex items-center justify-center gap-4">
          <LogoImageStyle src="/src/assets/img/wilson-logo.png" alt="" />
          <LogoImageStyle src="/src/assets/img/wilson-logo.png" alt="" />
          <LogoImageStyle src="/src/assets/img/wilson-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};
