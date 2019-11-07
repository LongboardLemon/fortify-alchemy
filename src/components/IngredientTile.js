import React from "react";
import { graphql } from "gatsby";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import IngredientAvatar from "./IngredientAvatar";
import Link from "./Link";
import valueIcon from "../images/value-icon.png";
import weightIcon from "../images/weight-icon.png";

export const IngredientAttributes = props => {
    let styles = ingredientTileStyles();
    return (
        <React.Fragment>
            {props.value && <div className={styles.attributeWrapper}>
                <img
                    alt="Value"
                    className={styles.attributeImage}
                    src={valueIcon} />
                <p className={styles.attribute}>{props.value}</p>
            </div>}
            {props.weight && <div className={styles.attributeWrapper}>
                <img
                    alt="Weight"
                    className={styles.attributeImage}
                    src={weightIcon} />
                <p className={styles.attribute}>{props.weight}</p>
            </div>}
        </React.Fragment>
    );
};

const IngredientTile = props => {
    let styles = ingredientTileStyles();
    return (
        <Card className={styles.root} raised>
            <CardHeader
                avatar={
                    <IngredientAvatar
                        alt={props.name}
                        iconProps={{ color: "primary" }}
                        type={props.type} />
                }
                classes={{
                    subheader: styles.attributes,
                    title: styles.title
                }}
                subheader={
                    <IngredientAttributes
                        value={props.value}
                        weight={props.weight} />
                }
                title={
                    <Link to={`/ingredient/${props.slug}`}>
                        {props.name}
                    </Link>
                } />
            <CardContent className={styles.effectWrapper}>
                {props.effects.map((effect, i) => (
                    <Link
                        key={i}
                        style={styles.effect}
                        to={`/effect/${effect.slug}`}>
                        {effect.name}
                    </Link>
                ))}
            </CardContent>
        </Card>
    );
};

const ingredientTileStyles = makeStyles(theme => ({
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
        padding: theme.spacing(2, 1),
    },
    effectWrapper: {
        display: "flex",
        flexDirection: "column",
    },

    title: {
        fontFamily: "AlmendraSC",
        fontSize: 20,
    },
}));

export default IngredientTile;

export const ingredientTileFragment = graphql`
    fragment ingredientTile on ingredientsJson {
        effects {
            name
            poison
            slug
        }
        id
        itemID
        name
        slug
        type
        value
        weight
    }
`;
