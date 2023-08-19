import React from "react";
import { useState } from "react";
import { Header as HeaderContainer, Container, Group } from "@mantine/core";

import useStyles from "./Header.styles";
import { LINKS } from "./constants";

export function Header() {
  const [active, setActive] = useState(LINKS[0].link);
  const { classes, cx } = useStyles();

  const items = LINKS.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <HeaderContainer height={60}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
      </Container>
    </HeaderContainer>
  );
}
