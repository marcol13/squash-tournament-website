import L, { Icon, icon, IconOptions, DivIcon } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";

const MyComponent = () => {
  const [coord, setPosition] = useState<[number, number]>();

  const removeMarker = (map: L.Map) => {
    map.eachLayer((layer: any) => {
      console.log(layer);
        if (layer.options && layer.options.pane === "markerPane") {
            map.removeLayer(layer);
        }
    });
  };

  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      if (coord) removeMarker(map);
      setPosition([lat, lng]);
      L.marker([lat, lng]).addTo(map);
    },
  });
  return null;
};

export const AddMarkerMap = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <MapContainer
        center={[52.409538, 16.931992]}
        zoom={10}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyComponent />
      </MapContainer>
    </div>
  );
};
