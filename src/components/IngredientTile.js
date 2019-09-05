import React from "react";
import { Link } from "gatsby";

const IngredientTile = props => {
    return (
        <div style={styles.root}>
            <Link to={`/ingredient/${props.slug}`}>{props.name}</Link>
            <div style={styles.attributeWrapper}>
                {props.value && <p style={styles.attribute}>
                    Value: {props.value}
                </p>}
                {props.weight && <p style={styles.attribute}>
                    Weight: {props.weight}
                </p>}
            </div>
            <div style={styles.effectWrapper}>
                {props.effects.map((effect, i) => (
                    <div key={i} style={styles.effect}>{effect.name}</div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    root: {
        border: "1px solid black",
        flexBasis: 240,
        margin: 8,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },

    attribute: {
        flexBasis: "50%",
    },
    attributeWrapper: {
        display: "flex",
    },

    effect: {
        alignSelf: "center",
        flexBasis: "50%",
        paddingBottom: 8,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 8,
        textAlign: "center",
    },
    effectWrapper: {
        display: "flex",
        flexWrap: "wrap",
    },
};

export default IngredientTile;
