import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { Button } from "../components/Button";

const ActionStyle = tw.p`
    mb-1
    underline
    cursor-pointer
`;

const InputStyle = tw(Input)`
    w-full
`;

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center text-custom-white">
      <div className="inline-block px-10 pt-10 pb-5 rounded-lg border-2 border-custom-white">
        <h1 className="text-3xl mb-5">Zaloguj się</h1>
        <div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="login">Login:</label>
            <InputStyle name="login" id="login" />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="password">Hasło:</label>
            <InputStyle type="password" name="password" id="password" />
          </div>
          <ActionStyle>Nie pamiętasz hasła? Kliknij aby zresetować</ActionStyle>
          <Link to="/register"><ActionStyle>Nie masz jeszcze konta? Zarejestruj się</ActionStyle></Link>
          <Button className="mt-5 w-full" onClick={() => {}}>
            Zaloguj się
          </Button>
        </div>
      </div>
    </div>
  );
};
