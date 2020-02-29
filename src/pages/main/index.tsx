import * as React from "react";
import { Link } from "react-router-dom";

export const Main: React.FC = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sport">Training</Link>
        </li>
        <li>
          <Link to="/nutrition">Nutrition</Link>
        </li>
      </ul>
    </nav>
  </div>
);
