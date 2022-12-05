import { Button } from "@mui/material";

type HeaderButtonProps = {
  title: string;
  onClick: Function;
  isSelected: Boolean;
  isCenter: Boolean;
};

export default function HeaderButton({
  title,
  onClick,
  isSelected,
  isCenter,
}: HeaderButtonProps) {
  return (
    <Button
      onClick={(i) => onClick(i)}
      sx={{
        justifyContent: isCenter ? "flex-start" : "center",
        display: "flex",
        fontWeight: isSelected ? "bold" : "light",
        padding: "0px",
        color: "white",
        fontSize: "18px",
      }}
      disableRipple
    >
      {title.toUpperCase()}
    </Button>
  );
}
