import React from "react";

import Navigation from "./Navigation";
import "../css/index.css";

const Layout = ({ children }) => (
    <div style={styles.root}>
        <Navigation />
        <div style={styles.body}>
            {children}
        </div>
    </div>
);

const styles = {
    root: {
        backgroundColor: "#3C3C3C",
        color: "#DEDEDE",
        minHeight: "100%",
    },
    body: {
        display: "flex",
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
};

export default Layout;
