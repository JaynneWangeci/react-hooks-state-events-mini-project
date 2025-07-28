import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";

test("renders task text and category", () => {
  render(<Task text="Do homework" category="Work" onDeleteTask={() => {}} />);
  expect(screen.getByText("Do homework")).toBeInTheDocument();
  expect(screen.getByText("Work")).toBeInTheDocument();
});

test("calls onDeleteTask when delete button is clicked", () => {
  const mockDelete = jest.fn();
  render(<Task text="Do homework" category="Work" onDeleteTask={mockDelete} />);
  fireEvent.click(screen.getByText("X"));
  expect(mockDelete).toHaveBeenCalledWith("Do homework");
});
