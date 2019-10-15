import React, { useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";

const CustomLink = React.forwardRef(({ children, style, ...props }, ref) => {
    let [hover, setHover] = useState(false);
    let styles = stylesLink();
    let stylesArray = [
        styles.root,
        hover && style && style.hover,
        style && style.root
    ];
    return (
        <Link
            className={stylesArray.join(" ")}
            component={React.forwardRef((linkProps, linkRef) => (
                <GatsbyLink innerRef={linkRef} {...linkProps} />
            ))}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            ref={ref}
            {...props}>
            {children}
        </Link>
    );
});

const stylesLink = makeStyles(theme => ({
    root: {
        backgroundColor: "inherit",
        border: "none",
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
}));

export default CustomLink;
