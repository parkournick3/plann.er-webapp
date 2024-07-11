import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestsModal from "./invite-guests-modal";
import ConfirmTripModal from "./confirm-trip-modal";
import DestinationAndDateStep from "./steps/destination-and-date-step";
import InviteGuestsStep from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

const CreateTripPage = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

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

  const createTrip = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    if (!destination) {
      return;
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
      return;
    }

    if (emailsToInvite.length === 0) {
      return;
    }

    if (!ownerEmail || !ownerName) {
      return;
    }

    try {
      const response = await api.post("/trips", {
        destination,
        starts_at: eventStartAndEndDates.from,
        ends_at: eventStartAndEndDates.to,
        emails_to_invite: emailsToInvite,
        owner_name: ownerName,
        owner_email: ownerEmail,
      });

      setLoading(false);

      navigate(`trips/${response.data.trip_id}`);
    } catch (error) {
      setLoading(false);
    }
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
            eventStartAndEndDates={eventStartAndEndDates}
            setEventStartAndEndDates={setEventStartAndEndDates}
            setDestination={setDestination}
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
        loading={loading}
        setOwnerEmail={setOwnerEmail}
        setOwnerName={setOwnerName}
        open={isConfirmModalOpen}
        onClose={toggleConfirmModal}
        createTrip={createTrip}
      />
    </div>
  );
};

export default CreateTripPage;
