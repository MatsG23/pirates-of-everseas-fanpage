import { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Footer, Navbar } from "./ui/components/all";
import {
  LandingPage,
  AboutPage,
  PrivacyPage,
  NotFoundPage,
  WikiPage,
} from "./ui/views/ALL";

function App() {
  const location = useLocation();
  useEffect(() => window.scroll({ top: 0 }), [location]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/wiki" component={WikiPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
