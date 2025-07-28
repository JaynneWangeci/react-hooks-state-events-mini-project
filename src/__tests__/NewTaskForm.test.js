import "@testing-library/jest-dom"; 
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";

const categories = ["All", "Food", "Exercise", "Work"];

test("renders input and select fields", () => {
  render(<NewTaskForm categories={categories} onTaskFormSubmit={() => {}} />);
  expect(screen.getByPlaceholderText("New task details")).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("calls onTaskFormSubmit with correct data", () => {
  const mockSubmit = jest.fn();
  render(<NewTaskForm categories={categories} onTaskFormSubmit={mockSubmit} />);

  fireEvent.change(screen.getByPlaceholderText("New task details"), {
    target: { value: "Test task" },
  });
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Work" },
  });
  fireEvent.click(screen.getByRole("button", { name: /add task/i }));

  expect(mockSubmit).toHaveBeenCalledWith({
    text: "Test task",
    category: "Work",
  });
});
