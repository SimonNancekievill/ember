export function getDayOfWeek(date) {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
}

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
