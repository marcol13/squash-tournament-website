import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const CardStyle = tw.div`
    w-[225px]
    h-[275px]
    shadow-lg
    flex
    flex-col
    items-center
    content-center
    bg-custom-white
    p-2
    rounded-sm
    text-custom-dark-gray
    cursor-pointer
`;

const CenterTableStyle = tw.div`
    flex
    items-center
    justify-center
    flex-col
    h-full
    w-full
`;

const TableInfoStyle = tw.table`
    w-full
    table-fixed
    py-0
`;

const CellInfoStyle = tw.td`
    inline-block
    text-left
    whitespace-nowrap
    text-ellipsis
    overflow-hidden
`;

type CardType = {
  title: string;
  image?: string;
  date: string;
  registered: number;
  maxRegistered: number;
  minAge: number;
  maxAge: number;
  price?: number;
  link: string;
};

export const Card = ({
  title,
  image = "/src/assets/img/tournament-card-placeholder.jpg",
  date,
  registered,
  maxRegistered,
  minAge,
  maxAge,
  price = 0,
  link,
}: CardType) => {
  if (!image) image = "/src/assets/img/tournament-card-placeholder.jpg";
  return (
    <Link to={link}>
      <CardStyle>
        <h3 className="text-lg font-semibold mb-3 text-center">{title}</h3>
        <img className="rounded-lg object-cover mb-3" src={image} />
        <CenterTableStyle>
          <TableInfoStyle>
            <tr>
              <CellInfoStyle className="w-3/5">📆 {date}</CellInfoStyle>
              <CellInfoStyle className="w-2/5">
                {registered < maxRegistered ? "✅" : "❌"} {registered}/
                {maxRegistered}
              </CellInfoStyle>
            </tr>
            <tr>
              <CellInfoStyle className="w-3/5">
                👴 {minAge}-{maxAge}
              </CellInfoStyle>
              <CellInfoStyle className="w-2/5">🏆 {price}zł</CellInfoStyle>
            </tr>
          </TableInfoStyle>
        </CenterTableStyle>
      </CardStyle>
    </Link>
  );
};
