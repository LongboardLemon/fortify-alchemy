import React from "react";

import Link from "./Link";
import SearchInput from "./SearchInput";

const Navigation = props => (
    <div style={styles.root}>
        <SearchInput />
        <Link
            to="/ingredients">
            Ingredients
        </Link>
        <Link
            to="/effects">
            Effects
        </Link>
    </div>
);

const styles = {
    root: {
        alignItems: "center",
        display: "flex",
        padding: 24,
    },
};

export default Navigation;
