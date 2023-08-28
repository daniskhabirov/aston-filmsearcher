import React from "react";
import {
  Header as HeaderContainer,
  Group,
  Container,
  ActionIcon,
} from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

import { IconGhost2 } from "@tabler/icons-react";

import AuthButton from "../AuthButton/AuthButton";

import IfAuth from "../IfAuth/IfAuth";
import UserAvatar from "../UserAvatar/UserAvatar";

import styles from "./Header.module.css";

const LINKS = [
  { link: "/", label: "Home" },
  { link: "/search", label: "Search" },
  { link: "/history", label: "History" },
];

const Header = () => {
  const navLinks = LINKS.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.linkActive : null}`
      }
    >
      {link.label}
    </NavLink>
  ));

  return (
    <HeaderContainer height={60} className={styles.root}>
      <Container className={styles.header}>
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
      </Container>
    </HeaderContainer>
  );
};

export default Header;
