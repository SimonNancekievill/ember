import Button from "../Button";
import styled from "styled-components";

export default function FilterButton({ selectedCategory, onCategoryChange }) {
  const categories = [
    { value: "all", label: "all" },
    { value: "home", label: "home" },
    { value: "movment", label: "movement" },
    { value: "self care", label: "self care" },
    { value: "social", label: "social" },
    { value: "other", label: "other" },
  ];

  return (
    <FilterWrapper>
      {categories.map((category) => (
        <Button
          $variant="filter"
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          $active={selectedCategory === category.value}
        >
          {category.label}
        </Button>
      ))}
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;
