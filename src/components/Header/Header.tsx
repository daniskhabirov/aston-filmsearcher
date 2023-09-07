import React from "react";
import {
  Header as HeaderContainer,
  Group,
  ActionIcon,
  Box,
} from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

import { IconGhost2 } from "@tabler/icons-react";

import UserAvatar from "../UserAvatar/UserAvatar";

import IfAuth from "../auth/IfAuth/IfAuth";
import IfNotAuth from "../auth/IfNotAuth/IfNotAuth";
import LogoutButton from "../auth/LogoutButton/LogoutButton";
import LoginButton from "../auth/LoginButton/LoginButton";
import SignUpButton from "../auth/SignUpButton/SignUpButton";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

import s from "./Header.module.css";

const LINKS = [
  { link: "/", label: "Home" },
  { link: "/search", label: "Search" },
  { link: "/history", label: "History" },
  { link: "/favorite", label: "Favorite" },
];

const Header = () => {
  const navLinks = LINKS.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={({ isActive }) =>
        `${s.link} ${isActive ? s.linkActive : undefined}`
      }
    >
      {item.label}
    </NavLink>
  ));

  return (
    <HeaderContainer height={60} className={s.root}>
      <Box className={s.header}>
        <ActionIcon component={Link} to="/">
          <IconGhost2 />
        </ActionIcon>
        <Group>{navLinks}</Group>
        <Group>
          <IfAuth>
            <>
              <UserAvatar />
              <LogoutButton />
            </>
          </IfAuth>
          <IfNotAuth>
            <>
              <LoginButton />
              <SignUpButton />
            </>
          </IfNotAuth>
          <ThemeSwitch />
        </Group>
      </Box>
    </HeaderContainer>
  );
};

export default Header;
