import React from "react";
import { Avatar } from "@mantine/core";

import { getUserEmail } from "../../app/reducers/selectors";
import { useAppSelector } from "../../hooks/reduxHooks";
import { getFirstLetter } from "../../utils/getFirstLetter";

const UserAvatar = () => {
  const userEmail = useAppSelector(getUserEmail);
  const userEmailFirstLetter = getFirstLetter(userEmail);

  return (
    <Avatar color="cyan" radius="xl" size="sm">
      {userEmailFirstLetter}
    </Avatar>
  );
};

export default UserAvatar;
