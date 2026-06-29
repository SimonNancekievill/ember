import ActivityList from "@/components/ActivityList";
import useSWR from "swr";
import toast from "react-hot-toast";
import { useState } from "react";
import Button from "@/components/Button";
import styled from "styled-components";
import Form from "@/components/Form";
import AffirmationDisplay from "@/components/AffirmationDisplay";
import EntryCounter from "@/components/EntryCounter";
import Calendar from "@/components/Calendar";
import ViewToggle from "@/components/ViewToggle";
import DayDetailSheet from "@/components/DayDetailSheet";
import FilterButton from "@/components/FilterButton";
import LogIn from "../LogIn";
import Image from "next/image";

export default function HomePage({
  affirmation,
  entries,
  error,
  mutate,
  session,
}) {
  const { data: entryCount, mutate: mutateCounter } = useSWR("/api/counter");
  const [isActive, setIsActive] = useState(false);
  const [isCalendarView, setIsCalendarView] = useState(false);
  const [isSelectedDay, setIsSelectedDay] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleToggle() {
    setIsCalendarView(!isCalendarView);
  }

  function handleActive() {
    setIsActive(!isActive);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const entryData = {
      name: formData.get("name"),
      category: formData.get("category"),
    };

    const response = await fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    });

    if (response.ok) {
      mutate();
      mutateCounter();
      setIsActive(!isActive);
      toast.success("Successfully created your Activity.");
      event.target.reset();
    } else {
      toast.error("Something went wrong, please try again.");
    }
  }

  if (!entries || error) {
    return (
      <StyledPageWrapper>
        <StyledSubtitle>Oops… something went wrong.</StyledSubtitle>
      </StyledPageWrapper>
    );
  }
  const filteredEntries = entries.filter((entry) =>
    selectedCategory === "all" ? true : entry.category === selectedCategory
  );

  return (
    <StyledMainPageWrapper>
      <Header>
        <Image
          src={"/images/LOGO.png"}
          height={45}
          width={45}
          alt="ember e as a logo"
        />
        <LogIn />
      </Header>
      <StyledTitleWrapper>
        <StyledTitle>hi {session?.user?.name?.split(" ")[0]},</StyledTitle>
        <AffirmationDisplay affirmation={affirmation} />
      </StyledTitleWrapper>
      <EntryCounter entryCount={entryCount} />
      {isActive ? (
        <Form onSubmit={handleSubmit} onHandleActive={handleActive} />
      ) : (
        <ButtonWrapper>
          <Button
            type="button"
            aria-label="Open Activity Form"
            onClick={() => setIsActive(!isActive)}
          >
            Add new
          </Button>
        </ButtonWrapper>
      )}
      <OptionsWrapper>
        <ViewToggle onToggle={handleToggle} isCalendarView={isCalendarView} />
        <FilterButton
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </OptionsWrapper>
      <CalendarWrapper $visible={isCalendarView}>
        <Calendar entries={filteredEntries} onDayClick={setIsSelectedDay} />
      </CalendarWrapper>
      {isSelectedDay && (
        <DayDetailSheet
          date={isSelectedDay}
          mutateCounter={mutateCounter}
          activities={entries.filter((event) => {
            const entryDate = new Date(event.createdAt)
              .toISOString()
              .split("T")[0];

            const selectedDate = `${isSelectedDay.getFullYear()}-${String(isSelectedDay.getMonth() + 1).padStart(2, "0")}-${String(isSelectedDay.getDate()).padStart(2, "0")}`;
            return entryDate === selectedDate;
          })}
          onClose={() => setIsSelectedDay(null)}
        />
      )}
      <StyledListWrapper $visible={isCalendarView}>
        <ActivityList entries={filteredEntries} mutateCounter={mutateCounter} />
      </StyledListWrapper>
    </StyledMainPageWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 48px 12px 48px;
`;

const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
`;
const StyledSubtitle = styled.h2`
  color: var(--tertiary-grey);
  font-weight: 400;
`;

const StyledTitleWrapper = styled.div`
  padding: 24px 48px;
`;

const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const CalendarWrapper = styled.div`
  padding: 24px 48px;
  display: ${(props) => (props.$visible ? "block" : "none")};
`;
const StyledListWrapper = styled.div`
  display: ${(props) => (props.$visible ? "none" : "block")};
`;
const StyledMainPageWrapper = styled.div`
  animation: fadeIn 0.75s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 24px 48px 0px 48px;
  height: auto;
`;

const Header = styled.div`
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 38px;
`;
