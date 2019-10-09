import React, { useState } from "react";
import { Link } from "gatsby";

const CustomLink = ({ children, style, ...button }) => {
    let [hover, setHover] = useState(false);
    return (
        <Link
            style={Object.assign({},
                styles.root,
                hover && style && style.hover,
                style && style.root
            )}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...button}>
            {children}
        </Link>
    );
};

const styles = {
    root: {
        backgroundColor: "inherit",
        border: "none",
        color: "inherit",
        cursor: "pointer",
        display: "inline-block",
        fontFamily: "inherit",
        letterSpacing: ".5px",
        margin: 0,
        padding: 0,
        textDecoration: "none",
        textShadow: "0 1px 5px black",
        transition: "all .1s ease-in",
    },
};

export default CustomLink;
