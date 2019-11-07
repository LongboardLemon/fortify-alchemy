import React, { useState } from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { SearchIcon } from "./icons";
import Link from "./Link";
import Sidebar from "./Sidebar";

const Navigation = props => {
    let [open, setOpen] = useState(false);
    let styles = appBarStyles();
    let handleSidebar = arg => event => {
        setOpen(arg);
    };
    return (
        <AppBar color="secondary" position="sticky">
            <Toolbar>
                <Link
                    className={styles.navLink}
                    to="/ingredients">
                    Ingredients
                </Link>
                <Link
                    className={styles.navLink}
                    to="/effects">
                    Effects
                </Link>
                <div className={styles.grow} />
                <IconButton
                    aria-label="search"
                    onClick={handleSidebar(true)}>
                    <SearchIcon color="primary" />
                </IconButton>
                <Sidebar onClose={handleSidebar} open={open} />
            </Toolbar>
        </AppBar>
    );
};

const appBarStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    navLink: {
        marginRight: theme.spacing(2),
    },
}));

export default Navigation;
