import React, { useContext } from "react";
import { Switch } from "@mantine/core";

import { IconSun, IconMoonStars } from "@tabler/icons-react";

import { ThemeContext } from "../../utils/themeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      size="md"
      onLabel={<IconSun width={16} height={16} cursor="pointer" />}
      offLabel={<IconMoonStars width={16} height={16} cursor="pointer" />}
    />
  );
};

export default ThemeSwitch;
