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
import NotificationsPage from "./pages/notifications-page.component";
import MobileHomepage from "./mobile-pages/mobile-homepage.component";
import Chatpage from "./mobile-pages/chatpage.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import MessagePage from "./mobile-pages/message-page.component";

const App = () => {
  const [goSignUpPage, setGoSignUpPage] = useState(true);
  const [removeComponent, setRemoveComponent] = useState(true);

  const [userData, setUserData] = useState({
    currentUser: null,
  });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const { photoURL } = auth.currentUser;

        userRef.onSnapshot((snapShot) => {
          setUserData({
            currentUser: {
              id: snapShot.id,
              photoURL,
              ...snapShot.data(),
            },
          });
        });
      }

      setUserData(userAuth);
    });

    return unsubscribeFromAuth;
  }, []);

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

    if (history.location.pathname === "/message") {
      setRemoveComponent(false);
    }
  }, [history]);

  return (
    <>
      {goSignUpPage ? (
        <div className="app" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className={`wrapper ${!removeComponent ? "noSpace" : ""} `}>
            <Header
              signInGo={signInGo}
              currentUser={userData ? userData.currentUser : null}
              removeComponent={removeComponent}
            />
            <div className="section">
              <SideNav removeComponent={removeComponent} />
              <div className="all-pages">
                <Switch>
                  <Route exact path="/" component={Homepage} />

                  <Route exact path="/about" component={Aboutpage} />

                  <Route exact path="/blog" component={Blogpage} />

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
                <Footer removeComponent={removeComponent} />
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
