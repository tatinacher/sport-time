import * as React from "react";
import { Header } from "./ui/atoms";
import { Container } from "./styles";
import { Book } from "./features/book";
import { TaskTracker } from "./features/task-tracker";
import { SportTime } from "./features/sport-time";

const App: React.FC = () => {
  const progress = [
    {
      id: 0,
      name: "Встать в 7",
      days: ["20.01.2019", "21.01.2019", "24.01.2019"]
    },
    {
      id: 1,
      name: "Спортзал",
      days: ["22.01.2019", "23.01.2019", "29.01.2019"]
    }
  ];

  return (
    <div>
      <Header></Header>
      <SportTime />
    </div>
  );
};

export default App;
