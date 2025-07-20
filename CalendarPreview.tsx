"use client";
interface Props {
  dates: string[];
}

export function CalendarPreview({ dates }: Props) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Recurring Dates Preview</h3>
      <div className="grid grid-cols-3 gap-2">
        {dates.map((date, i) => (
          <div key={i} className="bg-blue-100 text-blue-900 p-2 rounded text-center">
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}
