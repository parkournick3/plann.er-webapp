import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestsModal from "./invite-guests-modal";
import ConfirmTripModal from "./confirm-trip-modal";
import DestinationAndDateStep from "./steps/destination-and-date-step";
import InviteGuestsStep from "./steps/invite-guests-step";

const CreateTripPage = () => {
  const navigate = useNavigate();

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

  const createTrip = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`trips/123`);
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
          <DestinationAndDateStep
            isGuestInputOpen={isGuestInputOpen}
            toggleGuestInput={toggleGuestInput}
          />

          <InviteGuestsStep
            open={isGuestInputOpen}
            emailsToInvite={emailsToInvite}
            toggleConfirmModal={toggleConfirmModal}
            toggleGuestsModal={toggleGuestsModal}
          />
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

      <InviteGuestsModal
        open={isGuestModalOpen}
        onClose={toggleGuestsModal}
        addEmailToInvite={addEmailToInvite}
        emailsToInvite={emailsToInvite}
        removeEmailToInvite={removeEmailToInvite}
      />

      <ConfirmTripModal
        open={isConfirmModalOpen}
        onClose={toggleConfirmModal}
        createTrip={createTrip}
      />
    </div>
  );
};

export default CreateTripPage;
