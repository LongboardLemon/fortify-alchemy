import React from "react";

import Link from "./Link";
import valueIcon from "../images/value-icon.png";
import weightIcon from "../images/weight-icon.png";

const IngredientTile = props => {
    return (
        <div style={styles.root}>
            <Link style={styles.title} to={`/ingredient/${props.slug}`}>
                {props.name}
            </Link>
            <div style={styles.attributes}>
                {props.value && <div style={styles.attributeWrapper}>
                    <img alt="Value" src={valueIcon} style={styles.attributeImage} />
                    <p style={styles.attribute}>{props.value}</p>
                </div>}
                {props.weight && <div style={styles.attributeWrapper}>
                    <img alt="Weight" src={weightIcon} style={styles.attributeImage} />
                    <p style={styles.attribute}>{props.weight}</p>
                </div>}
            </div>
            <div style={styles.effectWrapper}>
                {props.effects.map((effect, i) => (
                    <Link key={i} style={styles.effect} to={`/effect/${effect.slug}`}>{effect.name}</Link>
                ))}
            </div>
        </div>
    );
};

const styles = {
    root: {
        backgroundColor: "#1E1E1E",
        boxShadow: "0 1px 5px 1px rgba(0, 0, 0, .5)",
        flexBasis: 280,
        margin: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },

    attribute: {
        display: "inline-block",
        height: 24,
        lineHeight: "24px",
        paddingTop: 4,
        paddingLeft: 16,
        paddingBottom: 8,
    },
    attributes: {
        display: "flex",
        marginBottom: 8,
    },
    attributeImage: {
        height: 24,
        width: 24,
    },
    attributeWrapper: {
        alignItems: "center",
        display: "flex",
        flexBasis: "50%",
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

    title: {
        fontFamily: "AlmendraSC",
        fontSize: 20,
        marginBottom: 16,
    },
};

export default IngredientTile;
