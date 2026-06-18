import styled from "styled-components";
import { useState } from "react";
import {
  getCalendarDates,
  groupEntriesByDate,
  getCategoryColor,
} from "@/lib/calendarHelpers";

export default function Calendar({ entries, onDayClick }) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const dates = getCalendarDates(year, month);
  const entriesByDate = groupEntriesByDate(entries);
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
        <NavButton onClick={handlePrevMonth} aria-label="Previous month">
          ←
        </NavButton>
        <MonthYear>
          {monthName} {year}
        </MonthYear>
        <NavButton onClick={handleNextMonth} aria-label="Next month">
          →
        </NavButton>
      </Header>

      <WeekDays>
        {weekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </WeekDays>

      <Grid>
        {dates.map((dateObj, index) => {
          const dateStr = `${dateObj.year}-${String(dateObj.month + 1).padStart(2, "0")}-${String(dateObj.date).padStart(2, "0")}`;
          const dayEntries = entriesByDate[dateStr] || [];

          return (
            <Day
              key={dateStr}
              $isCurrentMonth={dateObj.isCurrentMonth}
              onClick={() => {
                if (dateObj.isCurrentMonth) {
                  onDayClick?.(
                    new Date(dateObj.year, dateObj.month, dateObj.date)
                  );
                }
              }}
            >
              <DateNumber>{dateObj.date}</DateNumber>
              <DotsContainer>
                {dayEntries.slice(0, 4).map((entry, index) => (
                  <Dot
                    key={entry._id}
                    $color={getCategoryColor(entry.category)}
                  />
                ))}
              </DotsContainer>
            </Day>
          );
        })}
      </Grid>
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.div`
  padding: 16px;
  background: var(--primary-white);
  border-radius: 8px;
  width: 100%;
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
  width: 100%;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1px;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  flex-shrink: 0;
`;

const DateNumber = styled.span`
  display: block;
  font-size: 14px;
`;

const Day = styled.button`
  aspect-ratio: 1;
  border: none;
  border-radius: 6px;
  background: ${(props) =>
    props.$isCurrentMonth ? "var(--primary-white)" : "var(--background-light)"};
  color: ${(props) =>
    props.$isCurrentMonth ? "var(--primary-text)" : "var(--tertiary-grey)"};
  cursor: ${(props) => (props.$isCurrentMonth ? "pointer" : "default")};
  padding: 4px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background: ${(props) =>
      props.$isCurrentMonth ? "var(--background-light)" : "transparent"};
  }
`;
