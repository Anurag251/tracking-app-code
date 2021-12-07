import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";

import Header from "./components/header.component";
import Homepage from "./pages/homepage.component";
import bgImage from "./assets/images/bg.png";
import SideNav from "./components/side-nav.component";
import Footer from "./components/footer.component";
import Aboutpage from "./pages/aboutpage.componsnt";
import ContactPage from "./pages/contactpage.component";
import SignUpPage from "./pages/sign-up-page.component";
import LoginPage from "./pages/login-page.component";
import Blogpage from "./pages/blogpage.component";
import { GoogleMaps } from "./components/map.component";

import "./assets/css/styles.sass";
import "./assets/css/responsive.sass";

const App = () => {
  const [goSignUpPage, setGoSignUpPage] = useState(true);

  const signInGo = (e) => {
    setGoSignUpPage(e);
  };

  let history = useHistory();
  useEffect(() => {
    if (history.location.pathname === "/sign-up") {
      setGoSignUpPage(false);
    }

    if (history.location.pathname === "/login") {
      setGoSignUpPage(false);
    }
  }, [history]);

  return (
    <>
      {goSignUpPage ? (
        <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="wrapper">
            <Header signInGo={signInGo} />
            <div className="section">
              <SideNav />
              <div className="all-pages">
                <Switch>
                  <Route exact path="/" component={Homepage} />

                  <Route exact path="/about" component={Aboutpage} />

                  <Route exact path="/map" component={GoogleMaps} />

                  <Route exact path="/blog" component={Blogpage} />

                  <Route exact path="/contact" component={ContactPage} />

                  <Redirect to="/" />
                </Switch>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Switch>
          <Route exact path="/sign-up">
            <SignUpPage signInGo={signInGo} />
          </Route>
          <Route exact path="/login">
            <LoginPage signInGo={signInGo} />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default App;
