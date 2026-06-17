export function getDayOfWeek(date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getCalendarDates(year, month) {
  const firstDay = new Date(year, month, 1);

  const startingDayOfWeek = getDayOfWeek(firstDay);
  const daysInMonth = getDaysInMonth(year, month);

  const dates = [];

  const prevMonthDays = getDaysInMonth(year, month - 1);
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    dates.push({
      date: prevMonthDays - i,
      isCurrentMonth: false,
      month: month - 1,
      year: month === 0 ? year - 1 : year,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({
      date: i,
      isCurrentMonth: true,
      month: month,
      year: year,
    });
  }

  const remainingCells = 42 - dates.length;
  for (let i = 1; i <= remainingCells; i++) {
    dates.push({
      date: i,
      isCurrentMonth: false,
      month: month + 1,
      year: month === 11 ? year + 1 : year,
    });
  }
  return dates;
}

export function groupEntriesByDate(entries) {
  const grouped = {};

  entries?.forEach((entry) => {
    const date = new Date(entry.createdAt).toISOString().split("T")[0];
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(entry);
  });
  return grouped;
}

export function getCategoryColor(category) {
  const colors = {
    movement: "#FEBC2F",
    "self care": "#00C8B3",
    home: "#6155F5",
    social: "#FF2D55",
  };
  return colors[category] || "#1C1C1C";
}
