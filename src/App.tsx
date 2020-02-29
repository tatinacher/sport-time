import * as React from "react";
import { Header } from "./ui/atoms";
// import { Container } from "./styles";
// import { Book } from "./features/book";
// import { TaskTracker } from "./features/task-tracker";
import { SportTime } from "./features/sport-time";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Main } from "./pages/main";
import { Nutrition } from "./pages/nutrition";
import { Navigation, Element } from "./styles";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header>
          <nav>
            <Navigation>
              <Element>
                <Link to="/">Home</Link>
              </Element>
              <Element>
                <Link to="/sport">Training</Link>
              </Element>
              <Element>
                <Link to="/nutrition">Nutrition</Link>
              </Element>
            </Navigation>
          </nav>
        </Header>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/sport" component={SportTime} />
          <Route path="/nutrition" component={Nutrition} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
