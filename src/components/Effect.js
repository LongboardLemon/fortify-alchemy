import React from "react";
import { graphql } from "gatsby";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import IngredientGrid from "./IngredientGrid";
import Layout from "./Layout";
import SchoolAvatar from "./SchoolAvatar";

const EffectDetail = ({ effect }) => {
    let styles = effectStyles();
    return (
        <Card className={styles.effectCard} raised>
            <CardHeader
                avatar={
                    <SchoolAvatar
                        className={styles.avatar}
                        iconProps={{ className: styles.icon }}
                        school={effect.school} />
                }
                subheader={effect.effect}
                title={
                    <Typography variant="h4">{effect.name}</Typography>
                } />
            <CardContent>
                {effect.description}
            </CardContent>
        </Card>
    );
};

const Effect = ({ data }) => (
    <Layout>
        <EffectDetail effect={data.effectsJson} />
        <IngredientGrid ingredients={data.effectsJson.ingredients} />
    </Layout>
);

const effectStyles = makeStyles(theme => ({
    avatar: {
        height: 80,
        width: 80,
    },
    effectCard: {
        marginBottom: theme.spacing(2),
        width: "100%",
    },
    icon: {
        height: "2em",
        width: "2em",
    },
}));

export default Effect;

export const pageQuery = graphql`
    query EffectQuery($slug: String) {
        effectsJson(slug: { eq: $slug }) {
            description
            effect
            ingredients {
                ...ingredientTile
            }
            name
            poison
            school
        }
    }
`;
