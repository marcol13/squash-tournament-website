import { Button } from "../../components/Button";

export const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-5 w-1/3 h-[400px] mb-5 overflow-y-scroll bg-custom-dark-gray">
        <h3 className="font-semibold text-center mb-3">REGULAMIN</h3>
        <p>1. Uczestnik zobowiązuje się stawić na podany mecz.</p>
        <p>2. Kolejny punkt regulaminu.</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
        <p>3. Jeszcze jeden punkt regulaminu</p>
      </div>
      <div>
        <input
          className="h-1/1 mr-2"
          type="checkbox"
          id="accept"
          name="accept"
        />
        <label className="text-red-700 font-semibold" htmlFor="accept">
          Zgadzam się ze wszystkimi punktami powyższego regulaminu
        </label>
      </div>
      <Button className="w-[150px] mt-5" onClick={() => {}}>Zapisz się</Button>
    </div>
  );
};
