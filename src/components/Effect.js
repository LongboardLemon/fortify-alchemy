import React from "react";
import { graphql } from "gatsby";

import Layout from "./Layout";

const Effect = ({ data }) => {
    return (
        <Layout>
            <div >
                <h1>{data.effectsJson.name}</h1>
                <p>{data.effectsJson.description}</p>
            </div>
        </Layout>
    );
};

export default Effect;

export const pageQuery = graphql`
    query EffectQuery($slug: String) {
        effectsJson(slug: { eq: $slug }) {
            description
            effect
            name
            poison
        }
    }
`;
