import React from "react";
import "shared/fonts/AvenirLTStd-Black.otf";
import "shared/fonts/AvenirLTStd-Book.otf";
import "shared/fonts/Gilroy-ExtraBold.otf";
import "shared/fonts/Gilroy-Light.otf";
import "./styles.scss";
import Header from "../entities/Header";
import { withProviders } from "./providers";
import Routing from "pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "shared/themes";
import MuiTypography from "entities/MuiTypography";
import MuiButton from "entities/MuiButton";
import { Provider } from "react-redux";
import { store } from "shared/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <MuiTypography />
        <MuiButton /> */}
        <Header />
        <Routing />
      </ThemeProvider>
    </Provider>
  );
};

export default withProviders(App);
