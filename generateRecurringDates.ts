import { addDays, addWeeks, addMonths, addYears, isBefore, format } from "date-fns";

export function generateRecurringDates({
  startDate,
  endDate,
  frequency,
  interval,
  weekdays,
  monthlyPattern
}: any): string[] {
  const results: string[] = [];
  if (!startDate) return results;
  let current = new Date(startDate);
  const limit = endDate ? new Date(endDate) : addYears(current, 1);

  while (isBefore(current, limit)) {
    if (frequency === "daily") {
      results.push(format(current, "yyyy-MM-dd"));
      current = addDays(current, interval);
    } else if (frequency === "weekly") {
      weekdays.forEach((day: string) => {
        const date = getNextWeekday(current, day);
        if (isBefore(date, limit)) results.push(format(date, "yyyy-MM-dd"));
      });
      current = addWeeks(current, interval);
    } else if (frequency === "monthly") {
      const date = getMonthlyPatternDate(current, monthlyPattern);
      if (isBefore(date, limit)) results.push(format(date, "yyyy-MM-dd"));
      current = addMonths(current, interval);
    } else if (frequency === "yearly") {
      results.push(format(current, "yyyy-MM-dd"));
      current = addYears(current, interval);
    }
  }
  return results;
}

function getNextWeekday(base: Date, day: string) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let result = new Date(base);
  while (weekdays[result.getDay()] !== day) {
    result = addDays(result, 1);
  }
  return result;
}

function getMonthlyPatternDate(base: Date, { week, day }: { week: number; day: string }) {
  const d = new Date(base.getFullYear(), base.getMonth(), 1);
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let count = 0;
  while (d.getMonth() === base.getMonth()) {
    if (weekdays[d.getDay()] === day) count++;
    if (count === week) return new Date(d);
    d.setDate(d.getDate() + 1);
  }
  return new Date(base);
}
