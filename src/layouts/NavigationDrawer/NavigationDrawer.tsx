import React from 'react'
import CSSModules from "react-css-modules";
import styles from "./NavigationDrawer.module.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  selectCommunityData,
  selectCommunityModalState,
  toggleCommunityModalState,
} from "../../features/subreddit/subredditSlice";

interface Props {
  handleClose: Function;
}

const NavigationDrawer: React.FC<Props> = ({
  handleClose,
}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();


  const handleCommunityCreate = () => {
    dispatch(toggleCommunityModalState());
  }

  const navs = [
    {
      name: "Dashboard",
      icon: "dashboard",
      linkTo: "/"
    },
    {
      name: "Profile",
      icon: "account_circle",
      linkTo: "/user"
    },
    {
      name: "Categories",
      icon: "category",
      linkTo: "/category"
    },
    {
      name: "Community",
      icon: "add_circle",
      linkTo: ""
    },
    {
      name: "All Communities",
      icon: "groups_outlined",
      linkTo: "all_communities"
    },
    {
      name: "Settings",
      icon: "settings",
      linkTo: "settings"
    },
  ]

  return <Box
      sx={{ "width": 250}}
      role="presentation"
      styleName="drawerContr"
    >
      <List>
        {navs.map((nav, index) => {
          const isActive = location.pathname === nav?.linkTo
          
          if (nav.name === "Community")
            return <ListItem key={"navs"+index} disablePadding 
              styleName={`navlinks ${isActive && "activeNav"}`}
              onClick={handleCommunityCreate}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Icon styleName={`${isActive && "activeNav"}`}>{nav.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={nav.name} />
              </ListItemButton>
            </ListItem>

          return <ListItem key={"navs"+index} disablePadding styleName={`navlinks ${isActive && "activeNav"}`}>
            <Link to={nav.linkTo} style={{width: "100%"}}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon styleName={`${isActive && "activeNav"}`}>{nav.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={nav.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        }
        )}
      </List>
    </Box>
};

export default CSSModules(NavigationDrawer, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
