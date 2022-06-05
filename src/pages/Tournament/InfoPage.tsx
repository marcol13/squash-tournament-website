import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import tw from "tailwind-styled-components";

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

export const InfoPage = () => {

    return(
        <div>
        <div className="flex mb-10 items-end">
          <InfoTableStyle>
            <tr className="border-b-2 border-solid border-custom-dark-gray">
              <th>Przedział wiekowy:</th>
              <td>18-26</td>
            </tr>
            <tr className="border-b-2 border-solid border-custom-dark-gray">
              <th className="pt-6 pb-1">Organizator:</th>
              <td className="pt-6 pb-1">11 Punkt</td>
            </tr>
            <tr className="border-b-2 border-solid border-custom-dark-gray">
              <th className="pt-6 pb-1">Ilość uczestników</th>
              <td className="pt-6 pb-1">10/20</td>
            </tr>
            <tr className="border-b-2 border-solid border-custom-dark-gray">
              <th className="pt-6 pb-1">Data zawodów:</th>
              <td className="pt-6 pb-1">22.06.2022</td>
            </tr>
            <tr className="border-b-2 border-solid border-custom-dark-gray">
              <th className="pt-6 pb-1">Miejsce zawodów:</th>
              <td className="pt-6 pb-1">Górecka 108, 61-483 Poznań</td>
            </tr>
            <tr className="border-b-2 border-solid border-custom-dark-gray">
              <th className="pt-6 pb-1">Deadline zapisów:</th>
              <td className="pt-6 pb-1">20.06.2022</td>
            </tr>
            <tr className="border-b-2 border-solid border-custom-dark-gray">
              <th className="pt-6 pb-1">Nagroda:</th>
              <td className="pt-6 pb-1">100zł</td>
            </tr>
          </InfoTableStyle>
          <div className="h-[400px] w-2/5">
            <MapContainer
              center={[52.37647304910926, 16.894399306634543]}
              zoom={17}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[52.37647304910926, 16.894399306634543]}>
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
            <LogoImageStyle src="src/assets/img/wilson-logo.png" alt="" />
            <LogoImageStyle src="src/assets/img/wilson-logo.png" alt="" />
            <LogoImageStyle src="src/assets/img/wilson-logo.png" alt="" />
          </div>
        </div>
      </div>
    )
}