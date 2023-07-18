import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Root = styled("div")(({ theme }) => ({
  "& > .logo-icon": {
    transition: theme.transitions.create(["width", "height"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  "& > .badge": {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      <Link to="/" role="button">
        <img
          className="logo-icon w-32 h-32"
          src="assets/images/logo/logo.svg"
          alt="logo"
        />
      </Link>
    </Root>
  );
}

export default Logo;
