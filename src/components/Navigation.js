import React from "react";
import { Link } from "gatsby";

const Navigation = props => {
    return (
        <div style={styles.root}>
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
        padding: 24,
    },
};

export default Navigation;
