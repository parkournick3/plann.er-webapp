import {
  ArrowRightIcon,
  AtSignIcon,
  CalendarIcon,
  MailIcon,
  MapPinIcon,
  PlusIcon,
  Settings2Icon,
  UserIcon,
  UserRoundPlusIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

const CreateTripPage = () => {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  const toggleConfirmModal = () => {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  };

  const toggleGuestInput = () => {
    setIsGuestInputOpen(!isGuestInputOpen);
  };

  const toggleGuestsModal = () => {
    setIsGuestModalOpen(!isGuestModalOpen);
  };

  const addEmailToInvite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email.toLocaleLowerCase()]);

    e.currentTarget.reset();
  };

  const removeEmailToInvite = (email: string) => {
    setEmailsToInvite((prev) =>
      prev.filter((e) => e !== email.toLocaleLowerCase())
    );
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

          {isGuestInputOpen && (
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

      {isGuestModalOpen && (
        <div className="inset-0 fixed bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type="button" onClick={toggleGuestsModal}>
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
      )}

      {isConfirmModalOpen && (
        <div className="inset-0 fixed bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Confirmar criação da viagem
                </h2>
                <button type="button" onClick={toggleConfirmModal}>
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

            <div className="flex flex-1 gap-2 px-5 items-center h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
              <UserIcon className="text-zinc-400" />
              <input
                className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
                type="text"
                name="name"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="flex flex-1 gap-2 px-5 items-center h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
              <MailIcon className="text-zinc-400" />
              <input
                className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
                type="text"
                name="email"
                placeholder="Seu email pessoal"
              />
            </div>

            <button
              type="submit"
              className="hover:bg-lime-400 w-full h-11 justify-center flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
            >
              Confirmar criação da viagem
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTripPage;
