import { ArrowRightIcon, UserRoundPlusIcon } from "lucide-react";
import React from "react";

type Props = {
  toggleGuestsModal: () => void;
  emailsToInvite: string[];
  open: boolean;
  toggleConfirmModal: () => void;
};

const InviteGuestsStep: React.FC<Props> = ({
  toggleGuestsModal,
  emailsToInvite,
  toggleConfirmModal,
  open,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={toggleGuestsModal}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlusIcon className="size-5 text-zinc-400" />
        {emailsToInvite?.length ? (
          <span className="text-zinc-100 text-lg flex-1 text-start">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="w-full min-w-20 bg-transparent text-lg text-zinc-400 text-start">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <button
        onClick={toggleConfirmModal}
        className="hover:bg-lime-400 min-w-fit flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
      >
        Confirmar viagem
        <ArrowRightIcon className="size-5" />
      </button>
    </div>
  );
};

export default InviteGuestsStep;
