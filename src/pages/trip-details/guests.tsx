import { CircleDashedIcon, UserCogIcon } from "lucide-react";

const Guests: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 w-full">
            <span className="block font-medium text-zinc-100">
              Reserva do airbb
            </span>

            <span className="block text-xs text-zinc-400 truncate">
              nicolasalexandre0001@gmail.com
            </span>
          </div>
          <CircleDashedIcon className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 w-full">
            <span className="block font-medium text-zinc-100">
              Reserva do airbb
            </span>

            <span className="block text-xs text-zinc-400 truncate">
              nicolasalexandre0001@gmail.com
            </span>
          </div>
          <CircleDashedIcon className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <button className="hover:bg-zinc-700 flex items-center gap-2 bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 py-2 font-medium">
        <UserCogIcon className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
};

export default Guests;
