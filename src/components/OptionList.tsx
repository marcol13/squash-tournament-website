import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ListContainerStyle = tw.div`
    w-[225px]
    border-2
    border-slate-300
    border-solid
    rounded-lg
    p-5
    bg-custom-dark-gray
    z-[9999]
`;

const UlContainerStyle = tw.ul`
    text-center
    font-semibold
    text-custom-white
    tracking-wide
    list-none
`;

const ListElementStyle = tw.li`
    pb-2
    mx-5
    mb-2
`;

const SpanStyle = tw.span`
    cursor-pointer
`;

export const OptionList = ({ className }: { className?: string }) => {
  const navigate = useNavigate();

  return (
    <ListContainerStyle className={className}>
      <UlContainerStyle>
        <ListElementStyle className="border-b-[1px] border-solid border-slate-400">
          <Link to="/profile">
            <SpanStyle>Profil</SpanStyle>
          </Link>
        </ListElementStyle>
        <ListElementStyle className="border-b-[1px] border-solid border-slate-400">
          <Link to="/history">
            <SpanStyle>Historia</SpanStyle>
          </Link>
        </ListElementStyle>
        <ListElementStyle className="border-b-[1px] border-solid border-slate-400">
          <Link to="/new_tournament">
            <SpanStyle>Nowy turniej</SpanStyle>
          </Link>
        </ListElementStyle>
        <ListElementStyle className="mb-0 pb-0">
          <SpanStyle
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              navigate("/");
            }}
          >
            Wyloguj
          </SpanStyle>
        </ListElementStyle>
      </UlContainerStyle>
    </ListContainerStyle>
  );
};
