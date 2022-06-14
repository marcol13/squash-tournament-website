import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";
import tw from "tailwind-styled-components";

const InputStyle = tw(Input)`
  mr-0
`;

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate("/")
    }
  }, [])

  const validateData = (obj: object) => {
    for (const [_, value] of Object.entries(obj)) {
      if (value == "" || value == null) return false;
    }
    return true;
  };

  const sendData = () => {
    const data = {
      name,
      surname,
      email,
      password,
      born_date: date,
    };

    if (validateData(data)) {
      axios
        .post("http://localhost:5000/api/v1/register", data)
        .then((res) => {
          if (res.data.status != 200) {
            throw new Error(res.data.error);
          }
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log("super");
    } else {
      console.log("Uzupełnij dane");
    }

    // console.log({ data });
  };

  return (
    <div className="flex flex-col items-center justify-center text-custom-white">
      <div className="inline-block px-10 pt-10 pb-5 rounded-lg border-2 border-custom-white">
        <h1 className="text-3xl mb-5">Zarejestruj się</h1>
        <div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="name">Imię:</label>
            <InputStyle
              name="name"
              id="name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="surname">Nazwisko:</label>
            <InputStyle
              name="surname"
              id="surname"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSurname(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="email">E-mail:</label>
            <InputStyle
              name="email"
              id="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
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
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="birth_date">Data urodzenia:</label>
            <InputStyle
              type="date"
              name="birth_date"
              id="birth_date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDate(e.target.value)
              }
            />
          </div>
          <Button className="w-full mt-5" onClick={sendData}>
            Zarejestruj się
          </Button>
        </div>
      </div>
    </div>
  );
};
