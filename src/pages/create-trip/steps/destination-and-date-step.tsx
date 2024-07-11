import { format } from "date-fns";
import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";

type Props = {
  toggleGuestInput: () => void;
  isGuestInputOpen: boolean;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
  eventStartAndEndDates: DateRange | undefined;
};

const DestinationAndDateStep: React.FC<Props> = ({
  toggleGuestInput,
  isGuestInputOpen,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}) => {
  const [isDataPickerOpen, setIsDataPickerOpen] = useState(false);

  const toggleIsDataPickerOpen = () => {
    setIsDataPickerOpen(!isDataPickerOpen);
  };

  const displayedDate = eventStartAndEndDates
    ? eventStartAndEndDates.from &&
      eventStartAndEndDates.to &&
      format(eventStartAndEndDates.from, "d' de 'LLL")
        .concat(" até ")
        .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
    : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPinIcon className="size-5 text-zinc-400" />
        <input
          onChange={(e) => {
            setDestination(e.target.value);
          }}
          disabled={isGuestInputOpen}
          className="bg-transparent min-w-20 text-lg w-full placeholder-zinc-400 outline-none flex-1"
          type="text"
          placeholder="Para onde você vai?"
        />
      </div>

      <button
        disabled={isGuestInputOpen}
        onClick={toggleIsDataPickerOpen}
        className="flex items-center gap-2"
      >
        <CalendarIcon className="size-5 text-zinc-400" />
        <span className="bg-transparent text-lg text-zinc-400 text-start w-56 outline-none">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDataPickerOpen && (
        <div className="inset-0 fixed bg-black/60 flex items-center justify-center">
          <div className="w-[320px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={toggleIsDataPickerOpen}>
                  <XIcon className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

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
