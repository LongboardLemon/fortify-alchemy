import React from "react";

import Navigation from "./Navigation";
import "../css/index.css";

const Layout = ({ children }) => (
    <React.Fragment>
        <Navigation />
        <div style={styles.root}>
            {children}
        </div>
    </React.Fragment>
);

const styles = {
    root: {
        display: "flex",
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
};

export default Layout;
