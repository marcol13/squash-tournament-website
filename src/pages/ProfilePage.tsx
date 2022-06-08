import tw from "tailwind-styled-components";
import { Card } from "../components/Card";

const ProfilePageStyle = tw.div`
    flex
    items-center
    justify-center
    flex-col
    text-custom-white
`;

export const ProfilePage = () => {
  return (
    <ProfilePageStyle>
      <img
        className="w-[128px] h-[128px] object-cover rounded"
        src="src/assets/img/user_128.png"
        alt=""
      />
      <div className="my-5 text-3xl">
        <span>Marcin</span> <span>Krueger</span>
      </div>
      <h3 className="text-xl mb-5">Statystyki:</h3>
      <table className="w-[600px] text-center table-fixed text-lg mb-5">
        <tr>
          <th>🥇 Wygrane turnieje</th>
          <td>1</td>
        </tr>
        <tr>
          <th>🏆 Ranking</th>
          <td>1</td>
        </tr>
        <tr>
          <th>🎾 Ilość rozegranych meczów</th>
          <td>1</td>
        </tr>
        <tr>
          <th>💯 Średnia ilość punktów na set</th>
          <td>1</td>
        </tr>
        <tr>
          <th>🎉 Wygrane/przegrane mecze</th>
          <td>1</td>
        </tr>
        <tr>
          <th>🎊 Wygrane/przegrane sety</th>
          <td>1</td>
        </tr>
      </table>
      <h3 className="text-xl mb-5">Nadchodzące turnieje:</h3>
      <div className="grid grid-cols-5 content-center justify-center items-center gap-5">
          <Card city="Poznań" date="10.06.2022" maxRegistered={20} link="tournament/1" registered={5} title="Turniej Marcina" price={200}/>
          <Card city="Poznań" date="10.06.2022" maxRegistered={20} link="tournament/1" registered={5} title="Turniej Marcina" price={200}/>
      </div>
    </ProfilePageStyle>
  );
};
