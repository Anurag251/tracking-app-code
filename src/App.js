import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header.component";
import Homepage from "./pages/homepage.component";
import bgImage from "./assets/images/bg.png";
import SideNav from "./components/side-nav.component";
import Footer from "./components/footer.component";
import Aboutpage from "./pages/aboutpage.componsnt";
import ContactPage from "./pages/contactpage.component";
import Blogpage from "./pages/blogpage.component";

import "./assets/css/styles.sass";
import "./assets/css/responsive.sass";
import MobileHomepage from "./mobile-pages/mobile-homepage.component";
import Chatpage from "./mobile-pages/chatpage.component";
import MessagePage from "./mobile-pages/message-page.component";
import BlogDetailspage from "./pages/blog-detailspage.component";
import { TickIcon, WarningIcon } from "./components/icons.component";
import CareerPageComponent from "./pages/career-page.component";
import CareerDetailsPageComponent from "./pages/career-details-page.component";
import FaqsPageComponent from "./pages/faqs-page.component";
import JobApplyPageComponent from "./pages/job-apply-page.component";
import TermsConditionsPageComponent from "./pages/terms-conditions-page.component";
import ProposalPageComponent from "./pages/proposal-page.component";

// hello
const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
      <p
        className={`error ${errorMessage !== "" ? "active" : ""} ${
          error ? "success" : ""
        }`}
      >
        {error ? <TickIcon /> : <WarningIcon />}
        {errorMessage}
      </p>

      <div className="wrapper">
        <Header />
        <div className="section">
          <SideNav />
          <div className="all-pages">
            <Switch>
              <Route exact path="/" component={Homepage} />

              <Route exact path="/about" component={Aboutpage} />

              <Route exact path="/blog" component={Blogpage} />

              <Route
                exact
                path="/blog-details/:id"
                component={BlogDetailspage}
              />

              <Route exact path="/contact">
                <ContactPage
                  setError={setError}
                  setErrorMessage={setErrorMessage}
                />
              </Route>

              <Route exact path="/mobile" component={MobileHomepage} />

              <Route exact path="/chat" component={Chatpage} />

              <Route exact path="/message">
                <MessagePage />
              </Route>

              <Route exact path="/career" component={CareerPageComponent} />

              <Route
                exact
                path="/career-details/:careerId"
                component={CareerDetailsPageComponent}
              />

              <Route exact path="/faqs" component={FaqsPageComponent} />

              <Route exact path="/apply-now/:jobId">
                <JobApplyPageComponent
                  setError={setError}
                  setErrorMessage={setErrorMessage}
                />
              </Route>

              <Route exact path="/proposal">
                <ProposalPageComponent
                  setError={setError}
                  setErrorMessage={setErrorMessage}
                />
              </Route>

              <Route
                exact
                path="/terms-conditions"
                component={TermsConditionsPageComponent}
              />

              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
