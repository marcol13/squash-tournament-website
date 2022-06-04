import tw from "tailwind-styled-components";

const ButtonStyle = tw.button`
    bg-blue-500
    p-2
    text-custom-white
    shadow-md
    rounded-sm
`;



type buttonType = {
  onClick: () => void;
  children: string;
};

export const Button = ({ onClick, children }: buttonType) => {
  return (
    <ButtonStyle onClick={onClick} className="">
      {children}
    </ButtonStyle>
  );
};
