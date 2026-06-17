import styled from "styled-components";
import { useState } from "react";
import { getCalendarDates } from "/lib/calendarHelpers";

export default function Calendar({ entries, onDayClick }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const dates = getCalendarDates(year, month);
  const monthName = new Date(year, month).toLocaleString("en-US", {
    month: "long",
  });

  function handlePrevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function handleNextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <CalendarWrapper>
      <Header>
        <NavButton onClick={handlePrevMonth}>←</NavButton>
        <MonthYear>
          {monthName} {year}
        </MonthYear>
        <NavButton onClick={handleNextMonth}>→</NavButton>
      </Header>

      <WeekDays>
        {weekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </WeekDays>

      <Grid>
        {dates.map((dateObj, index) => (
          <Day
            key={index}
            $isCurrentMonth={dateObj.isCurrentMonth}
            onClick={() => {
              if (dateObj.isCurrentMonth) {
                onDayClick?.(
                  new Date(dateObj.year, dateObj.month, dateObj.date)
                );
              }
            }}
          >
            {dateObj.date}
          </Day>
        ))}
      </Grid>
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  padding: 16px;
  background: var(--primary-white);
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
`;

const MonthYear = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 8px;
`;

const WeekDay = styled.div`
  text-align: center;
  font-size: 12px;
  color: var(--tertiary-grey);
  font-weight: 500;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const Day = styled.button`
  aspect-ratio: 1;
  border: none;
  border-radius: 6px;
  background: ${(props) =>
    props.$isCurrentMonth ? "var(--primary-white)" : "var(--background-light)"};
  color: ${(props) =>
    props.$isCurrentMonth ? "var(--primary-text)" : "var(--tertiary-grey)"};
  font-size: 14px;
  cursor: ${(props) => (props.$isCurrentMonth ? "pointer" : "default")};
  padding: 0;

  &:hover {
    background: ${(props) =>
      props.$isCurrentMonth ? "var(--background-light)" : "transparent"};
  }
`;
