import React from "react";
import { graphql } from "gatsby";
import { Box, Card, CardContent, CardHeader, Chip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import IngredientAvatar from "./IngredientAvatar";
import IngredientGrid from "./IngredientGrid";
import { IngredientAttributes } from "./IngredientTile";
import Layout from "./Layout";
import SchoolAvatar from "./SchoolAvatar";

const IngredientDetail = ({ ingredient }) => {
    let styles = ingredientStyles();
    return (
        <Card classes={{ root: `${styles.flexColumn} ${styles.ingredientCard}` }} raised>
            <CardHeader
                avatar={
                    <IngredientAvatar
                        className={styles.avatar}
                        iconProps={{ className: styles.icon }}
                        type={ingredient.type} />
                }
                classes={{
                    content: styles.headerContent,
                    subheader: styles.attributes,
                }}
                subheader={
                    <IngredientAttributes
                        value={ingredient.value}
                        weight={ingredient.weight} />
                }
                title={
                    <Typography variant="h4">{ingredient.name}</Typography>
                } />
            <CardContent>
                {ingredient.description}
            </CardContent>
        </Card>
    );
};

const EffectsSummary = ({ ingredient }) => {
    let styles = ingredientStyles();
    return (
        <Box className={styles.flexColumn}>
            {ingredient.effects.map((effect, i) => {
                let ingredientArray = effect.ingredients.filter(item => item.slug !== ingredient.slug);
                return (
                    <Box key={i}>
                        <Chip
                            className={styles.effectDivider}
                            icon={<SchoolAvatar school={effect.school} />}
                            label={effect.name} />
                        <IngredientGrid ingredients={ingredientArray} />
                    </Box>
                );
            })}
        </Box>
    );
};

const Ingredient = ({ data }) => (
    <Layout>
        <IngredientDetail ingredient={data.ingredientsJson} />
        <EffectsSummary ingredient={data.ingredientsJson} />
    </Layout>
);

const ingredientStyles = makeStyles(theme => ({
    attributes: {
        display: "flex",
        width: 228,
        [theme.breakpoints.down("xs")]: {
            width: "auto",
        },
    },
    avatar: {
        height: 80,
        width: 80,
    },
    effectDivider: {
        margin: theme.spacing(2, 0),
        width: "100%",
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    icon: {
        height: "2em",
        width: "2em",
    },
    ingredientCard: {
        marginBottom: theme.spacing(2),
        width: "100%",
    },
    headerContent: {
        flex: "0 1 auto",
    },
}));

export default Ingredient;

export const pageQuery = graphql`
    query IngredientQuery($slug: String) {
        ingredientsJson(slug: { eq: $slug }) {
            description
            effects {
                ingredients {
                    ...ingredientTile
                }
                name
                poison
                school
                slug
            }
            name
            type
            value
            weight
        }
    }
`;
