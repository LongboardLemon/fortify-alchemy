import React from "react";

import Navigation from "./Navigation";
import { SearchStore } from "./SearchInput";
import Sidebar from "./Sidebar";
import "../css/index.css";

const Layout = ({ children }) => (
    <SearchStore>
        <div style={styles.root}>
            <Navigation />
            <div style={styles.body}>
                <Sidebar />
                <div style={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    </SearchStore>
);

const styles = {
    root: {
        backgroundColor: "#3C3C3C",
        color: "#DEDEDE",
        minHeight: "100%",
    },
    body: {
        display: "flex",
    },
    content: {
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
};

export default Layout;
