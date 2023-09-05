import React from "react";
import { Avatar } from "@mantine/core";

import { getUserName } from "../../app/reducers/selectors";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getFirstLetter } from "../../utils/getFirstLetter";

const UserAvatar = () => {
  const userName = useAppSelector(getUserName);
  const userNameFirstLetter = getFirstLetter(userName);

  return (
    <Avatar color="cyan" radius="xl" size="sm">
      {userNameFirstLetter}
    </Avatar>
  );
};

export default UserAvatar;
