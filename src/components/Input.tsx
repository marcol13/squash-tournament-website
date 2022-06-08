import tw from "tailwind-styled-components";

const InputGradientStyle = tw.input`
    mr-5 
    p-2 
    rounded-sm 
    w-[300px] 
    focus:outline-none
    bg-transparent
    text-custom-white
    border-2
    border-solid
    border-custom-gradient-blue
`;

type InputType = {
    placeholder?: string, 
    name?: string, 
    id?: string,
    type?: "text" | "password" | "search",
    className?: string
}

export const Input = ({placeholder, name, id, type="text", className} : InputType) => {
  return (
    <>
      <InputGradientStyle className={className} type={type} placeholder={placeholder} name={name} id={id}/>
    </>
  );
};
