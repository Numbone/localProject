import React from "react";
import "./styles.scss";
import {
  AppBar,
  Button,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { ReactComponent as Logo } from "../../shared/icons/Header/Logo.svg";
import { ListItemDecorator } from "@mui/joy";
import ArrowRight from "@mui/icons-material/ArrowRight";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  const SIZES = ["X-Small", "Small", "Medium", "Large", "X-Large"];
  const [size, setSize] = React.useState("Medium");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Button
          id="group-demo-button"
          aria-controls={open ? "group-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="outlined"
          color="info"
          onClick={handleClick}
          endIcon={<ArrowDropDown />}
          sx={{ ml: 4, padding: "10px 15px", border: "none" }}
        >
          {"Продукты"}
        </Button>
        <Menu
          id="group-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          aria-labelledby="group-demo-button"
          sx={{ minWidth: 160, "--ListItemDecorator-size": "24px" }}
        >
          <MenuItem
            onClick={() => {
              const nextIndex = SIZES.indexOf(size) - 1;
              const value =
                nextIndex < 0 ? SIZES[SIZES.length - 1] : SIZES[nextIndex];
              setSize(value);
              handleClose();
            }}
          >
            Smaller
          </MenuItem>
          <MenuItem
            onClick={() => {
              const nextIndex = SIZES.indexOf(size) + 1;
              const value =
                nextIndex > SIZES.length - 1 ? SIZES[0] : SIZES[nextIndex];
              setSize(value);
              handleClose();
            }}
          >
            Larger
          </MenuItem>
        </Menu>
        <Typography variant="h6">Typography</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
