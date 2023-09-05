import React, { useContext } from "react";
import { Switch } from "@mantine/core";

import { IconBrightnessDown, IconMoon } from "@tabler/icons-react";

import { ThemeContext } from "../../utils/themeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      size="md"
      onLabel={<IconBrightnessDown size="inherrit" />}
      offLabel={<IconMoon size="inherrit" />}
    />
  );
};

export default ThemeButton;
