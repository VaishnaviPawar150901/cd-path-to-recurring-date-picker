"use client";
import { useRecurrenceStore } from "../state/useRecurrenceStore";

export function DateRangePicker() {
  const { startDate, endDate, setState, updateDates } = useRecurrenceStore();

  return (
    <div className="mb-4 space-y-2">
      <label className="block">
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setState({ startDate: e.target.value })}
          className="border px-2 py-1 rounded w-full"
        />
      </label>
      <label className="block">
        End Date:
        <input
          type="date"
          value={endDate ?? ""}
          onChange={(e) => setState({ endDate: e.target.value })}
          className="border px-2 py-1 rounded w-full"
        />
      </label>
      <button
        onClick={updateDates}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generate Dates
      </button>
    </div>
  );
}
