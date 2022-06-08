import {Button} from "./Button"
import { Input } from "./Input"

export const Search = ({inputPlaceholder} : {inputPlaceholder?: string}) => {
    return(
        <div>
            <Input type="search" placeholder={inputPlaceholder ?? ""}/>
            <Button onClick={() => {}}>Wyszukaj</Button>
        </div>
    )
}