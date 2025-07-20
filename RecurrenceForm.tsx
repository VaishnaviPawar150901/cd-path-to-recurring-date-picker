"use client";
import { useRecurrenceStore } from "../state/useRecurrenceStore";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function RecurrenceForm() {
  const { frequency, interval, weekdays, monthlyPattern, setState } = useRecurrenceStore();

  return (
    <div className="mb-4 space-y-4">
      <div>
        <label className="block font-semibold">Recurrence:</label>
        <select
          value={frequency}
          onChange={(e) => setState({ frequency: e.target.value as any })}
          className="border px-2 py-1 rounded w-full"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">Interval:</label>
        <input
          type="number"
          min={1}
          value={interval}
          onChange={(e) => setState({ interval: parseInt(e.target.value) })}
          className="border px-2 py-1 rounded w-full"
        />
      </div>

      {frequency === "weekly" && (
        <div>
          <label className="block font-semibold">Weekdays:</label>
          <div className="flex flex-wrap gap-2">
            {WEEKDAYS.map((day) => (
              <label key={day} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={weekdays.includes(day)}
                  onChange={(e) => {
                    setState({
                      weekdays: e.target.checked
                        ? [...weekdays, day]
                        : weekdays.filter((d) => d !== day),
                    });
                  }}
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      )}

      {frequency === "monthly" && (
        <div className="space-y-2">
          <label className="block font-semibold">Monthly Pattern:</label>
          <div className="flex gap-4">
            <select
              value={monthlyPattern.week}
              onChange={(e) => setState({ monthlyPattern: { ...monthlyPattern, week: parseInt(e.target.value) } })}
              className="border px-2 py-1 rounded"
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <select
              value={monthlyPattern.day}
              onChange={(e) => setState({ monthlyPattern: { ...monthlyPattern, day: e.target.value } })}
              className="border px-2 py-1 rounded"
            >
              {WEEKDAYS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
