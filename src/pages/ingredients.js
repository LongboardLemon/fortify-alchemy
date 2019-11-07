import React from "react";
import { graphql } from "gatsby";

import IngredientGrid from "../components/IngredientGrid";
import Layout from "../components/Layout";

const Ingredients = ({ data }) => (
    <Layout>
        <IngredientGrid ingredients={data && data.allIngredientsJson.edges} />
    </Layout>
);

export const pageQuery = graphql`
    query {
        allIngredientsJson {
            edges {
                node {
                    ...ingredientTile
                }
            }
        }
    }
`;

export default Ingredients;
