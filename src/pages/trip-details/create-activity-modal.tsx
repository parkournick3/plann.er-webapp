import { ArrowRightIcon, CalendarIcon, TagIcon, XIcon } from "lucide-react";
import React from "react";

type Props = {
  onClose: () => void;
  open: boolean;
  createActivity: (e: React.FormEvent<HTMLFormElement>) => void;
};

const CreateActivityModal: React.FC<Props> = ({
  onClose,
  open,
  createActivity,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="inset-0 fixed bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={onClose}>
              <XIcon className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="flex flex-1 gap-2 px-5 items-center h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
            <TagIcon className="text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              type="text"
              name="title"
              placeholder="Qual a atividade?"
            />
          </div>

          <div className="flex flex-1 gap-2 px-5 items-center h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
            <CalendarIcon className="text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
            />
          </div>

          <button
            type="submit"
            className="hover:bg-lime-400 w-full h-11 justify-center flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
          >
            Salvar atividade
            <ArrowRightIcon className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateActivityModal;
