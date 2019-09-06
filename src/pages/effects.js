import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const Effects = ({ data }) => (
    <Layout>
        {data && data.allEffectsJson.edges.map((effect, i) => (
            <div>{effect.node.name}</div>
        ))}
    </Layout>
);

export const pageQuery = graphql`
    query {
        allEffectsJson {
            edges {
                node {
                    effect
                    name
                    slug
                }
            }
        }
    }
`;

export default Effects;
