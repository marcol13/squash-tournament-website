import tw from "tailwind-styled-components";
import { Card } from "./../Card";
import { dateToString } from "./../../services/dateToString";

type Props = {
  tournaments: any[];
  className?: string;
};

const CardContainerStyle = tw.div`
    grid grid-cols-5 
    content-center 
    justify-center 
    items-center 
    gap-5
`;

export const CardGrid = ({ tournaments, className }: Props) => {
  return (
    <CardContainerStyle className={className}>
      {tournaments.map((el) => (
        <Card
          title={el.name}
          date={dateToString(el.date)}
          registered={el.count}
          maxRegistered={el.max_participants}
          minAge={el.min_age}
          maxAge={el.max_age}
          price={el.price}
          key={el.id}
          image={el.image}
          link={`/tournament/${el.id}`}
        />
      ))}
    </CardContainerStyle>
  );
};
