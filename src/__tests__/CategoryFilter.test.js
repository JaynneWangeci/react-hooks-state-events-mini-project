import "@testing-library/jest-dom"; 
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";

const categories = ["All", "Food", "Exercise", "Work"];

test("renders buttons for each category", () => {
  render(
    <CategoryFilter
      categories={categories}
      selectedCategory="All"
      onCategoryChange={() => {}}
    />
  );
  
  categories.forEach(category => {
    const button = screen.getByText(category);
    expect(button).toBeInTheDocument(); 
  });
});

test("calls onCategoryChange when button is clicked", () => {
  const mockChange = jest.fn();
  render(
    <CategoryFilter
      categories={categories}
      selectedCategory="All"
      onCategoryChange={mockChange}
    />
  );

  fireEvent.click(screen.getByText("Work"));
  expect(mockChange).toHaveBeenCalledWith("Work");
});
