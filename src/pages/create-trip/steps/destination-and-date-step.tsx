import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
} from "lucide-react";
import React from "react";

type Props = {
  toggleGuestInput: () => void;
  isGuestInputOpen: boolean;
};

const DestinationAndDateStep: React.FC<Props> = ({
  toggleGuestInput,
  isGuestInputOpen,
}) => {
  return (
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
          onClick={toggleGuestInput}
          className="hover:bg-zinc-700 flex items-center gap-2 bg-zinc-800 min-w-fit text-zinc-200 rounded-lg px-5 py-2 font-medium"
        >
          Alterar local/data
          <Settings2Icon className="size-5" />
        </button>
      ) : (
        <button
          onClick={toggleGuestInput}
          className="hover:bg-lime-400 flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 min-w-fit font-medium"
        >
          Continuar
          <ArrowRightIcon className="size-5" />
        </button>
      )}
    </div>
  );
};

export default DestinationAndDateStep;
