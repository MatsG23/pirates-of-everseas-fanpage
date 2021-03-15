import { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { Home, About, Privacy, NotFound, Wiki } from "./pages/all";

function App() {
  const location = useLocation();
  useEffect(() => window.scroll({ top: 0 }), [location]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wiki" component={Wiki} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
