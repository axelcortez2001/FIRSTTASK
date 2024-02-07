import { getData } from "@/utils/api";
import CreateTask from "./components/CreateTask";
import Filter from "./components/Filter";
import TodoCard from "./components/TodoCard";
import HomePage from "./components/page";

export default async function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
