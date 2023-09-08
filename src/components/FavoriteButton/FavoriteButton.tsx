import React from "react";
import { Checkbox, CheckboxProps, Loader } from "@mantine/core";
import { ChangeEventHandler } from "react";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import PropTypes from "prop-types";

interface IconProps {
  indeterminate: boolean;
  className: string;
}

const CheckboxIcon: CheckboxProps["icon"] = ({
  indeterminate,
  className,
}: IconProps) =>
  indeterminate ? (
    <IconHeartFilled className={className} />
  ) : (
    <IconHeart className={className} />
  );

type Props = {
  isLoading?: boolean;
  checked: boolean;
  checkboxHandler: ChangeEventHandler<HTMLInputElement>;
};

const FavoriteButton = ({ isLoading, checked, checkboxHandler }: Props) => {
  if (isLoading) {
    return <Loader size="sm" />;
  }

  return (
    <Checkbox
      checked={checked}
      onChange={checkboxHandler}
      icon={CheckboxIcon}
      indeterminate
      size="lg"
      radius="xl"
      color="pink"
      sx={{
        color: "pink",
        input: { cursor: "pointer" },
        ":hover": {
          transform: "translateY(-3px)",
        },
      }}
    />
  );
};

FavoriteButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkboxHandler: PropTypes.func.isRequired,
};

export default FavoriteButton;
