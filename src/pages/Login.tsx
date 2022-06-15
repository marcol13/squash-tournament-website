import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import axios from "axios";
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
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const validateData = (obj: object) => {
    for (const [_, value] of Object.entries(obj)) {
      if (value == "" || value == null) return false;
    }
    return true;
  };

  const sendData = () => {
    const data = {
      password,
      email: login,
    };

    // console.log({data})

    if (validateData(data)) {
      axios
        .post("http://localhost:5000/api/v1/login", data)
        .then((res) => {
          if (res.data.status != 200) {
            throw new Error(res.data.error);
          }
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("surname", res.data.surname);
          navigate("/");
        })
        .catch((err) => {
          console.log({ err });
        });
      // console.log("super");
    } else {
      console.log("Uzupełnij dane");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-custom-white">
      <div className="inline-block px-10 pt-10 pb-5 rounded-lg border-2 border-custom-white">
        <h1 className="text-3xl mb-5">Zaloguj się</h1>
        <div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="login">Email:</label>
            <InputStyle
              name="login"
              id="login"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLogin(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-1 mb-5">
            <label htmlFor="password">Hasło:</label>
            <InputStyle
              type="password"
              name="password"
              id="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Link to="/reset_password">
            <ActionStyle>
              Nie pamiętasz hasła? Kliknij aby zresetować
            </ActionStyle>
          </Link>
          <Link to="/register">
            <ActionStyle>Nie masz jeszcze konta? Zarejestruj się</ActionStyle>
          </Link>
          <Button className="mt-5 w-full" onClick={sendData}>
            Zaloguj się
          </Button>
        </div>
      </div>
    </div>
  );
};
