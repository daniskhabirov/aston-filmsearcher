import React from "react";
import { Avatar } from "@mantine/core";

import { getFirstLetterEmail } from "../../app/reducers/selectors";
import { useAppSelector } from "../../hooks/reduxHooks";

const UserAvatar = () => {
  const emailFirstLetter = useAppSelector(getFirstLetterEmail);
  return (
    <Avatar color="cyan" radius="xl" size="sm">
      {emailFirstLetter}
    </Avatar>
  );
};

export default UserAvatar;
