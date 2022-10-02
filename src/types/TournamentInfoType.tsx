import { LatLngTuple } from "leaflet";

type TournamentInfoType = {
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

export default TournamentInfoType;