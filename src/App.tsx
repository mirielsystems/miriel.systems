import './components/index.css'; // Tailwind CSSを含む

import { Route, Router } from "@solidjs/router";
import Home from "./components/Home";
import Members from "./components/Members";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/members" component={Members} />
    </Router>
  );
};

export default App;
