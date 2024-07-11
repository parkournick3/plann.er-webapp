import { AtSignIcon, PlusIcon, XIcon } from "lucide-react";
import React from "react";

type Props = {
  onClose: () => void;
  open: boolean;
  addEmailToInvite: (e: React.FormEvent<HTMLFormElement>) => void;
  emailsToInvite: string[];
  removeEmailToInvite: (email: string) => void;
};

const InviteGuestsModal: React.FC<Props> = ({
  onClose,
  open,
  emailsToInvite,
  removeEmailToInvite,
  addEmailToInvite,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="inset-0 fixed bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={onClose}>
              <XIcon className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados receberão e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 bg-zinc-800 rounded-md flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  onClick={() => removeEmailToInvite(email)}
                  type="button"
                >
                  <XIcon className="size-4" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="flex flex-1 gap-2 px-2 items-center">
            <AtSignIcon className="text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              type="email"
              name="email"
              placeholder="Digite o email do convidado"
            />
          </div>

          <button
            type="submit"
            className="hover:bg-lime-400 min-w-fit flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
          >
            Convidar
            <PlusIcon className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InviteGuestsModal;
