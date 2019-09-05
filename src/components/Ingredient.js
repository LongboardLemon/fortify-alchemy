import React from "react";
import { graphql } from "gatsby";

import Layout from "./Layout";

const Ingredient = ({ data }) => {
    return (
        <Layout>
            <div style={styles.root}>
                <h1>{data.ingredientsJson.name}</h1>
                <p>{data.ingredientsJson.description}</p>
            </div>
        </Layout>
    );
};

let styles = {};

export default Ingredient;

export const pageQuery = graphql`
    query IngredientQuery($slug: String) {
        ingredientsJson(slug: { eq: $slug }) {
            description
            effects {
                name
                poison
                slug
            }
            name
            value
            weight
        }
    }
`;
