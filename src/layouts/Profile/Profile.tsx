import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Profile.module.css";
import onlineStatus from "../../assets/online-status.svg";
import CSSModules from "react-css-modules";
import Dropdown from "../Dropdown/Dropdown";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db, getUser, getUserId, getUserName } from "../../firebase";

interface Props {
  isLoggedIn: boolean;
}

const Profile: React.FC<Props> = ({ isLoggedIn }) => {
  const [userPosts, setuserPosts] = useState(0)

  useEffect(() => {
    async function getuserPosts() {
      const userPostsRef = collection(db, "posts");
      const q = query(userPostsRef, where("userId", "==", getUserId()));
      const userPostsDoc = await getDocs(q);
      setuserPosts(userPostsDoc.docs.length)
    }
    if(isLoggedIn)
      getuserPosts()
  }, [isLoggedIn])

  return (
    <div styleName="profile">
      {isLoggedIn ? (
          <button styleName="profile__button">
          <span styleName="profile__details">
            <AccountCircleIcon styleName="profile__avatar" />
            <div styleName="profile__content">
              <p styleName="profile__username">{getUserName()}</p>
              {userPosts !== 0 && <p styleName="profile__karma">{userPosts + " Posts"}</p>}
            </div>
          </span>
          
          <IoIosArrowDown styleName="profile__button-icon" />
        </button>
          ) : (
            null
          )}
    </div>
  );
};

export default CSSModules(Profile, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
