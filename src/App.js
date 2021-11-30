import { Switch, Route } from "react-router-dom";

import "./assets/css/styles.sass";
import Header from "./components/header.component";
import Homepage from "./pages/homepage.component";
import bgImage from "./assets/images/bg.png";
import SideNav from "./components/side-nav.component";
import Footer from "./components/footer.component";
import Aboutpage from "./pages/aboutpage.componsnt";
import ContactPage from "./pages/contactpage.component";

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="wrapper">
        <Header />
        <div className="section">
          <SideNav />
          <div style={{ width: "80%" }}>
            <Switch>
              <Route exact path="/" component={Homepage} />
            </Switch>

            <Switch>
              <Route exact path="/about" component={Aboutpage} />
            </Switch>

            <Switch>
              <Route exact path="/contact" component={ContactPage} />
            </Switch>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
