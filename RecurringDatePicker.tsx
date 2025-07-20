"use client";
import { RecurrenceForm } from "./RecurrenceForm";
import { DateRangePicker } from "./DateRangePicker";
import { CalendarPreview } from "./CalendarPreview";
import { useRecurrenceStore } from "../state/useRecurrenceStore";

export default function RecurringDatePicker() {
  const { dates } = useRecurrenceStore();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Recurring Date Picker</h2>
      <DateRangePicker />
      <RecurrenceForm />
      <CalendarPreview dates={dates} />
    </div>
  );
}
