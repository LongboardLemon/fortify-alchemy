import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import IngredientTile from "./IngredientTile";

const IngredientGrid = ({ ingredients }) => {
    let styles = ingredientGridStyles();
    return (
        <Grid
            alignItems="stretch"
            justify="center"
            classes={{ container: styles.container }}
            container>
            {ingredients && ingredients.map((ingredient, i) => {
                let ingredientData = ingredient.node || ingredient;
                return (
                    <Grid
                        component={props => <IngredientTile {...ingredientData} />}
                        item
                        key={i}
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12} />
                );
            })}
        </Grid>
    );
};

const ingredientGridStyles = makeStyles(theme => ({
    container: {
        justifyContent: "flex-start",
        margin: theme.spacing(-1),
        width: `calc(100% + ${theme.spacing(2)}px)`,
    },
}));

export default IngredientGrid;
