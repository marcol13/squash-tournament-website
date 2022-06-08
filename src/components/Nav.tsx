import { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const NavStyle = tw.nav`
    text-custom-white
    py-2
    px-3
    flex
    justify-between
    cursor-pointer
`;

const ImgLogoStyle = tw.img`
    object-cover 
    h-[50px]
    w-[50px]
    invert-[.9]
`;

const SpanLogoStyle = tw.span`
    text-4xl
    font-advent
    ml-2
`;

const SpanUserStyle = tw.span`
    text-xl
    mr-4
`;

const ImgUserStyle = tw.img`
    h-[50px]
    w-[50px]
`;

export const Nav = () => {
  const [isLogged, setLogged] = useState(false);

  return (
    <NavStyle>
      <Link to="/">
        <div className="flex items-center justify-start">
          <ImgLogoStyle src="src/assets/img/player-logo.svg" />
          <SpanLogoStyle>Squash tournament generator</SpanLogoStyle>
        </div>
      </Link>
      {isLogged && (
        <div className="flex items-center justify-end">
          <SpanUserStyle>Cześć Marcin!</SpanUserStyle>
          <ImgUserStyle src="src/assets/img/user.png" />
        </div>
      )}
      {!isLogged && (
        <div>
          <Link to="/login">
            <Button
              onClick={() => setLogged((state) => !state)}
              type="gradient"
              className="mx-2"
            >
              Zaloguj się
            </Button>
          </Link>

          <Link to="/register">
            <Button
              onClick={() => setLogged((state) => !state)}
              type="gradient"
            >
              Zarejestruj się
            </Button>
          </Link>
        </div>
      )}
    </NavStyle>
  );
};
