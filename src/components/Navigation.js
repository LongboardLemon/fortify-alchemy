import React from "react";

import Link from "./Link";
import SearchContainer from "./SearchInput";

const Navigation = props => {
    return (
        <div style={styles.root}>
            <SearchContainer />
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
};

const styles = {
    root: {
        alignItems: "center",
        display: "flex",
        padding: 24,
    },
};

export default Navigation;
