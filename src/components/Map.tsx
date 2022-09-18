import L, { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import tw from "tailwind-styled-components";

type Props = {
  coords?: LatLngTuple;
  className?: string;
};

const MapConteinerStyle = tw.div`
    w-2/5
`;

export const Map = ({ coords, className }: Props) => {
  const center = coords ?? L.latLng(52.406376, 16.925167);

  function MyComponent() {
    const map = useMap();
    map.setView(center, map.getZoom());

    return null;
  }

  return (
    <MapConteinerStyle className={className}>
      <MapContainer
        center={center}
        zoom={17}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {coords && (
          <>
            <MyComponent />
            <Marker position={coords}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </MapConteinerStyle>
  );
};
