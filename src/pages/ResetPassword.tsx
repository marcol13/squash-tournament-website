import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import axios from "axios";
import tw from "tailwind-styled-components";

const InputStyle = tw(Input)`
  mr-0
`;

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
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
      email,
      password,
    };

    if (validateData(data)) {
      axios
        .post("http://localhost:5000/api/v1/reset_password", data)
        .then((res) => {
          if (res.data.status != 200) {
            throw new Error(res.data.error);
          }
          console.log(res)
        //   navigate("/");
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
        <h1 className="text-3xl mb-5">Zresetuj hasło</h1>
        <div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="email">Email:</label>
            <InputStyle
              name="email"
              id="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="password">Nowe hasło:</label>
            <InputStyle
              type="password"
              name="password"
              id="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <p className="w-[300px] text-center mt-5">Po potwierdzeniu formularza oczekuj maila z linkiem aktywacyjnym.</p>

          <Button className="w-full mt-5" onClick={sendData}>
            Zresetuj hasło
          </Button>
        </div>
      </div>
    </div>
  );
};
