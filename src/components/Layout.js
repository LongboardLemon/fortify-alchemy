import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";

import Navigation from "./Navigation";
import { SearchStore } from "./SearchInput";
import themeDark from "../theme";
import "../theme/index.css";

const Layout = ({children}) => {
    let styles = layoutStyles();
    return (
        <div className={styles.root}>
            <Navigation />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};

const LayoutWrapper = ({ children }) => {
    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            <SearchStore>
                <Layout>{children}</Layout>
            </SearchStore>
        </ThemeProvider>
    );
};

const layoutStyles = makeStyles(theme => ({
    root: {
        minHeight: "100%",
    },
    body: {
        display: "flex",
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
}));

export default LayoutWrapper;
