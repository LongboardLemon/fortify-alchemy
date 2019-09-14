import React from "react";
import { graphql } from "gatsby";

import IngredientTile from "./IngredientTile";
import Layout from "./Layout";

const Effect = ({ data }) => {
    return (
        <Layout>
            <div >
                <h1>{data.effectsJson.name}</h1>
                <p>{data.effectsJson.description}</p>
            </div>
            <div>
                {data.allIngredientsJson && data.allIngredientsJson.edges.map((ingredient, i) => (
                    <IngredientTile key={i} {...ingredient.node} />
                ))}
            </div>
        </Layout>
    );
};

export default Effect;

export const pageQuery = graphql`
    query EffectQuery($slug: String) {
        allIngredientsJson(filter: { effects: { elemMatch: { slug: { eq: $slug } } } }) {
            edges {
                node {
                    effects {
                        name
                        poison
                        slug
                    }
                    name
                    slug
                }
            }
        }
        effectsJson(slug: { eq: $slug }) {
            description
            effect
            name
            poison
        }
    }
`;
