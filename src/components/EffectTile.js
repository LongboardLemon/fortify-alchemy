import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Link from "./Link";
import SchoolAvatar from "../components/SchoolAvatar";

const EffectTile = ({ effect, name, poison, school, slug }) => {
    let styles = effectTileStyles();
    return (
        <Card className={styles.root} raised>
            <CardHeader
                avatar={
                    <SchoolAvatar
                        alt={name}
                        iconProps={{ color: "primary" }}
                        school={school} />
                }
                classes={{ title: styles.title }}
                subheader={school}
                title={
                    <Link to={`/effect/${slug}`}>
                        {name}
                    </Link>
                } />
            <CardContent>{effect}</CardContent>
        </Card>
    );
};

export default EffectTile;

const effectTileStyles = makeStyles(theme => ({
    root: {
        flexBasis: 300,
        margin: theme.spacing(1),
        padding: theme.spacing(1, 2),
        [theme.breakpoints.down("md")]: {
            flexBasis: 298,
        },
        [theme.breakpoints.down("sm")]: {
            flexBasis: 276,
        },
        [theme.breakpoints.down("xs")]: {
            flexBasis: "auto",
            width: "100%",
        },
    },

    title: {
        fontFamily: "AlmendraSC",
        fontSize: 20,
    },
}));
