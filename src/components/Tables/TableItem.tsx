import tw from "tailwind-styled-components";

type Props = {
  header: string;
  content: string;
  className?: string;
};

const TabItemStyle = tw.tr`
    border-b-2 
    border-solid 
    border-custom-dark-gray
`;

export const TableItem = ({ header, content, className }: Props) => {
  return (
    <tbody>
      <TabItemStyle className={className}>
        <th>{header}</th>
        <td>{content}</td>
      </TabItemStyle>
    </tbody>
  );
};
