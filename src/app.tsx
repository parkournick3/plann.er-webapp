import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
  UserRoundPlusIcon,
} from "lucide-react";
import { useState } from "react";

const App = () => {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);

  const toggleGuestsInput = () => {
    setIsGuestInputOpen(!isGuestInputOpen);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col gap-3 items-center">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPinIcon className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                className="bg-transparent min-w-20 text-lg w-full placeholder-zinc-400 outline-none flex-1"
                type="text"
                placeholder="Para onde você vai?"
              />
            </div>

            <div className="flex items-center gap-2">
              <CalendarIcon className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                type="text"
                placeholder="Quando?"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestInputOpen ? (
              <button
                onClick={toggleGuestsInput}
                className="hover:bg-zinc-700 flex items-center gap-2 bg-zinc-800 min-w-fit text-zinc-200 rounded-lg px-5 py-2 font-medium"
              >
                Alterar local/data
                <Settings2Icon className="size-5" />
              </button>
            ) : (
              <button
                onClick={toggleGuestsInput}
                className="hover:bg-lime-400 flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 min-w-fit font-medium"
              >
                Continuar
                <ArrowRightIcon className="size-5" />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlusIcon className="size-5 text-zinc-400" />
                <input
                  className="w-full min-w-20 bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  type="text"
                  placeholder="Quem estará na viagem?"
                />
              </div>

              <div className="w-px h-6 bg-zinc-800" />

              <button className="hover:bg-lime-400 min-w-fit flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium">
                Confirmar viagem
                <ArrowRightIcon className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default App;
