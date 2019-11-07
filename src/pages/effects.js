import React from "react";
import { graphql } from "gatsby";

import EffectGrid from "../components/EffectGrid";
import Layout from "../components/Layout";

const Effects = ({ data }) => (
    <Layout>
        <EffectGrid effects={data.allEffectsJson.edges} />
    </Layout>
);

export const pageQuery = graphql`
    query {
        allEffectsJson {
            edges {
                node {
                    effect
                    name
                    poison
                    school
                    slug
                }
            }
        }
    }
`;

export default Effects;
