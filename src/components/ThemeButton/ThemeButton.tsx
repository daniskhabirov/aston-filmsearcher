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
      onLabel={<IconBrightnessDown width={16} height={16} />}
      offLabel={<IconMoon width={16} height={16} />}
    />
  );
};

export default ThemeButton;
