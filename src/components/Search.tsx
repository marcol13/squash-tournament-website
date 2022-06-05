import {Button} from "./Button"
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
`

export const Search = () => {
    return(
        <div>
            <InputGradientStyle type="text" placeholder="Nazwa turnieju"/>
            <Button onClick={() => {}}>Wyszukaj</Button>
        </div>
    )
}