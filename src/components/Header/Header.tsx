import React from "react";
import {
  Header as HeaderContainer,
  Group,
  Container,
  ActionIcon,
} from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

import { IconGhost2 } from "@tabler/icons-react";

import { LINKS } from "./constants";

import styles from "./Header.module.css";

const Header = () => {
  const items = LINKS.map((link) => (
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
        <ActionIcon component={Link} to="/" className={styles.icon}>
          <IconGhost2 />
        </ActionIcon>
        <Group>{items}</Group>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
