import tw from "tailwind-styled-components";

const ButtonCustomStyle = tw.button`
  p-2
  text-custom-white
  shadow-md
  rounded-sm
`;

const ButtonPrimary = tw(ButtonCustomStyle)`
    bg-blue-500
`;

const ButtonSecondary = tw(ButtonCustomStyle)`
    text-slate-300
    bg-custom-dark-gray
`

const ButtonGradient = tw(ButtonCustomStyle)`
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
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
  gradient: ButtonGradient,
};

type buttonType = {
  onClick: (_?: any) => void;
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
