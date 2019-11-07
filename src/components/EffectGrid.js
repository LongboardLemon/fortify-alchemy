import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import EffectTile from "./EffectTile";

const EffectGrid = ({ effects }) => {
    let styles = effectGridStyles();
    return (
        <Grid
            alignItems="stretch"
            classes={{ container: styles.container }}
            container
            justify="center">
            {effects && effects.map((effect, i) => <Grid
                component={props => <EffectTile {...effect.node} />}
                item
                key={i}
                lg={3}
                md={4}
                sm={6}
                xs={12} />)}
        </Grid>
    );
};

const effectGridStyles = makeStyles(theme => ({
    container: {
        justifyContent: "flex-start",
        margin: theme.spacing(-1),
        width: `calc(100% + ${theme.spacing(2)}px)`,
    },
}));

export default EffectGrid;
