const path = require("path")

exports.createSchemaCustomization = ({ actions, schema }) => {
    actions.createFieldExtension({
        name: "slug",
        extend(options, prevFieldConfig) {
            return {
                resolve(source) {
                    return source.name.replace(/\s/g, "-").toLowerCase();
                }
            };
        },
    });
    const typeDefs = `
        type effectsJson implements Node {
            description: String
            effect: String
            name: String!
            poison: Boolean
            slug: String @slug
        }
        type ingredientsJson implements Node {
            description: String
            effects: [effectsJson!]! @link(by: "slug")
            name: String!
            itemID: String
            slug: String @slug
            value: Int
            weight: Float
        }
    `;
    actions.createTypes(typeDefs);
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const ingredientPage = path.resolve("./src/components/Ingredient.js");
    const ingredientResult = await graphql(`
        query {
            allIngredientsJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    const ingredients = ingredientResult.data.allIngredientsJson.edges;
    ingredients.forEach((ingredient, index) => {
        createPage({
            component: ingredientPage,
            context: { slug: ingredient.node.fields.slug },
            path: `/ingredient/${ingredient.node.fields.slug}`,
        });
    });
};

exports.onCreateNode = ({ actions, getNode, node }) => {
    const { createNodeField } = actions;
    if (node.internal.type == "ingredientsJson" || node.internal.type == "effectsJson") {
        createNodeField({
            name: "slug",
            node,
            value: `${node.name.replace(/\s/g, "-").toLowerCase()}`
        });
    }
};
