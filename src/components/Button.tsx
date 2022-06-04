import tw from "tailwind-styled-components";

const ButtomCustomStyle = tw.button`
  p-2
  text-custom-white
  shadow-md
  rounded-sm
`;

const ButtonStyle = tw(ButtomCustomStyle)`
    bg-blue-500
`;

const ButtonGradient = tw(ButtomCustomStyle)`
  border-[3px]
  border-transparent
  border-solid
  bg-clip-padding
  bg-custom-black
  relative
  after:content-['']
  after:rounded-sm
  after:absolute
  after:inset-0
  after:z-n1
  after:m-[-3px]
  after:bg-gradient-to-r from-custom-gradient-green to-custom-gradient-blue
`;

const variants = {
  primary: ButtonStyle,
  secondary: ButtonStyle,
  gradient: ButtonGradient,
};

type buttonType = {
  onClick: () => void;
  children: string;
  type?: "primary" | "secondary" | "gradient";
  className?: string;
};

export const Button = ({ onClick, children, type = "primary", className }: buttonType) => {
  const ButtonVariant = variants[type];

  return (
    <ButtonVariant onClick={onClick} className={className}>
      {children}
    </ButtonVariant>
  );
};
