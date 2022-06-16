import tw from "tailwind-styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  SingleEliminationBracket,
  Match,
  MATCH_STATES,
  SVGViewer,
} from "@g-loot/react-tournament-brackets";
import axios from "axios";

export const Ladder = ({
  isOrganizer,
  canBeGenerated,
  isLadderGenerate,
}: {
  isOrganizer: boolean;
  canBeGenerated: boolean;
  isLadderGenerate: boolean;
}) => {
  const params = useParams();

  /*

  [
    {
      id: 260005,
      name: "Final - Match",
      nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "4", // Text for Round Header
      startTime: "",
      state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
      participants: [
        {
          id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc", // Unique identifier of any kind
          resultText: "WON", // Any string works
          isWinner: false,
          status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
          name: "giacomo123",
        },
        {
          id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
          resultText: null,
          isWinner: true,
          status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
          name: "Ant",
        },
      ],
    },
  ]
  */

  const [matches, setMatches] = useState([
    {
      id: 260005,
      name: "Final - Match",
      nextMatchId: null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
      tournamentRoundText: "4", // Text for Round Header
      startTime: "",
      state: "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
      participants: [
        {
          id: "c016cb2a-fdd9-4c40-a81f-0cc6bdf4b9cc", // Unique identifier of any kind
          resultText: "WON", // Any string works
          isWinner: false,
          status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
          name: "giacomo123",
        },
        {
          id: "9ea9ce1a-4794-4553-856c-9a3620c0531b",
          resultText: null,
          isWinner: true,
          status: null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
          name: "Ant",
        },
      ],
    },
  ]);

  useEffect(() => {
    sendData();
  }, []);

  const sendData = () => {
    const data = {
      tournament_id: params.tournamentId,
    };

    const config = {
      headers: { "auth-token": `${localStorage.getItem("token")}` },
    };

    axios
      .post("http://localhost:5000/api/v1/generate_ladder", data, config)
      .then((res) => {
        if (res.data.status != 200) {
          throw new Error(res.data.error);
        }
        console.log(res);
        setMatches(res.data.matches);
        console.log(res.data.matches);
        // setGetData(true)
        // location.reload();
        //   navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-custom-white flex flex-col justify-center items-center">
      <h3 className="text-center text-3xl mb-3">Drabinka</h3>

      {isOrganizer && canBeGenerated && !isLadderGenerate && (
        <Button
          className="w-[250px] mt-10"
          type="secondary"
          onClick={() => {
            sendData();
          }}
        >
          🪧 Generuj drabinkę
        </Button>
      )}
      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer width={500} height={500} {...props}>
            {children}
          </SVGViewer>
        )}
      />
      <div className="mt-10 w-1/3 justify-center items-center">
        {matches.map(
          (el, index) =>
            (el.participants[0].id != "" || el.participants[1].id != "") && (
              <div className="flex flex-col justify-center align-center">
                <div key={index} className="grid grid-cols-2  w-full">
                  <div className="flex flex-col justify-center items-center mb-5">
                    <span>
                      {el.participants[0].name != " "
                        ? el.participants[0].name
                        : "Pusty zawodnik"}
                    </span>
                    <Input type="number" min={0} className="w-[50px]" />
                  </div>
                  <div className="flex flex-col justify-center items-center mb-5">
                    <span>
                      {el.participants[1].name != " "
                        ? el.participants[1].name
                        : "Pusty zawodnik"}
                    </span>
                    <Input type="number" min={0} className="w-[50px]" />
                  </div>
                </div>
                <Button className="mb-10 w-[250px] self-center" onClick={() => {}}>Zatwierdź</Button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

/*
matches={[
          {
            id: 0,
            name: "Finał",
            nextMatchId: null,
            participants: [
              {
                id: "",
                resultText: "",
                isWinner: false,
                status: null,
                name: "",
              },
              {
                id: "",
                resultText: "",
                isWinner: false,
                status: null,
                name: "",
              },
            ],
            startTime: "",
            state: "DONE",
            tournamentRoundText: "4",
          },
          {
            id: 1,
            name: "Półfinał",
            nextMatchId: 1,
            participants: [
              {
                id: "",
                resultText: "",
                isWinner: false,
                status: null,
                name: "",
              },
              {
                id: "243bbcd5-b019-4709-a8f7-71915992a84b",
                resultText: "",
                isWinner: false,
                status: null,
                name: "Marcin Krueger",
              },
            ],
            startTime: "",
            state: "DONE",
            tournamentRoundText: "4",
          },
        ]}
        */
