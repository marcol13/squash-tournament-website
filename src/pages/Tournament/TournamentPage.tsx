import { Button } from "../../components/Button";
import { InfoPage } from "./InfoPage";
import tw from "tailwind-styled-components";

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
  return (
    <div>
      <TitleDivStyle>
        <HeaderStyle>Turniej Junikowa</HeaderStyle>
      </TitleDivStyle>
      <div className="flex justify-between mb-5">
        <div>
          <Button className="mr-2" onClick={() => {}} type="secondary">
            Informacje
          </Button>
          <Button onClick={() => {}} type="secondary">
            Drabinka
          </Button>
        </div>
        <Button onClick={() => {}} type="secondary">
          ➕ Zapisz się
        </Button>
      </div>
      <InfoPage />
    </div>
  );
};
