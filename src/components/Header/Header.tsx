import React from "react";
import { Header as HeaderContainer, Group, ActionIcon } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

import { IconGhost2 } from "@tabler/icons-react";

import AuthButton from "../AuthButton/AuthButton";

import IfAuth from "../IfAuth/IfAuth";
import UserAvatar from "../UserAvatar/UserAvatar";

import s from "./Header.module.css";

const LINKS = [
  { link: "/", label: "Home" },
  { link: "/search", label: "Search" },
  { link: "/history", label: "History" },
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
      <div className={s.header}>
        <ActionIcon component={Link} to="/">
          <IconGhost2 />
        </ActionIcon>
        <Group>{navLinks}</Group>
        <Group>
          <IfAuth>
            <UserAvatar />
          </IfAuth>
          <AuthButton />
        </Group>
      </div>
    </HeaderContainer>
  );
};

export default Header;
