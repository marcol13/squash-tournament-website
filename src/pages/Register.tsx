import { Input } from "../components/Input";

export const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center text-custom-white">
      <div className="inline-block px-10 pt-10 pb-5 rounded-lg border-2 border-custom-white">
        <h1 className="text-3xl mb-5">Zarejestruj się</h1>
        <div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="name">Imię:</label>
            <Input name="name" id="name" />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="surname">Nazwisko:</label>
            <Input name="surname" id="surname" />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="email">E-mail:</label>
            <Input name="email" id="email" />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="email2">Powtórz e-mail:</label>
            <Input name="email2" id="email2" />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <label htmlFor="password">Hasło:</label>
            <Input type="password" name="password" id="password" />
          </div>
        </div>
      </div>
    </div>
  );
};
