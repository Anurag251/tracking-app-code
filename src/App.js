import React from "react";
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
import NotificationsPage from "./pages/notifications-page.component";
import MobileHomepage from "./mobile-pages/mobile-homepage.component";
import Chatpage from "./mobile-pages/chatpage.component";
import MessagePage from "./mobile-pages/message-page.component";
import BlogDetailspage from "./pages/blog-detailspage.component";

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
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

              <Route exact path="/contact" component={ContactPage} />

              <Route exact path="/mobile" component={MobileHomepage} />

              <Route exact path="/chat" component={Chatpage} />

              <Route exact path="/message">
                <MessagePage />
              </Route>

              <Route
                exact
                path="/notifications"
                component={NotificationsPage}
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
