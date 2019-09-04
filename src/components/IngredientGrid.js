import React from "react";

import IngredientTile from "./IngredientTile";

const IngredientGrid = ({ ingredients }) => {
    return (
        <div style={styles.root}>
            {ingredients && ingredients.map((ingredient, i) => <IngredientTile
                key={i}
                {...ingredient.node}
            />)}
        </div>
    );
};

const styles = {
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
};

export default IngredientGrid;
