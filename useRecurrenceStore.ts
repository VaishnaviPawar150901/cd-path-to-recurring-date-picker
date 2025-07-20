import { create } from "zustand";
import { generateRecurringDates } from "../utils/generateRecurringDates";

interface RecurrenceState {
  startDate: string;
  endDate?: string;
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  interval: number;
  weekdays: string[];
  monthlyPattern: { week: number; day: string };
  dates: string[];
  setState: (s: Partial<RecurrenceState>) => void;
  updateDates: () => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set, get) => ({
  startDate: "",
  endDate: undefined,
  frequency: "weekly",
  interval: 1,
  weekdays: [],
  monthlyPattern: { week: 2, day: "Tuesday" },
  dates: [],
  setState: (s) => set({ ...get(), ...s }),
  updateDates: () => {
    const state = get();
    const newDates = generateRecurringDates(state);
    set({ dates: newDates });
  },
}));
