import * as React from "react";
import { Header } from "./ui/atoms";
import { Container } from "./styles";
import { Book } from "./features/book";
import { TaskTracker } from "./features/task-tracker";
import { SportTime } from "./features/sport-time";
import { BrowserRouter as Link, Router, Switch, Route } from "react-router-dom";

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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sport">Sport</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Header></Header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sport">
            <SportTime />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
