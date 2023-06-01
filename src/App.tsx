import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import { useAppSelector } from "./hooks/hooks";
import CSSModules from "react-css-modules";
import styles from "./App.module.css";
import { selectCommunityModalState } from "./features/subreddit/subredditSlice";
import CommunityModal from "./components/CommunityModal/CommunityModal";
import {
  selectAuthStatus,
  selectSignInModalState,
  selectSignUpModalState,
} from "./features/auth/authSlice";
import AuthModal from "./components/AuthModal/AuthModal";
import NavigationDrawer from "./layouts/NavigationDrawer/NavigationDrawer";

const App: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectAuthStatus);
  
  const communityModalState = useAppSelector(selectCommunityModalState);

  const signUpModalState = useAppSelector(selectSignUpModalState);

  const signInModalState = useAppSelector(selectSignInModalState);


  const [sideDrawer, setSideDrawer] = useState(false)

  useEffect(() => {
    if(!isLoggedIn)
      navigate("/")
  }, [isLoggedIn])

  return (
    <>
      {communityModalState && <CommunityModal />}
      {signUpModalState && <AuthModal />}
      {signInModalState && <AuthModal />}
      <Navbar toggleDrawer={() => setSideDrawer(!sideDrawer)} />
      <div styleName="container">
        {sideDrawer && isLoggedIn && <NavigationDrawer handleClose={() => setSideDrawer(false)} />}
        <Outlet />
      </div>
    </>
  );
};

export default CSSModules(App, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
