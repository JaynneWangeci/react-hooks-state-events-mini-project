import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";

const sampleTasks = [
  { text: "Buy groceries", category: "Food" },
  { text: "Run", category: "Exercise" }
];

test("renders all tasks passed as props", () => {
  render(<TaskList tasks={sampleTasks} onDeleteTask={() => {}} />);
  expect(screen.getByText("Buy groceries")).toBeInTheDocument();
  expect(screen.getByText("Run")).toBeInTheDocument();
});
