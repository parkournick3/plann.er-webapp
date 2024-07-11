import { ArrowRightIcon, MailIcon, UserIcon, XIcon } from "lucide-react";
import React from "react";

type Props = {
  onClose: () => void;
  open: boolean;
  createTrip: (e: React.FormEvent<HTMLFormElement>) => void;
  setOwnerEmail: (value: string) => void;
  setOwnerName: (value: string) => void;
  loading: boolean;
};

const ConfirmTripModal: React.FC<Props> = ({
  onClose,
  open,
  createTrip,
  setOwnerName,
  setOwnerEmail,
  loading,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="inset-0 fixed bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={onClose}>
              <XIcon className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <strong className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </strong>{" "}
            nas datas de{" "}
            <strong className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024
            </strong>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex flex-1 gap-2 px-5 items-center h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
            <UserIcon className="text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              type="text"
              onChange={(e) => {
                setOwnerName(e.target.value);
              }}
              name="name"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="flex flex-1 gap-2 px-5 items-center h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
            <MailIcon className="text-zinc-400" />
            <input
              onChange={(e) => {
                setOwnerEmail(e.target.value);
              }}
              className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              type="text"
              name="email"
              placeholder="Seu email pessoal"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="hover:bg-lime-400 w-full h-11 justify-center flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
          >
            {loading ? "Carregando..." : "Confirmar criação da viagem"}
            {!loading && <ArrowRightIcon className="size-5" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmTripModal;
