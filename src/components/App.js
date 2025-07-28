import tasks from "./data/tasks";
import categories from "./data/categories";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";
import NewTaskForm from "./components/NewTaskForm";

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks = selectedCategory === "All"
    ? taskList
    : taskList.filter(task => task.category === selectedCategory);

  function handleDeleteTask(text) {
    setTaskList(taskList.filter(task => task.text !== text));
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleAddTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
