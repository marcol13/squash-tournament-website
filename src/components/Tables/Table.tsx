import tw from "tailwind-styled-components";
import { TableItem } from "./TableItem";

type Props = {
  info: { header: string; content: string }[];
  className?: string;
};

const InfoTableStyle = tw.table`
    table-auto
    text-left
    text-xl
    w-3/5
    mr-7
    text-slate-300
`;

export const Table = ({ info, className }: Props) => {
  return (
    <InfoTableStyle className={className}>
      {info.map((el) => (
        <TableItem header={el.header} content={el.content} />
      ))}
    </InfoTableStyle>
  );
};
