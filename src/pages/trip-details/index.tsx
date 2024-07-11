import { CalendarIcon, MapPinIcon, Settings2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import CreateActivityModal from "./create-activity-modal";
import ImportantLinks from "./important-links";
import Guests from "./guests";
import Activities from "./activities";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { api } from "../../lib/axios";

const TripDetailsPage = () => {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const toggleCreateActivityModal = () => {
    setIsCreateActivityModalOpen(!isCreateActivityModalOpen);
  };

  const createActivity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("criado!");
  };

  const [trip, setTrip] = useState<{
    id: string;
    is_confirmed: boolean;
    destination: string;
    starts_at: Date;
    ends_at: Date;
  }>();

  const { tripId } = useParams();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => {
      setTrip(response.data.trip);
    });
  }, [tripId]);

  const displayedDate = trip
    ? format(trip.starts_at, "d' de 'LLL")
        .concat(" até ")
        .concat(format(trip.ends_at, "d' de 'LLL"))
    : null;

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl shadow-shape bg-zinc-900 items-center justify-between flex">
        <div className="flex items-center gap-2">
          <MapPinIcon className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{trip?.destination}</span>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-5 text-zinc-400" />
            <span className="text-zinc-100">{displayedDate}</span>
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="hover:bg-zinc-700 flex items-center gap-2 bg-zinc-800 min-w-fit text-zinc-200 rounded-lg px-5 py-2 font-medium">
            Alterar local/data
            <Settings2Icon className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <Activities toggleCreateActivityModal={toggleCreateActivityModal} />

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>

      <CreateActivityModal
        open={isCreateActivityModalOpen}
        onClose={toggleCreateActivityModal}
        createActivity={createActivity}
      />
    </div>
  );
};

export default TripDetailsPage;
